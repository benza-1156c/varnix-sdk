import { createSSRApp } from "vue";
import { renderToString } from "@vue/server-renderer";
import { createApi, type ApiConfig } from "./api";
import { registerComponents } from "./components/generated";

export async function renderComponent(
  compiledUserCode: string,
  tenantDomain: string,
  apiConfig?: ApiConfig,
) {
  const dataUrl = `data:text/javascript;base64,${Buffer.from(compiledUserCode).toString("base64")}`;
  const UserModule = await import(dataUrl);

  const UserComponent = { ...UserModule.default };

  const app = createSSRApp(UserComponent);

  registerComponents(app);

  const collectedTags = new Set<string>();
  const $api = createApi(tenantDomain, collectedTags, apiConfig);
  app.provide("api", $api);
  app.config.globalProperties.$api = $api;

  const html = await renderToString(app);

  return { html, tags: Array.from(collectedTags).join(",") };
}
