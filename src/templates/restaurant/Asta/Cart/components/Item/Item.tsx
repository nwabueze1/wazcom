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
    data
}) => {
    const currency = "$";
    const isOpen = true;
    const classes = useStyles({ isOpen });
    const { name, uuid, image_url, options, status, description, price } = data.menuItem;

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
            )}
        >
            <div
                className={classes.imageWrapper}
                style={{
                    backgroundImage: `url(${image_url ?? menuImagePlaceholder})`,
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
                        {getCurrency("NGN")}
                        {getFloatOrIntAmount(price)}
                    </div>
                    <div className={classes.optionsContainer}>
                        <AiOutlineMinusCircle
                            className={classes.icon}
                        // onClick={() => {
                        //     changeQuantity(false);
                        // }}
                        />
                        <p>{data.quantity}</p>
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
