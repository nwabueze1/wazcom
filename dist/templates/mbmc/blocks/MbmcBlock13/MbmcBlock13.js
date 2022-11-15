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
import { useMbmcBlock13Styles } from "./styles";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { renderNavLink } from "../../../../templates/Navs/helpers";
import clx from "classnames";
import { FiShoppingCart } from "react-icons/fi";
export var MbmcBlock13 = function (_a) {
    var _b, _c;
    var _d, _e;
    var _f = _a.mode, mode = _f === void 0 ? "view" : _f, logo = _a.logo, links = _a.links, handleClick = _a.handleClick, ctas = _a.ctas, icons = _a.icons;
    var classes = useMbmcBlock13Styles();
    var _g = __read(useState(false), 2), openMenu = _g[0], setOpenMenu = _g[1];
    var _h = __read(useState(""), 2), activeElement = _h[0], setActiveElement = _h[1];
    var handleNavClick = function () {
        if (mode === "edit") {
            setActiveElement("nav");
            handleClick === null || handleClick === void 0 ? void 0 : handleClick("nav");
        }
    };
    var handleOpenMenu = function () {
        setOpenMenu(true);
    };
    var handleCloseMenu = function () {
        setOpenMenu(false);
    };
    var handleElementClick = function (element) {
        setActiveElement(element);
    };
    var displayLinks = function () {
        return links.map(function (link, index) {
            return renderNavLink(link, mode, index, classes, activeElement, handleElementClick);
        });
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: clx(classes.container, activeElement.toLowerCase() === "nav" &&
                        mode === "edit" &&
                        classes.activeElement), onClick: handleNavClick }, { children: [_jsx("div", __assign({ className: classes.logoContainer }, { children: _jsxs("a", __assign({ href: logo === null || logo === void 0 ? void 0 : logo.url, className: classes.logoLink }, { children: [_jsxs("div", __assign({ className: classes.desktopLogo }, { children: [_jsx("img", { src: (_d = logo === null || logo === void 0 ? void 0 : logo.src) === null || _d === void 0 ? void 0 : _d.desktop, alt: "", className: classes.desktopLogoImage }, void 0), _jsxs("p", __assign({ className: classes.desktopLogoText }, { children: [_jsx("span", { children: "mrbaker" }, void 0), _jsx("span", { children: "mrscook" }, void 0)] }), void 0)] }), void 0), _jsx("img", { src: (_e = logo === null || logo === void 0 ? void 0 : logo.src) === null || _e === void 0 ? void 0 : _e.mobile, alt: "", className: classes.mobilelogo }, void 0)] }), void 0) }), void 0), _jsx("div", __assign({ className: classes.menuList }, { children: displayLinks() }), void 0), _jsx("div", __assign({ className: classes.desktopIcons }, { children: icons === null || icons === void 0 ? void 0 : icons.map(function (item, idx) {
                                return (_jsxs("a", __assign({ href: item.url, className: classes.icon }, { children: [_jsx(FiShoppingCart, { className: classes.cartIcon, fontSize: 20 }, void 0), _jsx("div", __assign({ className: classes.badgeIcon }, { children: item.badgeCount }), void 0)] }), idx));
                            }) }), void 0), ctas === null || ctas === void 0 ? void 0 : ctas.map(function (item, idx) {
                            return (_jsx("div", __assign({ onClick: item.handleClick, className: classes.orderBtn }, { children: item.text }), idx));
                        }), _jsxs("div", __assign({ className: classes.menuOptionMobile }, { children: [_jsx("div", __assign({ className: classes.mobileIcons }, { children: icons === null || icons === void 0 ? void 0 : icons.map(function (item, idx) {
                                        return (_jsxs("a", __assign({ href: item.url, className: classes.icon }, { children: [_jsx(FiShoppingCart, { className: classes.cartIcon, fontSize: 20 }, void 0), _jsx("div", __assign({ className: classes.badgeIcon }, { children: item.badgeCount }), void 0)] }), idx));
                                    }) }), void 0), _jsx(AiOutlineMenu, { size: 34, onClick: handleOpenMenu }, void 0)] }), void 0)] }), void 0) }), void 0), _jsx("div", __assign({ className: clx(classes.openNav, (_b = {}, _b[classes.showMenu] = openMenu, _b)) }, { children: _jsxs("div", __assign({ className: classes.expandedMenuOptionMobile }, { children: [_jsx(IoMdClose, { size: 34, onClick: handleCloseMenu }, void 0), _jsxs("div", __assign({ className: classes.expandedNavContentRightSide }, { children: [displayLinks(), ctas === null || ctas === void 0 ? void 0 : ctas.map(function (item, idx) {
                                    return (_jsx("div", __assign({ onClick: item.handleClick, className: classes.mobileOrderBtn }, { children: item.text }), idx));
                                })] }), void 0)] }), void 0) }), void 0), _jsx("div", { className: clx(classes.overlay, (_c = {}, _c[classes.showOverlay] = openMenu, _c)), onClick: handleCloseMenu }, void 0)] }, void 0));
};
