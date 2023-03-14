import { CoreMenuFields, CoreCartFields } from "../mbmc/models";
export type TRestaurantState = {
    menu?: CoreMenuFields;
    cart?: CoreCartFields;
};
export type TAppState = {
    restaurant?: TRestaurantState;
    loading?: boolean;
    networkOperation?: string;
    gatewayUrl?: string;
};
