import { useContext } from "react";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { RestaurantContext } from "../../../../../contexts";
import { notify } from "../../../../../utilities";
import { MAKE_PAYPAL_PAYMENT } from "../graphql";

export const usePaypalPayment = () => {
    const { clients } = useContext(RestaurantContext);

    return async (order_uuid: string) => {
        try {
            const { data, errors } = await (
                clients?.NICODEMUS as ApolloClient<NormalizedCacheObject>
            ).mutate({
                mutation: MAKE_PAYPAL_PAYMENT,
                variables: { order_uuid, pageRedirect: window.location.pathname },
            });

            if (!data || !data?.makePaypalDirectPayment?.redirect_url || errors)
                throw new Error("We could not complete that operation");

            const { makePaypalDirectPayment: { redirect_url } } = data;
            window.location.href = redirect_url;
        } catch (error) {
            notify("error", "We could not complete that operation");
        }
    };
};
