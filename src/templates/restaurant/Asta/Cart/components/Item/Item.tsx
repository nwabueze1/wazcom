import React from "react";
import { useStyles } from "./styles";
import { CartItemProps } from "./types";
import clsx from "clsx";
import {
    getCurrency,
    getFloatOrIntAmount,
    menuImagePlaceholder,
} from "utilities/restaurant";
import { Close } from "@mui/icons-material";
import { IoAddCircleOutline } from "react-icons/io5";
import { AiOutlineMinusCircle } from "react-icons/ai";

export const Item: React.FC<CartItemProps> = ({
    onClick,
    name,
    price,
    image_url: imageUrl,
    status,
    condition,
    description,
    quantity
}) => {
    const currency = "$";
    const isOpen = true;
    const classes = useStyles({ isOpen });

    const handleCancel = () => {
        console.log("closed");
    }
    return (
        <div
            onClick={() => {
                isOpen && onClick?.();
            }}
            className={clsx(
                classes.root,
                status && classes.visible,
                condition && classes.noMargin
            )}
        >
            <div
                className={classes.imageWrapper}
                style={{
                    backgroundImage: `url(${imageUrl ?? menuImagePlaceholder})`,
                }}
            ></div>
            <div className={classes.content}>
                <div>
                    <p className={classes.title}>{name} </p>
                    <p className={classes.description}>
                        {(description as string).length > 30
                            ? (description as string).slice(0, 30) + "..."
                            : description}
                    </p>
                </div>
                <div className={classes.optionsGroup}>
                    <div className={classes.amount}>
                        {getCurrency(currency)}
                        {getFloatOrIntAmount(price)}
                    </div>
                    <div className={classes.optionsContainer}>
                        <AiOutlineMinusCircle
                            className={classes.icon}
                        // onClick={() => {
                        //     changeQuantity(false);
                        // }}
                        />
                        <p>{quantity}</p>
                        <IoAddCircleOutline
                            className={classes.icon}
                        // onClick={() => {
                        //     changeQuantity(true);
                        // }}
                        />
                    </div>
                    <div className={classes.closeIconContainer} onClick={handleCancel}>
                        <Close className={classes.closeIcon} />
                    </div>
                </div>
            </div>

        </div>
    );
};
