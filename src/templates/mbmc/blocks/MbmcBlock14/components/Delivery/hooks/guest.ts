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

  return async (variables: TUpdateGuestVariables, onSuccess?: () => void, isPickup?: boolean) => {
    const siteUuid = cart?.restaurant?.site?.uuid as string;
    const cartUuid = cartCookie[siteUuid];
    setContext?.({
      loading: true,
      networkOperation: isPickup ? "set.delivery.pickup" : "set.delivery.dispatch",
    });

    try {
      const { data, errors } = await (
        clients?.AMBROSIA as ApolloClient<NormalizedCacheObject>
      ).mutate({ mutation: UPDATE_GUEST, variables: { ...variables, cart_uuid: cartUuid } });

      if (!data || errors) {
        throw new Error("We could not complete that operation");
      }

      const guest = data.updateGuest;
      delete guest?.address;
      const updatedCart = { ...cart, address: undefined } as CoreCartFields;
      updatedCart.guest = guest;

      isPickup && setContext?.({ loading: false, networkOperation: "", cart: updatedCart });
      isPickup && notify("success", "Delivery option set as pickup");
      isPickup && onSuccess?.();
      return guest;
    } catch (error) {
      setContext?.({ loading: false, networkOperation: "" });
      notify("error", "We could not complete that operation");
    }
  };
};
