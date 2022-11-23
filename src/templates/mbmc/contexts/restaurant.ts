import { createContext } from "react";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { CoreCartFields, CoreMenuFields } from "../models";
import { HivedeckService } from "../types";

export type RestaurantContextProps = {
    menu?: CoreMenuFields;
    cart?: CoreCartFields;
    clients?: { [key: string]: ApolloClient<NormalizedCacheObject> };
    loading?: boolean;
    networkOperation?: string;
    setContext?: (data: Omit<RestaurantContextProps, "setContext">) => void;
};

export const RestaurantContext = createContext<RestaurantContextProps>({});
