import { ApiConfig } from './api';
export declare function renderComponent(compiledUserCode: string, tenantDomain: string, apiConfig?: ApiConfig): Promise<{
    html: string;
    tags: string;
}>;
