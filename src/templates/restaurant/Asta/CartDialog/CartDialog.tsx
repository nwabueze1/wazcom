import React, { useState, useEffect, useCallback, useRef } from "react";
import { useStyles } from "./styles";
import { CartDialogProps, Option } from "./types";
import { Close } from "@mui/icons-material";
import { IoAddCircleOutline } from "react-icons/io5";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { changeQuantity as changeQuantityHelper, parseCartItem } from "./helpers";
import { Options } from "../Options/Options";
import clx from "classnames";
import { CoreMenuItemFields } from "templates/restaurant/types/CoreMenuItemFields";
import { CoreMenuFields } from "templates/restaurant/types/CoreMenuFields";
import { CoreCartFields } from "templates/restaurant/types/CoreCartFields";
import { getCurrency, getFloatOrIntAmount, menuImagePlaceholder } from "../../../../utilities";
import { calculateOptionsTotal, findMenuItem } from "../../helpers";

export const CartDialog: React.FC<CartDialogProps> = ({
    display,
    close,
    itemId,
    cartItemId,
    restaurant,
    cart,
}) => {
    const classes = useStyles();
    const dialogRef = useRef<HTMLDivElement | null>(null);
    const currency = getCurrency(restaurant.restaurant.bank_info?.currency as string);
    const [quantity, setQuantity] = useState<number>(1);
    const [menuItem, setCurrentMenuItem] = useState<CoreMenuItemFields>();
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

    useEffect(() => {
        const menuItem = findMenuItem(
            restaurant.restaurant.activeMenus as CoreMenuFields[],
            itemId,
        );
        setCurrentMenuItem(menuItem);
        const [quantity, selectedOptions] = parseCartItem(cart as CoreCartFields, cartItemId);
        setQuantity(Number(quantity));
        setSelectedOptions(selectedOptions);
    }, [itemId, cartItemId]);

    useEffect(() => {
        if (!display) {
            setQuantity(1);
            setSelectedOptions([]);
            document.documentElement.style.overflowY = "scroll";
            return;
        }
        if (dialogRef?.current) dialogRef.current.scrollTop = 0;
        document.documentElement.style.overflowY = "hidden";
    }, [display]);

    const updateSelectedOptions = useCallback(
        (updatedOption: Option) => {
            const index = selectedOptions.findIndex(
                (option) => option.name.toString() === updatedOption.name.toString(),
            );
            let newOptions = [...selectedOptions];
            if (index === -1) newOptions.push(updatedOption);
            else if (updatedOption.selectedChoices.length === 0)
                newOptions = newOptions.filter(
                    (option) => option.name.toString() !== updatedOption.name.toString(),
                );
            else newOptions[index] = updatedOption;
            setSelectedOptions(newOptions);
        },
        [selectedOptions],
    );

    const getOptionsTotal = useCallback(
        () => calculateOptionsTotal(selectedOptions, quantity),
        [selectedOptions, quantity],
    );

    const handleClose = () => {
        close();
    };

    const changeQuantity = useCallback(
        (add: boolean) => changeQuantityHelper(add, quantity, setQuantity),
        [quantity],
    );

    const calculateTotal = () => {
        return quantity * (menuItem?.price as number) + getOptionsTotal();
    };

    return (
        <div
            className={clx(classes.dialogBox, display && classes.dialogActive)}
            onClick={handleClose}
        >
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className={classes.dialog}
                ref={dialogRef}
            >
                <div className={classes.closeIconContainer} onClick={handleClose}>
                    <Close className={classes.closeIcon} />
                </div>
                <div className={classes.dialogImageParent}>
                    <img
                        src={menuItem?.image_url ?? menuImagePlaceholder}
                        alt={menuItem?.name}
                        className={classes.cartImage}
                    />
                </div>
                <p className={classes.dialog__name}>{menuItem?.name}</p>
                <p className={classes.dialog__description}>{menuItem?.description}</p>
                {menuItem?.options && menuItem?.options.length > 0 && (
                    <Options
                        itemId={itemId}
                        options={menuItem?.options as string[]}
                        selectedOptions={selectedOptions}
                        updateSelectedOptions={updateSelectedOptions}
                        restaurant={restaurant}
                    />
                )}
                <div className={classes.actions}>
                    <div className={classes.quantityController}>
                        <p className={classes.quantityText}>QTY</p>
                        <div className={classes.dialog__actions}>
                            <AiOutlineMinusCircle
                                className={quantity > 1 ? classes.icon : classes.iconInactive}
                                onClick={() => {
                                    changeQuantity(false);
                                }}
                            />
                            <p>{quantity}</p>
                            <IoAddCircleOutline
                                className={classes.icon}
                                onClick={() => {
                                    changeQuantity(true);
                                }}
                            />
                        </div>
                    </div>
                    <div className={classes.dialogOptions}>
                        <div className={classes.dialogOptionBox}>
                            <button
                                onClick={() => {
                                    alert("add to cart");
                                }}
                                className={`${classes.dialogOption} ${classes.dialogOptionFilled}`}
                            >
                                {cartItemId ? "Update Order" : "Add to Order"}{" "}
                                <span className={classes.currency}>
                                    ({currency}
                                    {getFloatOrIntAmount(calculateTotal())})
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
