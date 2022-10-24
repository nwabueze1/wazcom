import { findCategories } from "../MenuCategories/helpers";
import { SelectChangeEvent } from "@mui/material";
import { CoreMenuFields } from "../../types/CoreMenuFields";
import { CoreMenuItemFields } from "../../types/CoreMenuItemFields";
import { getCurrency } from "utilities/restaurant";
import { Item } from "../MenuItem";
import { useMenusStyles } from "./styles";
import { CoreFosFields } from "templates/restaurant/types/CoreFosFields";

const parseMenuItems = (
    activeMenu: CoreMenuFields,
    searchValue?: string,
): {
    [key: string]: CoreMenuItemFields[];
} => {
    if (searchValue && searchValue.length > 0) return findCategories(activeMenu, searchValue);
    const menuItems: { [key: string]: CoreMenuItemFields[] } = {};

    activeMenu?.activeMenuCategories?.forEach((category: any) => {
        menuItems[category?.title] = [];
    });

    activeMenu?.activeMenuItems?.forEach((item: any) => {
        const category = item?.menuCategory?.title;
        if (!menuItems[category]) return;
        menuItems[category].push(item);
    });
    return menuItems;
};

export const useDisplayMenuItems = () => {
    return (
        activeMenu: CoreMenuFields,
        setDisplayDialog: (display: boolean) => void,
        setSelectedItemId: (id: number) => void,
        searchValue?: string,
    ) => {
        const classes = useMenusStyles();
        const menuItems = parseMenuItems(activeMenu, searchValue);
        const menuItemKeys = Object.keys(menuItems);
        let currency = "USD";
        currency = getCurrency(currency);

        return menuItemKeys.map((key, index) => (
            <div id={key.toLowerCase()} key={index} className={classes.restaurantMenuItem}>
                <p className={classes.restaurantMenuItemCategory}>{key}</p>
                <div className={classes.restaurantMenuItemContent}>
                    {menuItems[key].map((item, key) => {
                        const { id, name, description, price, image_url } = item;
                        return (
                            <Item
                                onClick={() => {
                                    setDisplayDialog(true);
                                    setSelectedItemId(Number(item?.id as string));
                                }}
                                key={key}
                                id={Number(id)}
                                name={name}
                                description={description}
                                price={price}
                                image_url={image_url as string}
                                status={true}
                                currency={currency}
                            />
                        );
                    })}
                </div>
            </div>
        ));
    };
};

export const useHandleMenuChange = () => {
    return (
        event: SelectChangeEvent<{
            name?: string | undefined;
            value: unknown | string;
        }>,
        setValue: (value: string) => void,
        setActiveMenu: (menu: CoreMenuFields) => void,
        restaurant: CoreFosFields,
    ) => {
        const menus = (restaurant as CoreFosFields).restaurant.activeMenus as CoreMenuFields[];
        const menu = menus.find((item) => item.name === event.target.value);
        setValue(event.target.value as string);
        setActiveMenu(menu as CoreMenuFields);
    };
};
