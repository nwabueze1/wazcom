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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useMbmcBlock61Styles } from "./styles";
import clx from "classnames";
import { MbmcCard, OrderDialog } from "../../components";
import { getCurrency } from "../../../../utilities";
import { initialClientMenu, useGetClientMenu } from "./helpers";
import { handleElementClick } from "../../utilities";
export var MbmcBlock61 = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, heading = _a.heading, description = _a.description, _c = _a.isSsr, isSsr = _c === void 0 ? true : _c, menu_uuid = _a.menu_uuid, index = _a.index, activeElement = _a.activeElement, handleClick = _a.handleClick;
    var restaurant = useSelector(function (state) { return state; }).restaurant;
    var classes = useMbmcBlock61Styles();
    var _d = __read(useState(initialClientMenu), 2), clientMenu = _d[0], setClientMenu = _d[1];
    var _e = __read(useState(), 2), activeCategory = _e[0], setActiveCategory = _e[1];
    var _f = __read(useState(), 2), itemUuid = _f[0], setItemUuid = _f[1];
    var menu = restaurant === null || restaurant === void 0 ? void 0 : restaurant.menu;
    var getClientMenu = useGetClientMenu();
    var categoryItems = useMemo(function () {
        var _a, _b;
        return (_b = (_a = (menu !== null && menu !== void 0 ? menu : clientMenu)) === null || _a === void 0 ? void 0 : _a.menuItems) === null || _b === void 0 ? void 0 : _b.filter(function (item) { var _a, _b; return ((_a = item === null || item === void 0 ? void 0 : item.menuCategory) === null || _a === void 0 ? void 0 : _a.id.toString()) === ((_b = activeCategory === null || activeCategory === void 0 ? void 0 : activeCategory.id) === null || _b === void 0 ? void 0 : _b.toString()); });
    }, [activeCategory === null || activeCategory === void 0 ? void 0 : activeCategory.id, clientMenu === null || clientMenu === void 0 ? void 0 : clientMenu.uuid]);
    useEffect(function () {
        if (isSsr || !menu_uuid)
            return;
        var fetchMenu = function () { return __awaiter(void 0, void 0, void 0, function () {
            var clientMenu;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getClientMenu({ uuid: menu_uuid })];
                    case 1:
                        clientMenu = _a.sent();
                        setClientMenu(clientMenu);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchMenu();
    }, [menu_uuid]);
    useEffect(function () {
        if (!menu && !clientMenu)
            return;
        var menuCategories = (menu !== null && menu !== void 0 ? menu : clientMenu).menuCategories;
        var queryParams = new URLSearchParams(window.location.search);
        var activeMenuCategory = menuCategories.length > 0 ? menuCategories[0] : undefined;
        if (queryParams.get("category_uuid")) {
            activeMenuCategory = menuCategories.find(function (category) { return category.uuid === queryParams.get("category_uuid"); });
        }
        menuCategories.length > 0 && setActiveCategory(activeMenuCategory !== null && activeMenuCategory !== void 0 ? activeMenuCategory : menuCategories[0]);
    }, [clientMenu === null || clientMenu === void 0 ? void 0 : clientMenu.uuid]);
    var displayCategories = function () {
        var _a, _b;
        return (_b = (_a = (menu !== null && menu !== void 0 ? menu : clientMenu)) === null || _a === void 0 ? void 0 : _a.menuCategories) === null || _b === void 0 ? void 0 : _b.map(function (_a, index) {
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
    return (_jsx("div", __assign({ className: classes.root, id: "menu" }, { children: _jsxs("div", __assign({ className: classes.block61Container }, { children: [_jsx("h3", __assign({ className: clx(classes.block61Title, activeElement === "".concat(String(index), ".heading") && classes.block61ActiveElement), onClick: function () { return handleElementClick(mode, "".concat(String(index), ".heading"), handleClick); } }, { children: heading })), _jsx("p", __assign({ className: clx(classes.block61Description, activeElement === "".concat(String(index), ".description") && classes.block61ActiveElement), onClick: function () { return handleElementClick(mode, "".concat(String(index), ".description"), handleClick); } }, { children: description })), categoryItems && (categoryItems === null || categoryItems === void 0 ? void 0 : categoryItems.length) > 0 && (_jsxs("div", __assign({ className: activeElement === "".concat(String(index), ".menu_uuid") ? classes.block61ActiveElement : "", onClick: function () { return handleElementClick(mode, "".concat(String(index), ".menu_uuid"), handleClick); } }, { children: [_jsx("div", __assign({ className: classes.block61Categories }, { children: displayCategories() })), _jsx("div", __assign({ className: classes.block61Items }, { children: displayItems() }))] }))), _jsx(OrderDialog, { itemUuid: itemUuid, handleClose: function () {
                        setItemUuid(undefined);
                    } })] })) })));
};
