import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { notify } from "../../../utilities";
import { UPDATE_ORDER } from "../graphql";
import Cookies from "universal-cookie";

export const useUpdateOrder = () => {
  const cookies = new Cookies();

  return async (client: ApolloClient<NormalizedCacheObject>, site_uuid: string) => {
    const queryParams = new URLSearchParams(window.location.search);
    const cartCookie = cookies.get("cart");
    const cartItemCountCookie = cookies.get("cartItemCount");
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
      delete cartItemCountCookie[site_uuid];

      cookies.set("cart", cartCookie, { path: "/" });
      cookies.set("cartItemCount", cartItemCountCookie, { path: "/" });
      return data.updateOrder;
    } catch (error) {
      notify("error", "We could not complete that operation");
    }

    return undefined;
  };
};
