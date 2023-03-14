import { useSelector, useDispatch } from "react-redux";
import { TUpdateCartItemQuantityVariables } from "./types";
import { CoreCartFields, CoreCartItemFields } from "../../../models";
import { UPDATE_CART_ITEM } from "../graphql";
import { notify } from "../../../utilities";
import { TAppState } from "../../../../types";
import { createApolloClient } from "../../../../../helpers/graphQL";

export const useUpdateCartItemQuantity = () => {
  const { restaurant, gatewayUrl } = useSelector<TAppState, TAppState>((state) => state);
  const dispatch = useDispatch();
  const cart = restaurant?.cart as CoreCartFields;
  const client = createApolloClient(gatewayUrl ?? "");

  return async (
    variables: TUpdateCartItemQuantityVariables,
  ) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_NETWORK_OPERATION', payload: `update.cart-item.${variables.uuid}` })

      const { data, errors } = await client.mutate({
        mutation: UPDATE_CART_ITEM,
        variables,
      });

      if (!data || errors) {
        const error = new Error("We could not complete that operation");
        throw error;
      }

      const cartItem = cart?.cartItems?.find(({ uuid }) => uuid === variables?.uuid) as CoreCartItemFields;

      notify(
        "success",
        variables.quantity === 0 ? "Item deleted successfully" : "Item updated successfully",
      );
      variables.quantity === 0 ? dispatch({ type: 'DELETE_CART_ITEM', payload: cartItem }) :
        dispatch({ type: 'UPDATE_CART_ITEM', payload: { ...cartItem, quantity: variables.quantity } });
    } catch (error) {
      notify("error", "We could not complete that operation");
    }

    dispatch({ type: 'SET_LOADING', payload: false });
    dispatch({ type: 'SET_NETWORK_OPERATION', payload: '' });
  };
};
