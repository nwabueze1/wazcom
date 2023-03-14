import { useSelector } from "react-redux";
import { notify } from "../../../utilities";
import { UPDATE_ORDER } from "../graphql";
import Cookies from "universal-cookie";
import { createApolloClient } from "../../../../../helpers/graphQL";
import { TAppState } from "../../../../types";

export const useUpdateOrder = () => {
  const { gatewayUrl } = useSelector<TAppState, TAppState>((state) => state);
  const cookies = new Cookies();
  const client = createApolloClient(gatewayUrl ?? "");

  return async (site_uuid: string) => {
    const queryParams = new URLSearchParams(window.location.search);
    const cartCookie = cookies.get("cart");
    try {
      const { data, errors } = await client.mutate({
        mutation: UPDATE_ORDER,
        variables: {
          payment_type: queryParams.get("partner")?.toUpperCase(),
          payment_reference: queryParams.get("token"),
          uuid: queryParams.get("reference"),
        },
      });

      if (!data || errors) throw new Error("We could not complete that operation");

      notify("success", "Order placed successfully");
      delete cartCookie[site_uuid];

      cookies.set("cart", cartCookie, { path: "/" });
      return data.updateOrder;
    } catch (error) {
      notify("error", "We could not complete that operation");
    }

    return undefined;
  };
};
