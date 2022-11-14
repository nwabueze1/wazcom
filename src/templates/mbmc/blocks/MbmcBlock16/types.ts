import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

export type MbmcBlock16Props = {
    name: string;
    description: string;
    image: string;
    price: number;
    currency: string;
    handleAddToCart: () => void;
    client?: ApolloClient<NormalizedCacheObject>;
    optionsConfig?: { [key: string]: any }[];
    options?: string[];
};
