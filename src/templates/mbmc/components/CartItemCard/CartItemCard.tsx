import React, { useState } from "react";
import { useCartItemCardStyles } from "./styles";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItemCard: React.FC = () => {
    const classes = useCartItemCardStyles();
    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    };

    const handleDecrement = () => {
        setCount((prev) => (prev <= 0 ? 0 : prev - 1));
    };

    return (
        <div className={classes.root}>
            <div className={classes.topContent}>
                <div className={classes.imgContainer}>
                    <img
                        className={classes.cartItemImg}
                        src={"https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/img.png"}
                        alt="cart item image"
                    />
                </div>
                <div className={classes.content}>
                    <p className={classes.title}>Crispy Coated Prawn</p>
                    <p className={classes.description}>
                        Lorem ipsum dolor sit amet, consetetur sadip snn g elitr, sed diam nonumy.
                    </p>
                    <div className={classes.priceContainer}>
                        <div className={classes.price}>
                            <p>£12.5</p>
                        </div>
                        <div className={classes.quantityCountContainer}>
                            <div
                                className={`${classes.quantityButton} ${
                                    count == 0 && classes.disable
                                }`}
                                onClick={handleDecrement}
                            >
                                <RemoveRoundedIcon className={classes.operationIcon} />
                            </div>
                            <div>{count}</div>
                            <div className={classes.quantityButton} onClick={handleIncrement}>
                                <AddRoundedIcon className={classes.operationIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.bottomContent}>
                <div className={`${classes.deleteButton}`}>
                    <DeleteIcon className={classes.deleteIcon} />
                </div>
            </div>
        </div>
    );
};

export default CartItemCard;
