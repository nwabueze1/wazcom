import { useSelector } from "react-redux";
import { notify } from "../../../../../utilities";
import { MAKE_PAYPAL_PAYMENT } from "../graphql";
import { TAppState } from "../../../../../../types";
import { createApolloClient } from "../../../../../../../helpers/graphQL";

export const usePaypalPayment = () => {
  const { gatewayUrl } = useSelector<TAppState, TAppState>((state) => state);
  const client = createApolloClient(gatewayUrl ?? "");

  return async (order_uuid: string) => {
    try {
      const { data, errors } = await client.mutate({
        mutation: MAKE_PAYPAL_PAYMENT,
        variables: { order_uuid, pageRedirect: window.location.pathname },
      });

      if (!data || !data?.makePaypalDirectPayment?.redirect_url || errors)
        throw new Error("We could not complete that operation");

      const {
        makePaypalDirectPayment: { redirect_url },
      } = data;
      window.location.href = redirect_url;
    } catch (error) {
      notify("error", "We could not complete that operation");
    }
  };
};
