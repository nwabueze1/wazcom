import { FC, useState, useContext, useMemo } from "react";
import { MbmcButton } from "../MbmcButton/MbmcButton";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useMbmcBlock16Styles } from "./styles";
import { OrderDialogProps, Option } from "./types";
import { getCurrency } from "../../../../utilities";
import { RestaurantContext } from "../../contexts";
import { Modal } from "../../../../core";
import { Options } from "./components";

export const OrderDialog: FC<OrderDialogProps> = ({ itemUuid, handleClose }) => {
    const { menu } = useContext(RestaurantContext);
    const classes = useMbmcBlock16Styles();
    const [count, setCount] = useState<number>(1);
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

    const menuItem = useMemo(() => {
        if (!itemUuid) return undefined;
        return menu?.menuItems?.find((item) => item?.uuid === itemUuid);
    }, [itemUuid]);

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    };

    const handleDecrement = () => {
        setCount((prev) => (prev <= 1 ? 1 : prev - 1));
    };

    const updateSelectedOptions = (option: Option) => {};

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
                                <div className={classes.price}>
                                    <p>
                                        {getCurrency(menu?.restaurant?.bank_info?.currency ?? "")}
                                        {menuItem?.price}
                                    </p>
                                </div>
                                <div className={classes.quantityCountContainer}>
                                    <div
                                        className={`${classes.quantityButton} ${
                                            count == 1 && classes.disable
                                        }`}
                                        onClick={handleDecrement}
                                    >
                                        <RemoveRoundedIcon className={classes.operationIcon} />
                                    </div>
                                    <div>{count}</div>
                                    <div
                                        className={classes.quantityButton}
                                        onClick={handleIncrement}
                                    >
                                        <AddRoundedIcon className={classes.operationIcon} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {menuItem?.options && menuItem.options.length > 0 && (
                        <Options
                            selectedOptions={selectedOptions}
                            handleUpdateSelectedOptions={updateSelectedOptions}
                            itemOptions={menuItem?.options ?? []}
                        />
                    )}
                    {/* <div className={classes.bottomContent}>
                    <div className={classes.dishOptions}>
                        {itemOptions &&
                            itemOptions.length > 0 &&
                            itemOptions.map((option, index) => {
                                return (
                                    <div key={index} className={classes.dishOptionContainer}>
                                        <div className={classes.dishOptionTitleContainer}>
                                            <div>
                                                <p className={classes.dishOptionTitle}>
                                                    {option.name}
                                                </p>
                                                <p className={classes.dishOptionSubText}>
                                                    Please select a variant. You can only pick one
                                                    option
                                                </p>
                                            </div>
                                            {option.type == "selection" && (
                                                <div className={classes.requiredTag}>required</div>
                                            )}
                                        </div>
                                        <div className={classes.dishOptionItemContainer}>
                                            {option?.options?.[option.type]?.map(
                                                (opt: { [key: string]: any }, idx: number) => {
                                                    return (
                                                        opt?.name !== "" && (
                                                            <div
                                                                key={idx}
                                                                className={classes.dishOptionItem}
                                                            >
                                                                <div
                                                                    className={
                                                                        classes.dishOptionItemTitleContainer
                                                                    }
                                                                >
                                                                    {option.type == "selection" ? (
                                                                        <RadioButtonInput
                                                                            classNames={{
                                                                                radioButtonInput:
                                                                                    classes.radioInput,
                                                                            }}
                                                                            name={opt?.name}
                                                                            value={Boolean(
                                                                                selection.name ==
                                                                                    opt?.name,
                                                                            )}
                                                                            onChange={(data) =>
                                                                                handleSelectionChange(
                                                                                    data,
                                                                                    opt?.amount,
                                                                                )
                                                                            }
                                                                        />
                                                                    ) : (
                                                                        <CheckBoxInput
                                                                            name={option?.name}
                                                                            onChange={(data) => {
                                                                                return option.type ==
                                                                                    "deselection"
                                                                                    ? handleDeselectionChange(
                                                                                          data,
                                                                                          option?.amount,
                                                                                      )
                                                                                    : handleExtrasChange(
                                                                                          data,
                                                                                          option?.amount,
                                                                                      );
                                                                            }}
                                                                            classNames={{
                                                                                checkBoxInput:
                                                                                    classes.radioInput,
                                                                            }}
                                                                        />
                                                                    )}

                                                                    <p
                                                                        className={
                                                                            classes.dishOptionItemTitle
                                                                        }
                                                                    >
                                                                        {opt?.name}
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p
                                                                        className={
                                                                            classes.dishOptionItemPrice
                                                                        }
                                                                    >
                                                                        {option.type ==
                                                                        "deselection"
                                                                            ? "-"
                                                                            : "+"}
                                                                        {getCurrency(currency)}
                                                                        {opt?.amount}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )
                                                    );
                                                },
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                    </div>

                    <div className={classes.addToCartBtnContainer}>
                        <MbmcButton variant="SECONDARY" onClick={handleAddToCart}>
                            Add to cart ({getCurrency(currency)}
                            {total})
                        </MbmcButton>
                    </div>
                </div> */}
                </div>
            </div>
        </Modal>
    );
};
