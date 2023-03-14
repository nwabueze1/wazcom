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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useMbmcBlock61Styles } from "./styles";
import clx from "classnames";
import { MbmcCard, OrderDialog } from "../../components";
import { getCurrency } from "../../../../utilities";
export var MbmcBlock61 = function (_a) {
    var heading = _a.heading, description = _a.description;
    var restaurant = useSelector(function (state) { return state; }).restaurant;
    var classes = useMbmcBlock61Styles();
    var _b = __read(useState(), 2), activeCategory = _b[0], setActiveCategory = _b[1];
    var _c = __read(useState(), 2), itemUuid = _c[0], setItemUuid = _c[1];
    var menu = restaurant === null || restaurant === void 0 ? void 0 : restaurant.menu;
    var categoryItems = useMemo(function () {
        var _a;
        return (_a = menu === null || menu === void 0 ? void 0 : menu.menuItems) === null || _a === void 0 ? void 0 : _a.filter(function (item) { var _a, _b; return ((_a = item === null || item === void 0 ? void 0 : item.menuCategory) === null || _a === void 0 ? void 0 : _a.id.toString()) === ((_b = activeCategory === null || activeCategory === void 0 ? void 0 : activeCategory.id) === null || _b === void 0 ? void 0 : _b.toString()); });
    }, [activeCategory === null || activeCategory === void 0 ? void 0 : activeCategory.id]);
    useEffect(function () {
        var menuCategories = menu.menuCategories;
        var queryParams = new URLSearchParams(window.location.search);
        var activeMenuCategory = menuCategories.length > 0 ? menuCategories[0] : undefined;
        if (queryParams.get("category_uuid")) {
            activeMenuCategory = menuCategories.find(function (category) { return category.uuid === queryParams.get("category_uuid"); });
        }
        menuCategories.length > 0 && setActiveCategory(activeMenuCategory !== null && activeMenuCategory !== void 0 ? activeMenuCategory : menuCategories[0]);
    }, []);
    var displayCategories = function () {
        var _a;
        return (_a = menu === null || menu === void 0 ? void 0 : menu.menuCategories) === null || _a === void 0 ? void 0 : _a.map(function (_a, index) {
            var _b;
            var title = _a.title, id = _a.id, uuid = _a.uuid;
            return (_jsx("div", __assign({ className: clx(classes.block61Category, id.toString() === ((_b = activeCategory === null || activeCategory === void 0 ? void 0 : activeCategory.id) === null || _b === void 0 ? void 0 : _b.toString()) && classes.block61CategoryActive), onClick: function () {
                    handleCategoryChange({ title: title, id: String(id), uuid: uuid });
                } }, { children: title }), index));
        });
    };
    var displayItems = function () {
        return categoryItems === null || categoryItems === void 0 ? void 0 : categoryItems.map(function (_a, index) {
            var _b, _c, _d;
            var uuid = _a.uuid, name = _a.name, description = _a.description, image_url = _a.image_url, price = _a.price;
            return (_jsx(MbmcCard, { heading: _jsxs("div", __assign({ className: classes.block61ItemHeading }, { children: [_jsx("p", { children: name }), " ", _jsxs("p", __assign({ className: classes.block61ItemPrice }, { children: [getCurrency((_d = (_c = (_b = menu === null || menu === void 0 ? void 0 : menu.restaurant) === null || _b === void 0 ? void 0 : _b.bank_info) === null || _c === void 0 ? void 0 : _c.currency) !== null && _d !== void 0 ? _d : ""), price] }))] })), description: description, image: image_url !== null && image_url !== void 0 ? image_url : "", className: classes.block61Item, url: name, handleClick: function (route) {
                    console.log(route);
                    setItemUuid(uuid);
                } }, index));
        });
    };
    var handleCategoryChange = function (category) {
        setActiveCategory(category);
    };
    return (_jsx("div", __assign({ className: classes.root, id: "menu" }, { children: _jsxs("div", __assign({ className: classes.block61Container }, { children: [_jsx("h3", __assign({ className: classes.block61Title }, { children: heading })), _jsx("p", __assign({ className: classes.block61Description }, { children: description })), categoryItems && (categoryItems === null || categoryItems === void 0 ? void 0 : categoryItems.length) > 0 && (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: classes.block61Categories }, { children: displayCategories() })), _jsx("div", __assign({ className: classes.block61Items }, { children: displayItems() }))] })), _jsx(OrderDialog, { itemUuid: itemUuid, handleClose: function () {
                        setItemUuid(undefined);
                    } })] })) })));
};
