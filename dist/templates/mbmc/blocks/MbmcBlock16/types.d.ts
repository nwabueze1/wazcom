import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
export declare type MbmcBlock16Props = {
    name: string;
    description: string;
    image: string;
    price: number;
    currency: string;
    siteUuid: string;
    client: ApolloClient<NormalizedCacheObject>;
    menuItemUuid: string;
    optionsConfig?: {
        [key: string]: any;
    }[];
    options?: string[];
};
