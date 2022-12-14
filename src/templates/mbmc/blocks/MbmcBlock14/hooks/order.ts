import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { notify } from "../../../utilities";
import { UPDATE_ORDER } from "../graphql";

export const useUpdateOrder = () => {
    const queryParams = new URLSearchParams(window.location.search);

    return async (client: ApolloClient<NormalizedCacheObject>) => {
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
            return data.updateOrder;
        } catch (error) {
            notify("error", "We could not complete that operation");
        }

        return undefined;
    };
};
