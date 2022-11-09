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
import { useQuery } from "@apollo/client";
import { useMbmcBlock61Styles } from "./styles";
import { GET_MENU_BY_UUID } from "./graphql";
import clx from "classnames";
import { MbmcCard } from "../../../../templates/mbmc/components/MbmcCard";
import { Modal } from "core";
import MbmcBlock16 from "../MbmcBlock16/MbmcBlock16";
import { getCurrency } from "../../../../utilities";
export var MbmcBlock61 = function (_a) {
    var _b, _c, _d, _e, _f;
    var heading = _a.heading, description = _a.description, client = _a.client, menu_uuid = _a.menu_uuid, site_uuid = _a.site_uuid;
    var classes = useMbmcBlock61Styles();
    var _g = __read(useState([]), 2), categories = _g[0], setCategories = _g[1];
    var _h = __read(useState(), 2), activeCategory = _h[0], setActiveCategory = _h[1];
    var _j = __read(useState([]), 2), items = _j[0], setItems = _j[1];
    var _k = __read(useState([]), 2), optionsConfig = _k[0], setOptionsConfig = _k[1];
    var _l = __read(useState(""), 2), currency = _l[0], setCurrency = _l[1];
    var _m = __read(useState(), 2), activeMenu = _m[0], setActiveMenu = _m[1];
    var _o = __read(useState(false), 2), openModal = _o[0], setOpenModal = _o[1];
    var categoryItems = useMemo(function () {
        return items.filter(function (item) { var _a; return item.menuCategory.id.toString() === ((_a = activeCategory === null || activeCategory === void 0 ? void 0 : activeCategory.id) === null || _a === void 0 ? void 0 : _a.toString()); });
    }, [activeCategory === null || activeCategory === void 0 ? void 0 : activeCategory.id, items]);
    var _p = useQuery(GET_MENU_BY_UUID, { client: client, variables: { uuid: menu_uuid } }), data = _p.data, error = _p.error;
    var handleOpenModal = function (id) {
        setActiveMenu(id);
        setOpenModal(true);
    };
    var handleCloseModal = function () {
        setOpenModal(false);
    };
    useEffect(function () {
        if (data) {
            var _a = data.menu, categories_1 = _a.activeMenuCategories, items_1 = _a.activeMenuItems, options_config = _a.options_config, restaurant = _a.restaurant;
            setCategories(categories_1);
            setItems(items_1);
            setOptionsConfig(options_config);
            setCurrency(restaurant.bank_info.currency);
            categories_1.length > 0 && setActiveCategory(categories_1[0]);
        }
        if (error) {
            console.log(error);
        }
    }, [data, error]);
    var displayCategories = function () {
        return categories.map(function (_a, index) {
            var _b;
            var title = _a.title, id = _a.id;
            return (_jsx("div", __assign({ className: clx(classes.block61Category, id.toString() === ((_b = activeCategory === null || activeCategory === void 0 ? void 0 : activeCategory.id) === null || _b === void 0 ? void 0 : _b.toString()) &&
                    classes.block61CategoryActive), onClick: function () {
                    handleCategoryChange({ title: title, id: id });
                } }, { children: title }), index));
        });
    };
    var displayItems = function () {
        return categoryItems.map(function (_a, index) {
            var name = _a.name, description = _a.description, image_url = _a.image_url, price = _a.price;
            return (_jsx(MbmcCard, { heading: _jsxs("div", __assign({ className: classes.block61ItemHeading }, { children: [_jsx("p", { children: name }, void 0), " ", _jsxs("p", __assign({ className: classes.block61ItemPrice }, { children: [getCurrency(currency), price] }), void 0)] }), void 0), description: description, image: image_url, className: classes.block61Item, onClick: function () { return handleOpenModal(index); } }, index));
        });
    };
    var handleCategoryChange = function (category) {
        setActiveCategory(category);
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: classes.block61Container }, { children: [_jsx("h3", __assign({ className: classes.block61Title }, { children: heading }), void 0), _jsx("p", __assign({ className: classes.block61Description }, { children: description }), void 0), categoryItems.length > 0 && (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: classes.block61Categories }, { children: displayCategories() }), void 0), _jsx("div", __assign({ className: classes.block61Items }, { children: displayItems() }), void 0)] }, void 0))] }), void 0) }), void 0), _jsx(Modal, __assign({ open: openModal, handleClose: handleCloseModal }, { children: _jsx("div", __assign({ className: classes.modalContent }, { children: _jsx(MbmcBlock16, { name: (_b = categoryItems === null || categoryItems === void 0 ? void 0 : categoryItems[activeMenu]) === null || _b === void 0 ? void 0 : _b.name, description: (_c = categoryItems === null || categoryItems === void 0 ? void 0 : categoryItems[activeMenu]) === null || _c === void 0 ? void 0 : _c.description, price: (_d = categoryItems === null || categoryItems === void 0 ? void 0 : categoryItems[activeMenu]) === null || _d === void 0 ? void 0 : _d.price, image: (_e = categoryItems === null || categoryItems === void 0 ? void 0 : categoryItems[activeMenu]) === null || _e === void 0 ? void 0 : _e.image_url, currency: currency, options: (_f = categoryItems === null || categoryItems === void 0 ? void 0 : categoryItems[activeMenu]) === null || _f === void 0 ? void 0 : _f.options, optionsConfig: optionsConfig, siteUuid: site_uuid, menuItemUuid: menu_uuid, client: client }, void 0) }), void 0) }), void 0)] }, void 0));
};
