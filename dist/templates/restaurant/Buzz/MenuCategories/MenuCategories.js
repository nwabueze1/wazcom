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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState, useEffect, useRef } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useMenuCategoryStyles } from "./styles";
import { useDisplayCategories } from "./helpers";
import { scroll } from "./helpers";
export var MenuCategories = function (content) {
    var classes = useMenuCategoryStyles();
    var displayCategoriesHook = useDisplayCategories();
    var restaurant = content.restaurant;
    var _a = __read(useState(null), 2), activeMenu = _a[0], setActiveMenu = _a[1];
    var _b = __read(useState(0), 2), activeCategory = _b[0], setActiveCategory = _b[1];
    var categoryRef = useRef(null);
    var _c = __read(useState({
        scrollWidth: 0,
        offsetWidth: 0,
    }), 2), scrollProps = _c[0], setScrollProps = _c[1];
    var menus = __spreadArray([], __read(restaurant.activeMenus), false);
    var isScrollable = (categoryRef === null || categoryRef === void 0 ? void 0 : categoryRef.current) && (scrollProps === null || scrollProps === void 0 ? void 0 : scrollProps.scrollWidth) > scrollProps.offsetWidth;
    useEffect(function () {
        setScrollProps(function () {
            var _a, _b, _c, _d;
            return {
                scrollWidth: (_b = (_a = categoryRef.current) === null || _a === void 0 ? void 0 : _a["scrollWidth"]) !== null && _b !== void 0 ? _b : 0,
                offsetWidth: (_d = (_c = categoryRef.current) === null || _c === void 0 ? void 0 : _c["offsetWidth"]) !== null && _d !== void 0 ? _d : 0,
            };
        });
        if (menus && menus.length > 0)
            setActiveMenu(menus[0]);
    }, [categoryRef.current]);
    var displayCategories = useCallback(function () {
        return displayCategoriesHook(activeMenu, activeCategory, setActiveCategory);
    }, [activeMenu, activeCategory]);
    return (_jsx("div", __assign({ className: classes.categoryParent }, { children: _jsxs("div", __assign({ className: classes.categoryContainer }, { children: [categoryRef.current && isScrollable && (_jsx(ArrowBackIos, { onClick: function () { return scroll(-200, categoryRef); }, className: classes.categoryArrow }, void 0)), _jsx("div", __assign({ ref: categoryRef, className: classes.menuCategories }, { children: displayCategories() }), void 0), categoryRef.current && isScrollable && (_jsx(ArrowForwardIos, { onClick: function () { return scroll(200, categoryRef); } }, void 0))] }), void 0) }), void 0));
};
