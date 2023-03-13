import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { CoreMenuFields, CoreCartFields } from "../mbmc/models";
export type TRestaurantState = {
    menu?: CoreMenuFields;
    cart?: CoreCartFields;
};
export type TAppState = {
    restaurant?: TRestaurantState;
    client?: ApolloClient<NormalizedCacheObject>;
    loading?: boolean;
    networkOperation?: string;
};
