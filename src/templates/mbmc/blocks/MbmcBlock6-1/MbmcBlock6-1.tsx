import { FC, useState, useEffect, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { MbmcBlock61Props, TMenuCategory } from "./types";
import { useMbmcBlock61Styles } from "./styles";
import { GET_MENU_BY_UUID } from "./graphql";
import clx from "classnames";
import { MbmcCard, OrderDialog } from "../../components";
import { getCurrency } from "../../../../utilities";
import { RestaurantContext, RestaurantContextProps } from "../../contexts";
import { createApolloClient } from "../../../../helpers/graphQL";

export const MbmcBlock61: FC<MbmcBlock61Props> = ({
    heading,
    description,
    services,
    integratedService,
    menu_uuid,
}) => {
    const classes = useMbmcBlock61Styles();
    const [contextData, setContextData] = useState<Omit<RestaurantContextProps, "setContext">>({});
    const [activeCategory, setActiveCategory] = useState<TMenuCategory>();
    const [itemUuid, setItemUuid] = useState<string>();
    const client = useMemo(
        () => createApolloClient(services ? services[integratedService] : ""),
        [],
    );

    const { data, error } = useQuery(GET_MENU_BY_UUID, { client, variables: { uuid: menu_uuid } });
    const { menu } = contextData;

    const categoryItems = useMemo(
        () =>
            menu?.menuItems?.filter(
                (item) => item?.menuCategory?.id.toString() === activeCategory?.id?.toString(),
            ),
        [activeCategory?.id, menu?.menuItems],
    );

    useEffect(() => {
        if (data) {
            const {
                menu: { activeMenuCategories: menuCategories, activeMenuItems: menuItems, ...rest },
            } = data;
            const menu = { menuCategories, menuItems, ...rest };
            setContextData({ menu, clients: { [integratedService]: client } });

            const queryParams = new URLSearchParams(window.location.search);
            let activeMenuCategory = menuCategories.length > 0 ? menuCategories[0] : undefined;

            if (queryParams.get("category_uuid")) {
                activeMenuCategory = menuCategories.find(
                    (category: any) => category.uuid === queryParams.get("category_uuid"),
                );
            }

            menuCategories.length > 0 && setActiveCategory(activeMenuCategory ?? menuCategories[0]);
        }

        if (error) {
            console.log(error);
        }
    }, [data, error]);

    const displayCategories = () =>
        menu?.menuCategories?.map(({ title, id }, index) => (
            <div
                key={index}
                className={clx(
                    classes.block61Category,
                    id.toString() === activeCategory?.id?.toString() &&
                        classes.block61CategoryActive,
                )}
                onClick={() => {
                    handleCategoryChange({ title, id: Number(id) });
                }}
            >
                {title}
            </div>
        ));

    const displayItems = () =>
        categoryItems?.map(({ uuid, name, description, image_url, price }, index) => (
            <MbmcCard
                key={index}
                heading={
                    <div className={classes.block61ItemHeading}>
                        <p>{name}</p>{" "}
                        <p className={classes.block61ItemPrice}>
                            {getCurrency(menu?.restaurant?.bank_info?.currency ?? "")}
                            {price}
                        </p>
                    </div>
                }
                description={description}
                image={image_url ?? ""}
                className={classes.block61Item}
                handleClick={(route: string) => {
                    setItemUuid(uuid);
                    console.log(route);
                }}
            />
        ));

    const handleCategoryChange = (category: TMenuCategory) => {
        setActiveCategory(category);
    };

    const updateContext = (variables: Omit<RestaurantContextProps, "setContext">) => {
        setContextData({ ...contextData, ...variables });
    };

    return (
        <RestaurantContext.Provider value={{ ...contextData, setContext: updateContext }}>
            <div className={classes.root}>
                <div className={classes.block61Container}>
                    <h3 className={classes.block61Title}>{heading}</h3>
                    <p className={classes.block61Description}>{description}</p>

                    {categoryItems && categoryItems?.length > 0 && (
                        <>
                            <div className={classes.block61Categories}>{displayCategories()}</div>
                            <div className={classes.block61Items}>{displayItems()}</div>
                        </>
                    )}
                    <OrderDialog
                        itemUuid={itemUuid}
                        handleClose={() => {
                            setItemUuid(undefined);
                        }}
                    />
                </div>
            </div>
        </RestaurantContext.Provider>
    );
};
