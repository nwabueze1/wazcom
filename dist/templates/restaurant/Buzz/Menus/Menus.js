var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { emptyRestaurantPlaceholder } from "../../../../utilities";
import { MenuCategories } from "../MenuCategories";
import { RestaurantDetails } from "../RestaurantDetails/RestaurantDetails";
import { useDisplayMenuItems, useHandleMenuChange } from "./helper";
import { useMenusStyles } from "./styles";
import clx from "classnames";
import { Cart } from "../Cart";
import { MenuSelector } from "../MenuSelector";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
export var Menus = function (_a) {
    var _b, _c, _d;
    var restaurant = _a.restaurant, setDisplayDialog = _a.setDisplayDialog, setSelectedItemId = _a.setSelectedItemId, cart = _a.cart;
    var classes = useMenusStyles();
    var displayMenuItemsHook = useDisplayMenuItems();
    var handleMenuChange = useHandleMenuChange();
    var _e = __read(useState(null), 2), activeMenu = _e[0], setActiveMenu = _e[1];
    var _f = __read(useState(false), 2), cartOpen = _f[0], setCartOpen = _f[1];
    var menus = __spreadArray([], __read(restaurant.restaurant.activeMenus), false);
    var _g = __read(useState(menus.length > 0 ? menus[0].name : ""), 2), menuName = _g[0], setMenuName = _g[1];
    var displayEmptyRestaurant = function () {
        return (_jsxs("div", __assign({ className: classes.restaurantEmpty }, { children: [_jsx("img", { src: emptyRestaurantPlaceholder, alt: restaurant.restaurant.name, className: classes.emptyRestaurant }, void 0), _jsx("p", { children: "There's nothing to show here. Please check back in a bit." }, void 0)] }), void 0));
    };
    var displayMenuItems = useCallback(function () {
        return displayMenuItemsHook(activeMenu, setDisplayDialog, setSelectedItemId);
    }, [activeMenu]);
    useEffect(function () {
        if (menus && menus.length > 0)
            setActiveMenu(menus[0]);
    }, []);
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: classes.container }, { children: [_jsxs("div", __assign({ className: classes.menuContainer }, { children: [_jsx(RestaurantDetails, { restaurant: restaurant }, void 0), ((_c = (_b = restaurant.restaurant) === null || _b === void 0 ? void 0 : _b.activeMenus) === null || _c === void 0 ? void 0 : _c.length) < 1 ? (displayEmptyRestaurant()) : (_jsxs(_Fragment, { children: [_jsx(MenuSelector, { menus: menus, value: menuName, handleChange: function (e) {
                                        handleMenuChange(e, setMenuName, setActiveMenu, restaurant);
                                    } }, void 0), _jsx(MenuCategories, { restaurant: restaurant.restaurant }, void 0), _jsxs("div", __assign({ className: classes.restaurantMenuItems }, { children: [displayMenuItems(), _jsx("div", __assign({ className: clx(classes.restaurantFooter), onClick: function () {
                                                setCartOpen(!cartOpen);
                                            } }, { children: _jsx(Badge, __assign({ badgeContent: (_d = cart === null || cart === void 0 ? void 0 : cart.cartItems) === null || _d === void 0 ? void 0 : _d.length, classes: {
                                                    badge: classes.badge,
                                                } }, { children: _jsx(ShoppingCartOutlined, { className: classes.shopCart }, void 0) }), void 0) }), void 0)] }), void 0)] }, void 0))] }), void 0), _jsx("div", __assign({ className: clx(classes.cartContainer, cartOpen && classes.restaurantVisibleCart) }, { children: _jsx(Cart, {}, void 0) }), void 0)] }), void 0) }), void 0));
};
