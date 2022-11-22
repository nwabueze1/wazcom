import { useCartItemsStyles } from "./styles";
import { CartItemCard } from "../../../../components";

export const CartItems = () => {
    const classes = useCartItemsStyles();

    const displayCartItems = () =>
        new Array(6).fill("").map((_, index) => <CartItemCard key={index} />);

    return <div className={classes.root}>{displayCartItems()}</div>;
};
