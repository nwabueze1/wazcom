import { CheckBoxInput, RadioButtonInput } from "io";
import React, { useState } from "react";
import { MbmcButton } from "../../../../templates/mbmc/components/MbmcButton/MbmcButton";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useMbmcBlock16Styles } from "./styles";
import { MbmcBlock16Props } from "./types";
import { getCurrency } from "../../../../utilities";
// import Cookies from "universal-cookie";
// import { useMutation, useQuery } from "@apollo/client";
// import { CREATE_CART, GET_CART } from "./graphql";

const MbmcBlock16: React.FC<MbmcBlock16Props> = ({
    name,
    description,
    image,
    price,
    currency,
    options,
    optionsConfig,
}) => {
    const classes = useMbmcBlock16Styles();
    const [count, setCount] = useState<number>(1);
    const [selection, setSelection] = useState<{ name?: string; amount?: number }>({});
    const [deselection, setDeselection] = useState<{ name?: string; amount?: number }[]>([]);
    // const [extras, setExtras] = useState<{ name?: string; amount?: number }[]>([]);
    // const { data: cartData, refetch } = useQuery(GET_CART, { client });
    // const [createCart] = useMutation(CREATE_CART, {
    //     client,
    //     variables: { site_uuid: siteUuid, currency },
    // });
    // const [
    //     createCartItem,
    //     { data: createdCartItem, loading: createCartItemLoading, error: createCartItemError },
    // ] = useMutation(CREATE_CART_ITEM, {
    //     client,
    // });
    // const [
    //     updateCartItem,
    //     { data: updatedCartItem, loading: updateCartItemLoading, error: updateCartItemError },
    // ] = useMutation(UPDATE_CART_ITEM, {
    //     client,
    // });
    const itemOptions = optionsConfig?.filter((option) => options?.includes(option?.uuid));
    const total = price * count;

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    };

    const handleDecrement = () => {
        setCount((prev) => (prev <= 1 ? 1 : prev - 1));
    };

    const handleSelectionChange = (data: { name: string; value: any }, price: number) => {
        const { name } = data;
        setSelection({ name, amount: price });
    };

    const handleDeselectionChange = (data: { name: string; value: any }, price: number) => {
        const { name } = data;
        const optionIndex = deselection.findIndex(
            (item) => item.name == name && item.amount == price,
        );
        const updatedDeselection = deselection;
        if (optionIndex !== -1) {
            updatedDeselection.splice(optionIndex, 1);
            return setDeselection(() => {
                return [...updatedDeselection];
            });
        }

        return setDeselection((prev) => {
            return [...prev, { name, amount: price }];
        });
    };

    // const handleExtrasChange = (data: { name: string; value: any }, price: number) => {
    //     const { name } = data;
    //     const optionIndex = extras.findIndex((item) => item.name == name && item.amount == price);
    //     const updatedExtras = extras;
    //     if (optionIndex !== -1) {
    //         updatedExtras.splice(optionIndex, 1);
    //         return setExtras(() => {
    //             return [...updatedExtras];
    //         });
    //     }

    //     return setExtras((prev) => {
    //         return [...prev, { name, amount: price }];
    //     });
    // };

    // const handleAddToCart = async () => {
    //     const cookies = new Cookies();
    //     const cart = cookies.get("cart");
    //     const options = itemOptions?.map((option) => {
    //         return {
    //             name: option?.name as string,
    //             type: option?.type as string,
    //             selectedChoices:
    //                 option?.type == "selection"
    //                     ? [selection]
    //                     : option.type == "deselection"
    //                     ? [...deselection]
    //                     : [...extras],
    //         };
    //     });
    //     if (!cart || !cart[siteUuid]) {
    //         await createCart();
    //     }

    //     if (cart && cart[siteUuid]) {
    //         const cartUuid = cart[siteUuid];
    //         const parsedOptions =
    //             (options as { [key: string]: any }[])?.length > 0 ? JSON.stringify(options) : null;
    //         const f = refetch({ uuid: cartUuid });
    //         console.log("f", f);
    //         let operationStatus;
    //         const params = {
    //             detail: description as string,
    //             quantity: count,
    //             cart_uuid: cartUuid,
    //             menu_item_uuid: menuItemUuid,
    //             options: parsedOptions,
    //         };

    //         // if (!cartItemUuid) {
    //         //     const result = await createCartItem({ variables: params });
    //         //     // operationStatus = status;
    //         // }  else if (cartItemUuid) {
    //         //     const updatedResult = await updateCartItem({
    //         //         uuid: cartItemUuid,
    //         //         quantity: count,
    //         //         options: parsedOptions ?? undefined,
    //         //     });
    //         //     // operationStatus = status;
    //         // }

    //         // if (operationStatus) {
    //         // close();
    //         // reloadCart();
    //         // toast.success(
    //         //     cartItemUuid ? "Item Updated Successfully" : "Item Added Successfully"
    //         // );
    //         // }
    //         // setLoading(false);
    //     }
    // };

    return (
        <div className={classes.cartItemContainer}>
            <div className={classes.topContent}>
                <div className={classes.imgContainer}>
                    <img className={classes.cartItemImg} src={image} alt="cart item image" />
                </div>
                <div className={classes.content}>
                    <p className={classes.title}>{name}</p>
                    <p className={classes.description}>{description}</p>
                    <div className={classes.priceContainer}>
                        <div className={classes.price}>
                            <p>
                                {getCurrency(currency)}
                                {price}
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
                            <div className={classes.quantityButton} onClick={handleIncrement}>
                                <AddRoundedIcon className={classes.operationIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.bottomContent}>
                <div className={classes.dishOptions}>
                    {itemOptions &&
                        itemOptions.length > 0 &&
                        itemOptions.map((option, index) => {
                            return (
                                <div key={index} className={classes.dishOptionContainer}>
                                    <div className={classes.dishOptionTitleContainer}>
                                        <div>
                                            <p className={classes.dishOptionTitle}>{option.name}</p>
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
                                                                        onChange={(data) =>
                                                                            handleDeselectionChange(
                                                                                data,
                                                                                option?.amount,
                                                                            )
                                                                        }
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
                                                                    {option.type == "deselection"
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
                    <MbmcButton variant="SECONDARY">
                        Add to cart ({getCurrency(currency)}
                        {total})
                    </MbmcButton>
                </div>
            </div>
        </div>
    );
};

export default MbmcBlock16;
