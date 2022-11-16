import { FC, useState, useEffect, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { MbmcBlock61Props, TMenuCategory, TMenuItem } from "./types";
import { useMbmcBlock61Styles } from "./styles";
import { GET_MENU_BY_UUID } from "./graphql";
import clx from "classnames";
import { MbmcCard } from "../../../../templates/mbmc/components/MbmcCard";
import { Modal } from "../../../../core";
import MbmcBlock16 from "../MbmcBlock16/MbmcBlock16";
import { getCurrency } from "../../../../utilities";

export const MbmcBlock61: FC<MbmcBlock61Props> = ({ heading, description, client, menu_uuid }) => {
    const classes = useMbmcBlock61Styles();
    const [categories, setCategories] = useState<TMenuCategory[]>([]);
    const [activeCategory, setActiveCategory] = useState<TMenuCategory>();
    const [items, setItems] = useState<TMenuItem[]>([]);
    const [optionsConfig, setOptionsConfig] = useState<{ [key: string]: any }[]>([]);
    const [currency, setCurrency] = useState<string>("");
    const [activeMenu, setActiveMenu] = useState<number | undefined>();
    const [openModal, setOpenModal] = useState<boolean>(false);

    const categoryItems = useMemo(
        () =>
            items.filter(
                (item) => item.menuCategory.id.toString() === activeCategory?.id?.toString(),
            ),
        [activeCategory?.id, items],
    );

    const { data, error } = useQuery(GET_MENU_BY_UUID, { client, variables: { uuid: menu_uuid } });

    const handleOpenModal = (id?: number) => {
        setActiveMenu(id);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    useEffect(() => {
        if (data) {
            const {
                menu: {
                    activeMenuCategories: categories,
                    activeMenuItems: items,
                    options_config,
                    restaurant,
                },
            } = data;

            setCategories(categories);
            setItems(items);
            setOptionsConfig(options_config);
            setCurrency(restaurant.bank_info.currency);
            categories.length > 0 && setActiveCategory(categories[0]);
        }

        if (error) {
            console.log(error);
        }
    }, [data, error]);

    const displayCategories = () =>
        categories.map(({ title, id }, index) => (
            <div
                key={index}
                className={clx(
                    classes.block61Category,
                    id.toString() === activeCategory?.id?.toString() &&
                        classes.block61CategoryActive,
                )}
                onClick={() => {
                    handleCategoryChange({ title, id });
                }}
            >
                {title}
            </div>
        ));

    const displayItems = () =>
        categoryItems.map(({ name, description, image_url, price }, index) => (
            <MbmcCard
                key={index}
                heading={
                    <div className={classes.block61ItemHeading}>
                        <p>{name}</p>{" "}
                        <p className={classes.block61ItemPrice}>
                            {getCurrency(currency)}
                            {price}
                        </p>
                    </div>
                }
                description={description}
                image={image_url}
                className={classes.block61Item}
                handleClick={() => handleOpenModal(index)}
            />
        ));

    const handleCategoryChange = (category: TMenuCategory) => {
        setActiveCategory(category);
    };

    return (
        <>
            <div className={classes.root}>
                <div className={classes.block61Container}>
                    <h3 className={classes.block61Title}>{heading}</h3>
                    <p className={classes.block61Description}>{description}</p>

                    {categoryItems.length > 0 && (
                        <>
                            <div className={classes.block61Categories}>{displayCategories()}</div>
                            <div className={classes.block61Items}>{displayItems()}</div>
                        </>
                    )}
                </div>
            </div>
            <Modal open={openModal} handleClose={handleCloseModal}>
                <div className={classes.modalContent}>
                    <MbmcBlock16
                        name={categoryItems?.[activeMenu as number]?.name}
                        description={categoryItems?.[activeMenu as number]?.description}
                        price={categoryItems?.[activeMenu as number]?.price}
                        image={categoryItems?.[activeMenu as number]?.image_url}
                        currency={currency}
                        options={categoryItems?.[activeMenu as number]?.options}
                        optionsConfig={optionsConfig}
                        handleAddToCart={() => console.log("add to cartt")}
                    />
                </div>
            </Modal>
        </>
    );
};
