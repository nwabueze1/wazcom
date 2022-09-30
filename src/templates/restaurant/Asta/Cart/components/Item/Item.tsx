import React from "react";
import { useStyles } from "./styles";
import { CartItemProps } from "./types";
import clsx from "clsx";
import { getCurrency, getFloatOrIntAmount, menuImagePlaceholder } from "utilities/restaurant";
import { IoIosClose } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { CoreCartItemFields } from "templates/restaurant/types/CoreCartItemFields";
import { parseFloat } from "../../helper";

export const Item: React.FC<CartItemProps> = ({ setCartItems, data }) => {
    const currency = "$";
    const isOpen = true;
    const classes = useStyles({ isOpen });
    const { name, uuid, image_url, status, description, price } = data.menuItem;

    const handleChangeQuantity = (uuid: string, method: string) => {
        setCartItems((cartItems: CoreCartItemFields[]) => {
            const updatedtCartItems = cartItems.map((cartItem) => {
                if (cartItem.menuItem.uuid === uuid) {
                    const quantity =
                        method === "add"
                            ? +cartItem.quantity + 1
                            : +cartItem.quantity > 1
                            ? +cartItem.quantity - 1
                            : 1;
                    return { ...cartItem, quantity };
                }
                return cartItem;
            }) as CoreCartItemFields[];
            return updatedtCartItems;
        });
    };

    const handleRemove = (uuid: string) => {
        setCartItems((cartItems) => {
            return cartItems.filter((cartItem) => cartItem.menuItem.uuid !== uuid);
        });
    };

    return (
        <div className={clsx(classes.root, status && classes.visible)}>
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
                        {getCurrency(currency)}
                        {getFloatOrIntAmount(price * parseFloat(data.quantity))}
                    </div>
                    <div className={classes.optionsContainer}>
                        <AiOutlineMinusCircle
                            className={classes.icon}
                            onClick={() => {
                                handleChangeQuantity(uuid, "remove");
                            }}
                        />
                        <p>{data.quantity}</p>
                        <IoAddCircleOutline
                            className={classes.icon}
                            onClick={() => {
                                handleChangeQuantity(uuid, "add");
                            }}
                        />
                    </div>
                    <div className={classes.closeIconContainer} onClick={() => handleRemove(uuid)}>
                        <IoIosClose size={24} className={classes.closeIcon} />
                    </div>
                </div>
            </div>
        </div>
    );
};
