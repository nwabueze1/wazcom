import { useSelector, useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { CREATE_CART, CREATE_CART_ITEM } from "../graphql";
import { TAddToCartVariables } from "./types";
import { notify } from "../../../utilities";
import { TAppState } from "../../../../types";
import { CoreMenuFields } from "../../../models";

export const useCreateCart = () => {
  const { restaurant, client } = useSelector<TAppState, TAppState>((state) => state);
  const menu = restaurant?.menu as CoreMenuFields; 
  const cookies = new Cookies();

  return async () => {
    const cartCookie: { [key: string]: string } = cookies.get("cart") ?? {};
    const siteUuid = menu?.restaurant?.site?.uuid as string;
    const currency = menu?.restaurant?.bank_info?.currency as string;
    const { data, errors } = await (
      client as ApolloClient<NormalizedCacheObject>
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
    cookies.set("cart", cartCookie, { path: "/", expires: new Date(expires) });
    return uuid;
  };
};

export const useAddToCart = () => {
  const { restaurant, client } = useSelector<TAppState, TAppState>((state) => state);
  const dispatch = useDispatch();
  const menu = restaurant?.menu as CoreMenuFields;
  const cookies = new Cookies();
  const createCart = useCreateCart();

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

      const { data, errors } = await (
        client as ApolloClient<NormalizedCacheObject>
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
    } catch (error) {
      notify("error", "We could not complete that operation");
    }

    dispatch({ type: 'SET_LOADING', payload: false });
  };
};