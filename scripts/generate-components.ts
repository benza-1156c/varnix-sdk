import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const UI_DIR = join(import.meta.dir, "../src/components/ui");
const OUTPUT_FILE = join(import.meta.dir, "../src/components/generated.ts");

// Helper to extract component names from index.ts
function extractComponentExports(indexPath: string): string[] {
  try {
    const content = readFileSync(indexPath, "utf-8");
    // Match: export { default as ComponentName }
    const regex = /export\s+{\s*default\s+as\s+(\w+)\s*}/g;
    const names: string[] = [];
    let match;

    while ((match = regex.exec(content)) !== null) {
      names.push(match[1]);
    }

    return names;
  } catch {
    return [];
  }
}

// Get all component directories
const componentDirs = readdirSync(UI_DIR, { withFileTypes: true })
  .filter((f) => f.isDirectory())
  .map((f) => f.name)
  .sort();

// Generate imports and registrations
const imports: string[] = [];
const registrations: string[] = [];

for (const dir of componentDirs) {
  const indexPath = join(UI_DIR, dir, "index.ts");
  const componentNames = extractComponentExports(indexPath);

  if (componentNames.length === 0) continue;

  const importPath = `./ui/${dir}`;
  imports.push(
    `import { ${componentNames.join(", ")} } from "${importPath}";`
  );

  // Register ALL components, not just the main one
  for (const componentName of componentNames) {
    registrations.push(`  app.component('${componentName}', ${componentName});`);
  }
}

const generatedCode = `// Auto-generated component registry
// Do not edit manually - run 'bun run generate-components'

import type { App } from 'vue';

${imports.join("\n")}

export function registerComponents(app: App): void {
${registrations.join("\n")}
}
`;

mkdirSync(join(OUTPUT_FILE, ".."), { recursive: true });
writeFileSync(OUTPUT_FILE, generatedCode);
console.log(`✓ Generated ${OUTPUT_FILE}`);
console.log(`✓ Registered ${registrations.length} components`);
