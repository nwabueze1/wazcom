import { useSelector, useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { CREATE_CART, CREATE_CART_ITEM } from "../graphql";
import { TAddToCartVariables } from "./types";
import { notify } from "../../../utilities";
import { TAppState } from "../../../../types";
import { CoreMenuFields } from "../../../models";
import { createApolloClient } from "../../../../../helpers/graphQL";

export const useCreateCart = () => {
  const { restaurant, gatewayUrl } = useSelector<TAppState, TAppState>((state) => state);
  const menu = restaurant?.menu as CoreMenuFields; 
  const cookies = new Cookies();
  const client = createApolloClient(gatewayUrl ?? "");

  return async () => {
    const cartCookie: { [key: string]: string } = cookies.get("cart") ?? {};
    const cartItemCountCookie: { [key: string]: number } = cookies.get("cartItemCount") ?? {};
    const siteUuid = menu?.restaurant?.site?.uuid as string;
    const currency = menu?.restaurant?.bank_info?.currency as string;
    const { data, errors } = await client.mutate({
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
  const { restaurant, gatewayUrl } = useSelector<TAppState, TAppState>((state) => state);
  const dispatch = useDispatch();
  const menu = restaurant?.menu as CoreMenuFields;
  const cookies = new Cookies();
  const createCart = useCreateCart();
  const client = createApolloClient(gatewayUrl ?? "");
  const updateCartCount = useUpdateCartCount();

  return async (
    variables: TAddToCartVariables,
    onClose?: () => void,
  ) => {
    const cartCookie = cookies.get("cart");
    const siteUuid = menu?.restaurant?.site?.uuid as string;
    let cartUuid: string;

    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      if (!cartCookie || !cartCookie[siteUuid]) cartUuid = await createCart();
      else cartUuid = cartCookie[siteUuid];

      const { data, errors } = await client.mutate({
        mutation: CREATE_CART_ITEM,
        variables: { ...variables, cart_uuid: cartUuid },
      });

      if (!data || errors) {
        const error = new Error("We could not complete that operation");
        throw error;
      }

      notify("success", "Item added successfully");
      onClose?.();
      updateCartCount();
    } catch (error) {
      notify("error", "We could not complete that operation");
    }

    dispatch({ type: 'SET_LOADING', payload: false });
  };
};

const useUpdateCartCount = () => {
  const { restaurant } = useSelector<TAppState, TAppState>((state) => state);
  const dispatch = useDispatch();
  const menu = restaurant?.menu as CoreMenuFields;
  const cookies = new Cookies();

  return () => {
    const cartItemCountCookie = cookies.get("cartItemCount");
    const siteUuid = menu?.restaurant?.site?.uuid as string;
    const updatedCount = cartItemCountCookie[siteUuid] + 1;
    cartItemCountCookie[siteUuid] = updatedCount;
    dispatch({ type: "SET_CART_ITEM_COUNT", payload: updatedCount });

    cookies.set("cartItemCount", cartItemCountCookie, {
      path: "/",
      expires: new Date(Date.now() + 86400000),
    });
  };
};