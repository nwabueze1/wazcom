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
import { jsx as _jsx } from "react/jsx-runtime";
import clx from "classnames";
import { useMenuCategoryStyles } from ".";
export var useDisplayCategories = function () {
    return function (activeMenu, activeCategory, setActiveCategory, searchValue) {
        var _a, _b;
        var classes = useMenuCategoryStyles();
        var categories = searchValue && searchValue.length > 0
            ? Object.keys(findCategories(activeMenu, searchValue))
            : __spreadArray([], __read(((_b = (_a = activeMenu === null || activeMenu === void 0 ? void 0 : activeMenu.activeMenuCategories) === null || _a === void 0 ? void 0 : _a.map(function (category) { return category === null || category === void 0 ? void 0 : category.title; })) !== null && _b !== void 0 ? _b : [])), false);
        return categories === null || categories === void 0 ? void 0 : categories.map(function (category, index) {
            return (_jsx("div", __assign({ className: clx(classes.restaurantCategory, activeCategory === index && classes.active), onClick: function () { return setActiveCategory(index); } }, { children: _jsx("p", __assign({ className: "".concat(classes.restaurantMenuCategory, " ").concat(activeCategory === index && classes.textActive) }, { children: _jsx("a", __assign({ href: "#".concat(category.toLowerCase()), className: clx(activeCategory === index
                            ? classes.textActive
                            : classes.categoryLink) }, { children: category }), void 0) }), void 0) }), index));
        });
    };
};
export var findCategories = function (menu, searchValue) {
    var menuItems = (menu === null || menu === void 0 ? void 0 : menu.activeMenuItems).filter(function (menuItem) {
        return menuItem.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    var categories = __spreadArray([], __read(new Set(menuItems.map(function (menuItem) { var _a; return (_a = menuItem === null || menuItem === void 0 ? void 0 : menuItem.menuCategory) === null || _a === void 0 ? void 0 : _a.title; }))), false);
    var response = {};
    categories.forEach(function (category) {
        response[category] = menuItems.filter(function (menuItem) { var _a; return ((_a = menuItem === null || menuItem === void 0 ? void 0 : menuItem.menuCategory) === null || _a === void 0 ? void 0 : _a.title.toString()) === (category === null || category === void 0 ? void 0 : category.toString()); });
    });
    return response;
};
export var scroll = function (scrollOffset, ref) {
    if (ref.current)
        ref.current.scrollLeft += scrollOffset;
};
