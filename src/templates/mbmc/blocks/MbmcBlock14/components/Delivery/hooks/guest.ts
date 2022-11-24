import { useContext } from "react";
import { TUpdateGuestVariables } from "./types";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { RestaurantContext } from "../../../../../contexts";
import { UPDATE_GUEST } from "../graphql";
import { notify } from "../../../../../utilities";
import { CoreCartFields } from "../../../../../models";
import Cookies from "universal-cookie";

export const useUpdateGuest = () => {
    const { cart, clients, setContext } = useContext(RestaurantContext);
    const cookies = new Cookies();
    const cartCookie = cookies.get("cart");

    return async (variables: TUpdateGuestVariables) => {
        const siteUuid = cart?.restaurant?.site_uuid as string;
        const cartUuid = cartCookie[siteUuid];
        setContext?.({ loading: true, networkOperation: "set.delivery.pickup" });

        try {
            const { data, errors } = await (
                clients?.AMBROSIA as ApolloClient<NormalizedCacheObject>
            ).mutate({ mutation: UPDATE_GUEST, variables: { ...variables, cart_uuid: cartUuid } });

            if (!data || errors) {
                throw new Error("We could not complete that operation");
            }

            const { guest } = data.updateGuest;
            console.log(guest);
            const updatedCart = { ...cart } as CoreCartFields;
            updatedCart.guest = guest;
            setContext?.({ loading: false, networkOperation: "", cart: updatedCart });
            return guest;
        } catch (error) {
            console.log(error);
            setContext?.({ loading: false, networkOperation: "" });
            notify("error", "We could not complete that operation");
        }
    };
};
