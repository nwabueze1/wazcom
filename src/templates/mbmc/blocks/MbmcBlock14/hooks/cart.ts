import { useContext } from "react";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { TUpdateCartItemQuantityVariables } from "./types";
import { RestaurantContext } from "../../../contexts";
import { CoreCartFields, CoreCartFields_cartItems, CoreCartItemFields } from "../../../models";
import { UPDATE_CART_ITEM } from "../graphql";
import { notify } from "../../../utilities";
import Cookies from "universal-cookie";

export const useUpdateCartItemQuantity = () => {
    const { cart, clients, setContext } = useContext(RestaurantContext);
    const updateCartCount = useUpdateCartCount();

    return async (
        variables: TUpdateCartItemQuantityVariables,
        setContextProps?: (contextProps: { [key: string]: any }) => void,
    ) => {
        try {
            setContext?.({ loading: true, networkOperation: `update.cart-item.${variables.uuid}` });
            const { data, errors } = await (
                clients?.AMBROSIA as ApolloClient<NormalizedCacheObject>
            ).mutate({
                mutation: UPDATE_CART_ITEM,
                variables,
            });

            if (!data || errors) {
                const error = new Error("We could not complete that operation");
                throw error;
            }

            const updatedCart = getUpdatedCart(
                JSON.parse(JSON.stringify(cart as CoreCartFields)),
                variables.uuid,
                variables.quantity,
            );
            notify(
                "success",
                variables.quantity === 0
                    ? "Item deleted successfully"
                    : "Item updated successfully",
            );
            setContext?.({ cart: updatedCart, loading: false, networkOperation: "" });
            variables.quantity === 0 && updateCartCount(setContextProps);
        } catch (error) {
            setContext?.({ loading: false, networkOperation: "" });
            notify("error", "We could not complete that operation");
        }
    };
};

const useUpdateCartCount = () => {
    const { cart } = useContext(RestaurantContext);
    const cookies = new Cookies();

    return (setContextProps?: (contextProps: { [key: string]: any }) => void) => {
        const cartItemCountCookie = cookies.get("cartItemCount");
        const siteUuid = cart?.restaurant?.site_uuid as string;
        const updatedCount = cartItemCountCookie[siteUuid] - 1;
        cartItemCountCookie[siteUuid] = updatedCount;

        cookies.set("cartItemCount", cartItemCountCookie, {
            path: "/",
            expires: new Date(Date.now() + 86400000),
        });
        setContextProps?.({ cartItemCount: updatedCount });
    };
};

const getUpdatedCart = (cart: CoreCartFields, itemUuid: string, quantity: number) => {
    const cartItems = [...(cart.cartItems as CoreCartFields_cartItems[])];
    const idx = cartItems.findIndex((item) => item.uuid === itemUuid);

    if (quantity === 0) cartItems?.splice(idx, 1);
    else {
        const cartItem = cartItems[idx] as CoreCartItemFields;
        cartItem.quantity = String(quantity);
        cartItems[idx] = cartItem;
    }
    cart.cartItems = cartItems;
    return cart;
};
