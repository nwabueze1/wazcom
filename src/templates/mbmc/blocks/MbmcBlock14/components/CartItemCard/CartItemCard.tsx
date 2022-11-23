import React from "react";
import { useCartItemCardStyles } from "./styles";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { CoreCartFields_cartItems } from "../../../../models";
import { getCurrency } from "../../../../../../utilities";
import { useUpdateCartItemQuantity } from "../../hooks";

export const CartItemCard: React.FC<
    CoreCartFields_cartItems & { currency: string; amount: number }
> = ({ uuid, amount, quantity, detail, options, menuItem, currency: currencyId }) => {
    const classes = useCartItemCardStyles();
    const currency = getCurrency(currencyId);
    const updateCartItemQuantity = useUpdateCartItemQuantity();

    const handleQuantityChange = async (quantity: number) => {
        await updateCartItemQuantity({ uuid: uuid as string, quantity });
    };

    return (
        <div className={classes.root}>
            <div className={classes.topContent}>
                <img
                    className={classes.cartItemImg}
                    src={menuItem?.image_url ?? ""}
                    alt={menuItem?.name}
                />
                <div className={classes.content}>
                    <p className={classes.title}>{menuItem?.name}</p>
                    <p className={classes.description}>{detail}</p>
                    <div className={classes.priceContainer}>
                        <div className={classes.price}>
                            <p>
                                {currency}
                                {amount}
                            </p>
                        </div>
                        <div className={classes.quantityCountContainer}>
                            <div
                                className={classes.quantityButton}
                                onClick={() => {
                                    handleQuantityChange(Number(quantity) - 1);
                                }}
                            >
                                <RemoveRoundedIcon className={classes.operationIcon} />
                            </div>
                            <div>{quantity}</div>
                            <div
                                className={classes.quantityButton}
                                onClick={() => {
                                    handleQuantityChange(Number(quantity) + 1);
                                }}
                            >
                                <AddRoundedIcon className={classes.operationIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.bottomContent}>
                <div
                    className={classes.deleteButton}
                    onClick={() => {
                        handleQuantityChange(0);
                    }}
                >
                    <DeleteIcon className={classes.deleteIcon} />
                </div>
            </div>
        </div>
    );
};
