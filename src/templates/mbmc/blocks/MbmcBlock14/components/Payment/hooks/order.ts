import { useSelector, useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { PaymentMethod } from "../types";
import { CREATE_ORDER } from "../graphql";
import { calculateCartSubTotal } from "../../../helpers";
import { notify } from "../../../../../utilities";
import { CoreCartFields } from "../../../../../models";
import { usePaypalPayment } from "./payment";
import { TAppState } from "../../../../../../types";
import { createApolloClient } from "../../../../../../../helpers/graphQL";

export const useCreateOrder = () => {
  const { restaurant, gatewayUrl } = useSelector<TAppState, TAppState>((state) => state);
  const dispatch = useDispatch();
  const cart = restaurant?.cart as CoreCartFields;
  const client = createApolloClient(gatewayUrl ?? "");
  const cookies = new Cookies();
  const makePaypalPayment = usePaypalPayment();

  return async (paymentMethod: PaymentMethod) => {
    const cartCookie = cookies.get("cart");
    const cartItemCountCookie = cookies.get("cartItemCount");

    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_NETWORK_OPERATION', payload: 'create.order' });

    try {
      const { data, errors } = await client.mutate({
        mutation: CREATE_ORDER,
        variables: {
          payment_type:
            String(paymentMethod).toLowerCase() === "paypal" ? undefined : paymentMethod,
          grand_total:
            calculateCartSubTotal(cart as CoreCartFields) +
            (cart?.guest?.address?.uuid
              ? (cart?.restaurant?.bank_info?.delivery_fee as number)
              : 0),
          address_uuid: cart?.guest?.address?.uuid ?? undefined,
          cart_uuid: cart?.uuid,
        },
      });

      if (!data || errors) throw new Error("We could not complete that operation");

      const order = data.createOrder;

      if (String(paymentMethod) === "PAYPAL") return makePaypalPayment(order.uuid);

      dispatch({ type: 'UPDATE_ORDER', payload: order });
      notify("success", "Order placed successfully");

      delete cartCookie[cart?.restaurant?.site?.uuid ?? ""];
      delete cartItemCountCookie[cart?.restaurant?.site?.uuid ?? ""];

      cookies.set("cart", cartCookie, { path: "/" });
      cookies.set("cartItemCount", cartItemCountCookie, { path: "/" });
    } catch (error) {
      notify("error", "We could not complete that operation");
    }

    dispatch({ type: 'SET_LOADING', payload: false });
    dispatch({ type: 'SET_NETWORK_OPERATION', payload: '' });
  };
};
