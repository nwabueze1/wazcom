import { useContext } from "react";
import { TCreateAddressVariables } from "./types";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { RestaurantContext } from "../../../../../contexts";
import { CREATE_ADDRESS } from "../graphql";
import { notify } from "../../../../../utilities";
import { CoreCartFields, CoreGuestFields } from "../../../../../models";
import Cookies from "universal-cookie";

export const useCreateAddress = () => {
    const { cart, clients, setContext } = useContext(RestaurantContext);

    return async (
        variables: TCreateAddressVariables,
        guest: CoreGuestFields,
        onSuccess?: () => void,
    ) => {
        try {
            const { data, errors } = await (
                clients?.AMBROSIA as ApolloClient<NormalizedCacheObject>
            ).mutate({
                mutation: CREATE_ADDRESS,
                variables: { ...variables, guest_uuid: guest.uuid },
            });

            if (!data || errors) throw new Error("We could not complete that operation");

            const address = data.createAddress;
            const updatedCart = { ...(cart as CoreCartFields), guest, address };
            setContext?.({ cart: updatedCart, loading: false, networkOperation: "" });
            notify("success", "Delivery option set as dispatch");
            onSuccess?.();
        } catch (error) {
            setContext?.({ loading: false, networkOperation: "" });
            notify("error", "We could not complete that operation");
        }
    };
};
