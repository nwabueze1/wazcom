import { useContext } from "react";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { TUpdateCartItemQuantityVariables } from "./types";
import { RestaurantContext } from "../../../contexts";
import { CoreCartFields, CoreCartFields_cartItems, CoreCartItemFields } from "../../../models";
import { UPDATE_CART_ITEM } from "../graphql";

export const useUpdateCartItemQuantity = () => {
    const { cart, clients, setContext } = useContext(RestaurantContext);

    return async (variables: TUpdateCartItemQuantityVariables) => {
        try {
            setContext?.({ loading: true, networkOperation: "update.cart-item.quantity" });
            const { data, errors } = await (clients?.AMBROSIA as ApolloClient<NormalizedCacheObject>).mutate({
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
            setContext?.({ cart: updatedCart, loading: false, networkOperation: '' });
        } catch (error) {
            console.log(error);
            setContext?.({ loading: false, networkOperation: "" });
        }
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
