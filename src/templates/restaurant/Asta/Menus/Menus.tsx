import React, { FC, useCallback, useEffect, useState } from "react";
import { CoreMenuFields } from "templates/restaurant/types/CoreMenuFields";
import { emptyRestaurantPlaceholder } from "utilities/restaurant";
import { MenuCategories } from "../MenuCategories";
import { RestaurantDetails } from "../RestaurantDetails/RestaurantDetails";
import { useDisplayMenuItems, useHandleMenuChange } from "./helper";
import { useMenusStyles } from "./styles";
import { MenuProps } from "./types";
import clx from "classnames";
import { CoreRestaurantFields_activeMenus } from "templates/restaurant/types/CoreRestaurantFields";
import { MenuSelector } from "../MenuSelector";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

export const Menus: FC<MenuProps> = ({ restaurant, setDisplayDialog, setSelectedItemId, cart }) => {
    const classes = useMenusStyles();
    const displayMenuItemsHook = useDisplayMenuItems();
    const handleMenuChange = useHandleMenuChange();
    const [activeMenu, setActiveMenu] = useState<CoreMenuFields | null>(null);
    const [cartOpen, setCartOpen] = useState<boolean>(false);
    const menus = [...(restaurant.restaurant.activeMenus as CoreMenuFields[])];
    const [menuName, setMenuName] = useState<string>(menus.length > 0 ? menus[0].name : "");

    const displayEmptyRestaurant = () => {
        return (
            <div className={classes.restaurantEmpty}>
                <img
                    src={emptyRestaurantPlaceholder}
                    alt={restaurant.restaurant.name as string}
                    className={classes.emptyRestaurant}
                />
                <p>There&apos;s nothing to show here. Please check back in a bit.</p>
            </div>
        );
    };

    const displayMenuItems = useCallback(
        () =>
            displayMenuItemsHook(activeMenu as CoreMenuFields, setDisplayDialog, setSelectedItemId),
        [activeMenu],
    );

    useEffect(() => {
        if (menus && menus.length > 0) setActiveMenu(menus[0]);
    }, []);

    return (
        <div className={classes.root}>
            <RestaurantDetails restaurant={restaurant} />
            <div className={classes.container}>
                <div className={classes.menuContainer}>
                    {(restaurant.restaurant?.activeMenus as CoreRestaurantFields_activeMenus[])
                        ?.length < 1 ? (
                        displayEmptyRestaurant()
                    ) : (
                        <>
                            <MenuSelector
                                menus={menus}
                                value={menuName}
                                handleChange={(e) => {
                                    handleMenuChange(e, setMenuName, setActiveMenu, restaurant);
                                }}
                            />
                            <MenuCategories restaurant={restaurant.restaurant} />
                            <div className={classes.restaurantMenuItems}>
                                {displayMenuItems()}
                                <div
                                    className={clx(classes.restaurantFooter)}
                                    onClick={() => {
                                        setCartOpen(!cartOpen);
                                    }}
                                >
                                    <Badge
                                        badgeContent={cart?.cartItems?.length}
                                        classes={{
                                            badge: classes.badge,
                                        }}
                                    >
                                        <ShoppingCartOutlined className={classes.shopCart} />
                                    </Badge>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
