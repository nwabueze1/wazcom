import { CreateResponseClientType } from "../../type";
export declare const createResponse: ({ client, mutation }: CreateResponseClientType, form_uuid: string, answers: Record<string, any>) => Promise<import("@apollo/client").FetchResult<any, Record<string, any>, Record<string, any>>>;
