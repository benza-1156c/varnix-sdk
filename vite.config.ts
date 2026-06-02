import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VarnixSDK",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        "vue",
        "@vue/server-renderer",
        "graphql",
        "@graphql-typed-document-node/core",
        "@lucide/vue",
        "@tailwindcss/vite",
        "@tanstack/vue-table",
        "@vee-validate/zod",
        "@vue/compiler-sfc",
        "@vueuse/core",
        "class-variance-authority",
        "clsx",
        "embla-carousel-vue",
        "reka-ui",
        "tailwind-merge",
        "tailwindcss",
        "vaul-vue",
        "vee-validate",
        "vue-input-otp",
        "vue-sonner",
        "zod",
      ],
      output: {
        globals: {
          vue: "Vue",
          "@vue/server-renderer": "VueServerRenderer",
        },
      },
    },
  },
});
