import { print } from "graphql";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";

export type UnwrapEdges<T> = T extends null | undefined
  ? T
  : T extends { edges?: ReadonlyArray<{ node?: infer N | null } | null> | null }
    ? Array<UnwrapEdges<NonNullable<N>>> & {
        [K in Exclude<keyof T, "__typename">]: UnwrapEdges<T[K]>;
      }
    : T extends object
      ? { [K in keyof T]: UnwrapEdges<T[K]> }
      : T;

export const isObjectRecord = (
  value: unknown,
): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

export function unwrapEdges<T>(obj: T): UnwrapEdges<T> {
  if (obj === null || obj === undefined)
    return obj as unknown as UnwrapEdges<T>;
  if (Array.isArray(obj))
    return obj.map((item) => unwrapEdges(item)) as UnwrapEdges<T>;
  if (typeof obj !== "object") return obj as unknown as UnwrapEdges<T>;

  if (isObjectRecord(obj) && "edges" in obj && Array.isArray(obj.edges)) {
    const nodes = obj.edges
      .map((edge) => (isObjectRecord(edge) ? edge.node : null))
      .filter(Boolean)
      .map(unwrapEdges);
    const result = [...nodes] as Array<unknown> & Record<string, unknown>;
    const rest = Object.keys(obj).filter((k) => k !== "__typename");
    for (const key of rest) result[key] = unwrapEdges(obj[key]);
    return result as UnwrapEdges<T>;
  }

  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj))
    result[key] = unwrapEdges(value);
  return result as UnwrapEdges<T>;
}

async function generateSHA256(message: string): Promise<string | null> {
  try {
    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  } catch (e) {
    return null;
  }
}

export const createApi = (tenantDomain: string, tagsCollector: Set<string>) => {
  const protocol = process.env.PROTOCOL || "https";
  const apiDomain = process.env.API || "api.example.com";
  const baseURL = `${protocol}://${tenantDomain}.${apiDomain}`;

  const baseFetchRaw = async (path: string, options: RequestInit = {}) => {
    const res = await fetch(`${baseURL}${path}`, {
      ...options,
      headers: { "Content-Type": "application/json", ...options.headers },
    });

    const apiTags = res.headers.get("X-LiteSpeed-Tag");
    if (apiTags) {
      apiTags.split(",").forEach((tag) => {
        const t = tag.trim();
        if (t) tagsCollector.add(t);
      });
    }
    return res;
  };

  const api = {
    get: async <T>(path: string, options?: RequestInit) => {
      const res = await baseFetchRaw(path, { method: "GET", ...options });
      const data = await res.json();
      if (!res.ok) throw { response: { data }, status: res.status };
      return data as T;
    },

    post: async <T>(path: string, body?: any, options?: RequestInit) => {
      const res = await baseFetchRaw(path, {
        method: "POST",
        body: JSON.stringify(body),
        ...options,
      });
      const data = await res.json();
      if (!res.ok) throw { response: { data }, status: res.status };
      return data as T;
    },

    gql: async <TResult, TVariables extends object = {}>(
      document: TypedDocumentNode<TResult, TVariables> | string,
      variables?: TVariables,
    ): Promise<UnwrapEdges<TResult>> => {
      const queryStr =
        typeof document === "string" ? document : print(document);
      const hash = await generateSHA256(queryStr);

      let payload: any = { query: queryStr, variables };
      if (hash) {
        payload = {
          variables,
          extensions: { persistedQuery: { version: 1, sha256Hash: hash } },
        };
      }

      try {
        let res = await api.post<any>("/graphql", payload);

        const isNotFound = res.errors?.some(
          (e: any) => e.message === "PersistedQueryNotFound",
        );
        if (isNotFound) {
          payload.query = queryStr;
          res = await api.post<any>("/graphql", payload);
        }

        if (res.errors?.length) throw new Error(res.errors[0]?.message);
        return unwrapEdges(res.data) as UnwrapEdges<TResult>;
      } catch (err: any) {
        throw new Error(err.message || "GraphQL API Error");
      }
    },
  };

  return api;
};
