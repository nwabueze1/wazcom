/// <reference types="react" />
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { CoreCartFields, CoreMenuFields } from "../models";
export declare type RestaurantContextProps = {
    menu?: CoreMenuFields;
    cart?: CoreCartFields;
    client?: ApolloClient<NormalizedCacheObject>;
    loading?: boolean;
    networkOperation?: string;
    notification?: {
        status: "success" | "error";
        text: string;
    };
    setContext?: (data: Omit<RestaurantContextProps, "setContext">) => void;
};
export declare const RestaurantContext: import("react").Context<RestaurantContextProps>;
