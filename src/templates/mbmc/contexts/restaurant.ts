import { createContext } from "react";
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { CoreCartFields, CoreMenuFields } from "../models";

export type RestaurantContextProps = {
    menu?: CoreMenuFields;
    cart?: CoreCartFields;
    client?: ApolloClient<NormalizedCacheObject>,
    loading?: boolean,
    setContext?: (data: Omit<RestaurantContextProps, "setContext">) => void;
};

export const RestaurantContext = createContext<RestaurantContextProps>({});
