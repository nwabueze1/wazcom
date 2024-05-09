import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { createApolloClient } from "../../../helpers/graphQL";
import { CoreCartFields } from "../models";
import { TemplateState } from "../types";
import { notify } from "../../../helpers";
import { calculateCartSubTotal } from "../helpers";
import { CREATE_ORDER, UPDATE_ORDER } from "../graphql";
import { PaymentType } from "../types";

export const useCreateOrder = () => {
  const { restaurant, gatewayUrl } = useSelector<TemplateState, TemplateState>(
    (state) => state,
  );
  const dispatch = useDispatch();
  const cart = restaurant?.cart as CoreCartFields;
  const client = createApolloClient(gatewayUrl ?? "");
  const cookies = new Cookies();

  return async (paymentType: PaymentType | undefined, onSuccess?: () => void) => {
    const cartCookie = cookies.get("cart");
    const cartItemCountCookie = cookies.get("cartItemCount");

    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_NETWORK_OPERATION", payload: "create.order" });

    try {
      const { data, errors } = await client.mutate({
        mutation: CREATE_ORDER,
        variables: {
          payment_type: paymentType?.name?.toUpperCase()?.replace(/ /g, '_'),
          grand_total:
            calculateCartSubTotal(cart as CoreCartFields) +
            (cart?.guest?.address?.uuid
              ? (cart?.restaurant?.bank_info?.delivery_fee as number)
              : 0),
          address_uuid: cart?.guest?.address?.uuid ?? undefined,
          cart_uuid: cart?.uuid,
        },
      });

      if (!data || errors)
        throw new Error("We could not complete that operation");

      const order = data.createOrder;

      if (paymentType?.name?.toLowerCase() === "cash on delivery") {
        dispatch({ type: "UPDATE_ORDER", payload: order });
        notify("success", "Order placed successfully");
        onSuccess?.();

        delete cartCookie[cart?.restaurant?.site?.uuid ?? ""];
        delete cartItemCountCookie[cart?.restaurant?.site?.uuid ?? ""];

        cookies.set("cart", cartCookie, { path: "/" });
        cookies.set("cartItemCount", cartItemCountCookie, { path: "/" });
      }

      return order;
    } catch (error) {
      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({ type: "SET_NETWORK_OPERATION", payload: "" });
      notify("error", "We could not complete that operation");
    }
  };
};

export const useUpdateOrder = () => {
  const { gatewayUrl, restaurant } = useSelector<TemplateState, TemplateState>(
    (state) => state,
  );
  const dispatch = useDispatch();
  const client = createApolloClient(gatewayUrl ?? "");
  const cookies = new Cookies();
  const cart = restaurant?.cart as CoreCartFields;

  return async (paymentType: String) => {
    const urlParams = new URLSearchParams(window.location.search);
    const order_uuid = urlParams.get("hivedeck_order_uuid");
    
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_NETWORK_OPERATION", payload: "create.order" });

    const cartCookie = cookies.get("cart");
    const cartItemCountCookie = cookies.get("cartItemCount");

    try {
      const { data, errors } = await client.mutate({
        mutation: UPDATE_ORDER,
        variables: {
          payment_type: paymentType.toUpperCase().replace(/ /g, "_"),
          uuid: order_uuid,
        },
      });

      if (!data || errors)
        throw new Error("We could not complete that operation");

      const order = data.updateOrder;

      dispatch({ type: "UPDATE_ORDER", payload: order });
      notify("success", "Order placed successfully");

      delete cartCookie[cart?.restaurant?.site?.uuid ?? ""];
      delete cartItemCountCookie[cart?.restaurant?.site?.uuid ?? ""];

      cookies.set("cart", cartCookie, { path: "/" });
      cookies.set("cartItemCount", cartItemCountCookie, { path: "/" });

      return order;
    } catch (error) {
      notify("error", "We could not complete that operation");
    }

    dispatch({ type: "SET_LOADING", payload: false });
    dispatch({ type: "SET_NETWORK_OPERATION", payload: "" });
  };
};
