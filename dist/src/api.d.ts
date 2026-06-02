import { TypedDocumentNode } from '@graphql-typed-document-node/core';
export type UnwrapEdges<T> = T extends null | undefined ? T : T extends {
    edges?: ReadonlyArray<{
        node?: infer N | null;
    } | null> | null;
} ? Array<UnwrapEdges<NonNullable<N>>> & {
    [K in Exclude<keyof T, "__typename">]: UnwrapEdges<T[K]>;
} : T extends object ? {
    [K in keyof T]: UnwrapEdges<T[K]>;
} : T;
export declare const isObjectRecord: (value: unknown) => value is Record<string, unknown>;
export declare function unwrapEdges<T>(obj: T): UnwrapEdges<T>;
export interface ApiConfig {
    protocol?: string;
    apiDomain?: string;
}
export declare const createApi: (tenantDomain: string, tagsCollector: Set<string>, config?: ApiConfig) => {
    get: <T>(path: string, options?: RequestInit) => Promise<T>;
    post: <T>(path: string, body?: any, options?: RequestInit) => Promise<T>;
    gql: <TResult, TVariables extends object = {}>(document: TypedDocumentNode<TResult, TVariables> | string, variables?: TVariables) => Promise<UnwrapEdges<TResult>>;
};
