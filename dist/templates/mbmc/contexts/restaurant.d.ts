/// <reference types="react" />
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { CoreCartFields, CoreMenuFields } from "../models";
export type RestaurantContextProps = {
    menu?: CoreMenuFields;
    cart?: CoreCartFields;
    clients?: {
        [key: string]: ApolloClient<NormalizedCacheObject>;
    };
    loading?: boolean;
    networkOperation?: string;
    notification?: {
        status: "success" | "error";
        text: string;
    };
    setContext?: (data: Omit<RestaurantContextProps, "setContext">) => void;
};
export declare const RestaurantContext: import("react").Context<RestaurantContextProps>;
