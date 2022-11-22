import { createContext } from "react";
import { CoreMenuFields } from "../models";

export type RestaurantContextProps = {
    menu?: CoreMenuFields;
    setContext?: (data: Omit<RestaurantContextProps, "setContext">) => void;
};

export const RestaurantContext = createContext<RestaurantContextProps>({});
