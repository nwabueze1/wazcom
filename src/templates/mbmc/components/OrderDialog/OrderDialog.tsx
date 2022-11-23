import { FC, useState, useCallback, useContext, useMemo } from "react";
import { MbmcButton } from "../MbmcButton/MbmcButton";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useMbmcBlock16Styles } from "./styles";
import { OrderDialogProps, Option } from "./types";
import { getCurrency } from "../../../../utilities";
import { RestaurantContext } from "../../contexts";
import { Modal } from "../../../../core";
import { Options } from "./components";
import { calculateOptionsTotal } from "./helpers";
import { useAddToCart } from "./hooks";

export const OrderDialog: FC<OrderDialogProps> = ({ itemUuid, handleClose }) => {
    const { menu, loading } = useContext(RestaurantContext);
    const classes = useMbmcBlock16Styles();
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const addToCart = useAddToCart();

    const menuItem = useMemo(() => {
        if (!itemUuid) {
            setQuantity(1);
            setSelectedOptions([]);
            return undefined;
        }
        return menu?.menuItems?.find((item) => item?.uuid === itemUuid);
    }, [itemUuid]);

    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity((prev) => (prev <= 1 ? 1 : prev - 1));
    };

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

    const calculateDishTotal = useCallback(() => {
        if (!menuItem) return 0;
        return (
            quantity * (menuItem?.price as number) +
            calculateOptionsTotal(selectedOptions, quantity)
        );
    }, [quantity, selectedOptions, menuItem?.price]);

    const price = `${getCurrency(
        menu?.restaurant?.bank_info?.currency ?? "",
    )}${calculateDishTotal()}`;

    const handleAddToCart = async () => {
        await addToCart({
            menu_item_uuid: menuItem?.uuid as string,
            quantity,
            detail: menuItem?.description as string,
            options: selectedOptions.length > 0 ? JSON.stringify(selectedOptions) : undefined,
        }, handleClose);
    };

    return (
        <Modal open={Boolean(itemUuid)} handleClose={handleClose}>
            <div className={classes.root}>
                <div className={classes.dialogContainer}>
                    <div className={classes.topContent}>
                        <img
                            className={classes.dialogImage}
                            src={menuItem?.image_url ?? ""}
                            alt={menuItem?.name ?? ""}
                        />
                        <div className={classes.content}>
                            <p className={classes.title}>{menuItem?.name}</p>
                            <p className={classes.description}>{menuItem?.description}</p>
                            <div className={classes.priceContainer}>
                                <p className={classes.price}>{price}</p>
                                <div className={classes.quantityCountContainer}>
                                    <span
                                        className={`${classes.quantityButton} ${
                                            quantity == 1 && classes.disable
                                        }`}
                                        onClick={handleDecrement}
                                    >
                                        <RemoveRoundedIcon className={classes.operationIcon} />
                                    </span>
                                    <span>{quantity}</span>
                                    <span
                                        className={classes.quantityButton}
                                        onClick={handleIncrement}
                                    >
                                        <AddRoundedIcon className={classes.operationIcon} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.dialogOptionsContent}>
                        {menuItem?.options && menuItem.options.length > 0 && (
                            <Options
                                selectedOptions={selectedOptions}
                                handleUpdateSelectedOptions={updateSelectedOptions}
                                itemOptions={menuItem?.options ?? []}
                            />
                        )}
                        <div className={classes.dialogButtonContainer}>
                            <MbmcButton
                                className={classes.dialogButton}
                                variant="SECONDARY"
                                size="sm"
                                handleClick={handleAddToCart}
                                loading={loading}
                            >
                                Add to cart ({price})
                            </MbmcButton>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
