import { useContext } from "react";
import Cookies from "universal-cookie";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { RestaurantContext } from "../../../../../contexts";
import { PaymentMethod } from "../types";
import { CREATE_ORDER } from "../graphql";
import { calculateCartSubTotal } from "../../../helpers";
import { notify } from "../../../../../utilities";
import { CoreCartFields } from "../../../../../models";

export const useCreateOrder = () => {
    const { cart, clients, setContext } = useContext(RestaurantContext);
    const cookies = new Cookies();

    return async (paymentMethod: PaymentMethod) => {
        const cartCookie = cookies.get("cart");
        const cartItemCountCookie = cookies.get("cartItemCount");
        setContext?.({ loading: true, networkOperation: "create.order" });
        try {
            const { data, errors } = await (
                clients?.AMBROSIA as ApolloClient<NormalizedCacheObject>
            ).mutate({
                mutation: CREATE_ORDER,
                variables: {
                    payment_type: paymentMethod,
                    grand_total:
                        calculateCartSubTotal(cart as CoreCartFields) +
                        (cart?.restaurant?.bank_info?.delivery_fee as number),
                    address_uuid: cart?.address?.uuid ?? undefined,
                    cart_uuid: cart?.uuid,
                },
            });

            if (!data || errors) throw new Error("We could not complete that operation");

            const order = data.createOrder;
            const updatedCart = { ...(cart as CoreCartFields), order };

            setContext?.({ loading: false, networkOperation: "", cart: updatedCart });
            notify("success", "Order placed successfully");

            delete cartCookie[cart?.restaurant?.site_uuid ?? ""];
            delete cartItemCountCookie[cart?.restaurant?.site_uuid ?? ""];

            cookies.set("cart", cartCookie, { path: "/" });
            cookies.set("cartItemCount", cartItemCountCookie, { path: "/" });
        } catch (error) {
            setContext?.({ loading: false, networkOperation: "" });
            notify("error", "We could not complete that operation");
        }
    };
};
