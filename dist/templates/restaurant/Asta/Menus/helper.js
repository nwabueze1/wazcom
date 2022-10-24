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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { findCategories } from "../MenuCategories/helpers";
import { getCurrency } from "utilities/restaurant";
import { Item } from "../MenuItem";
import { useMenusStyles } from "./styles";
var parseMenuItems = function (activeMenu, searchValue) {
    var _a, _b;
    if (searchValue && searchValue.length > 0)
        return findCategories(activeMenu, searchValue);
    var menuItems = {};
    (_a = activeMenu === null || activeMenu === void 0 ? void 0 : activeMenu.activeMenuCategories) === null || _a === void 0 ? void 0 : _a.forEach(function (category) {
        menuItems[category === null || category === void 0 ? void 0 : category.title] = [];
    });
    (_b = activeMenu === null || activeMenu === void 0 ? void 0 : activeMenu.activeMenuItems) === null || _b === void 0 ? void 0 : _b.forEach(function (item) {
        var _a;
        var category = (_a = item === null || item === void 0 ? void 0 : item.menuCategory) === null || _a === void 0 ? void 0 : _a.title;
        if (!menuItems[category])
            return;
        menuItems[category].push(item);
    });
    return menuItems;
};
export var useDisplayMenuItems = function () {
    return function (activeMenu, setDisplayDialog, setSelectedItemId, searchValue) {
        var classes = useMenusStyles();
        var menuItems = parseMenuItems(activeMenu, searchValue);
        var menuItemKeys = Object.keys(menuItems);
        var currency = "USD";
        currency = getCurrency(currency);
        return menuItemKeys.map(function (key, index) { return (_jsxs("div", __assign({ id: key.toLowerCase(), className: classes.restaurantMenuItem }, { children: [_jsx("p", __assign({ className: classes.restaurantMenuItemCategory }, { children: key }), void 0), _jsx("div", __assign({ className: classes.restaurantMenuItemContent }, { children: menuItems[key].map(function (item, key) {
                        var id = item.id, name = item.name, description = item.description, price = item.price, image_url = item.image_url;
                        return (_jsx(Item, { onClick: function () {
                                setDisplayDialog(true);
                                setSelectedItemId(Number(item === null || item === void 0 ? void 0 : item.id));
                            }, id: Number(id), name: name, description: description, price: price, image_url: image_url, status: true, currency: currency }, key));
                    }) }), void 0)] }), index)); });
    };
};
export var useHandleMenuChange = function () {
    return function (event, setValue, setActiveMenu, restaurant) {
        var menus = restaurant.restaurant.activeMenus;
        var menu = menus.find(function (item) { return item.name === event.target.value; });
        setValue(event.target.value);
        setActiveMenu(menu);
    };
};
