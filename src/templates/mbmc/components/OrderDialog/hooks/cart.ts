import { useContext } from "react";
import Cookies from "universal-cookie";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { RestaurantContext } from "../../../contexts";
import { CREATE_CART, CREATE_CART_ITEM } from "../graphql";
import { TAddToCartVariables } from "./types";
import { notify } from "../../../utilities";

export const useCreateCart = () => {
  const { menu, clients } = useContext(RestaurantContext);
  const cookies = new Cookies();

  return async () => {
    const cartCookie: { [key: string]: string } = cookies.get("cart") ?? {};
    const cartItemCountCookie: { [key: string]: number } = cookies.get("cartItemCount") ?? {};
    const siteUuid = menu?.restaurant?.site_uuid as string;
    const currency = menu?.restaurant?.bank_info?.currency as string;
    const { data, errors } = await (
      clients?.AMBROSIA as ApolloClient<NormalizedCacheObject>
    ).mutate({
      mutation: CREATE_CART,
      variables: { site_uuid: siteUuid, currency },
    });

    if (!data || errors) {
      const error = new Error("We could not complete that operation");
      throw error;
    }

    const { uuid, expires } = data.createCart;
    cartCookie[siteUuid] = uuid;
    cartItemCountCookie[siteUuid] = 0;

    cookies.set("cart", cartCookie, { path: "/", expires: new Date(expires) });
    cookies.set("cartItemCount", cartItemCountCookie, {
      path: "/",
      expires: new Date(expires),
    });

    return uuid;
  };
};

export const useAddToCart = () => {
  const { menu, clients, setContext } = useContext(RestaurantContext);
  const cookies = new Cookies();
  const createCart = useCreateCart();
  const updateCartCount = useUpdateCartCount();

  return async (
    variables: TAddToCartVariables,
    onClose?: () => void,
    setContextProps?: (contextProps: { [key: string]: any }) => void,
  ) => {
    const cartCookie = cookies.get("cart");
    const siteUuid = menu?.restaurant?.site_uuid as string;
    let cartUuid: string;

    try {
      setContext?.({ loading: true });
      if (!cartCookie || !cartCookie[siteUuid]) cartUuid = await createCart();
      else cartUuid = cartCookie[siteUuid];

      const { data, errors } = await (
        clients?.AMBROSIA as ApolloClient<NormalizedCacheObject>
      ).mutate({
        mutation: CREATE_CART_ITEM,
        variables: { ...variables, cart_uuid: cartUuid },
      });

      if (!data || errors) {
        const error = new Error("We could not complete that operation");
        throw error;
      }

      notify("success", "Item added successfully");
      onClose?.();
      setContextProps?.({ cartItemCount: cookies.get("cartItemCount")[siteUuid] + 1 });
      updateCartCount();
    } catch (error) {
      notify("error", "We could not complete that operation");
    }

    setContext?.({ loading: false });
  };
};

const useUpdateCartCount = () => {
  const { menu } = useContext(RestaurantContext);
  const cookies = new Cookies();

  return () => {
    const cartItemCountCookie = cookies.get("cartItemCount");
    const siteUuid = menu?.restaurant?.site_uuid as string;
    cartItemCountCookie[siteUuid] = cartItemCountCookie[siteUuid] + 1;

    cookies.set("cartItemCount", cartItemCountCookie, {
      path: "/",
      expires: new Date(Date.now() + 86400000),
    });
  };
};
