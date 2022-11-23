import { useContext } from "react";
import Cookies from "universal-cookie";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { RestaurantContext } from "../../../contexts";
import { CREATE_CART, CREATE_CART_ITEM } from "../graphql";
import { TAddToCartVariables } from "./types";

export const useCreateCart = () => {
    const { menu, clients } = useContext(RestaurantContext);
    const cookies = new Cookies();

    return async () => {
        const cartCookie: { [key: string]: string } = cookies.get("cart") ?? {};
        const siteUuid = menu?.restaurant?.site_uuid as string;
        const currency = menu?.restaurant?.bank_info?.currency as string;
        const { data, errors } = await (
            clients?.AMBROSIA as ApolloClient<NormalizedCacheObject>
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
    const { menu, clients, setContext } = useContext(RestaurantContext);
    const cookies = new Cookies();
    const createCart = useCreateCart();

    return async (variables: TAddToCartVariables, onClose?: () => void) => {
        const cartCookie = cookies.get("cart");
        const siteUuid = menu?.restaurant?.site_uuid as string;
        let cartUuid: string;

        try {
            setContext?.({ loading: true });
            if (!cartCookie || !cartCookie[siteUuid]) cartUuid = await createCart();
            else cartUuid = cartCookie[siteUuid];

            const { data, errors } = await (
                clients?.AMBROSIA as ApolloClient<NormalizedCacheObject>
            ).mutate({
                mutation: CREATE_CART_ITEM,
                variables: { ...variables, cart_uuid: cartUuid },
            });

            if (!data || errors) {
                const error = new Error("We could not complete that operation");
                throw error;
            }

            onClose?.();
        } catch (error) {
            console.log(error);
        }

        setContext?.({ loading: false });
    };
};
