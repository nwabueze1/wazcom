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
import { renderNavLink, renderNavLogo } from "../../../../templates/Navs/helpers";
import clx from "classnames";
import { FiShoppingCart } from "react-icons/fi";
import { renderCtas } from "../../utilities";
export var MbmcBlock13 = function (_a) {
    var _b, _c;
    var _d = _a.mode, mode = _d === void 0 ? "view" : _d, _e = _a.activeElement, activeElement = _e === void 0 ? "" : _e, index = _a.index, logo = _a.logo, links = _a.links, handleClick = _a.handleClick, ctas = _a.ctas, numCartItems = _a.numCartItems;
    var classes = useMbmcBlock13Styles();
    var _f = __read(useState(false), 2), openMenu = _f[0], setOpenMenu = _f[1];
    var handleOpenMenu = function () {
        setOpenMenu(true);
    };
    var handleCloseMenu = function () {
        setOpenMenu(false);
    };
    var handleElementClick = function (element) {
        handleClick === null || handleClick === void 0 ? void 0 : handleClick(element);
    };
    var displayLinks = function () {
        return links.map(function (link, linkIndex) {
            return renderNavLink(link, mode, linkIndex, classes, activeElement, handleElementClick, !index && index !== 0 ? undefined : "".concat(String(index), ".links."));
        });
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: classes.container }, { children: [renderNavLogo(mode, classes, activeElement, handleElementClick, logo, !index && index !== 0 ? undefined : "".concat(String(index), ".logo")), _jsxs("div", __assign({ className: classes.menuList }, { children: [displayLinks(), _jsxs("p", __assign({ className: clx(classes.icon, classes.link), onClick: function () {
                                        handleElementClick("/cart");
                                    } }, { children: [_jsx(FiShoppingCart, { className: classes.cartIcon, fontSize: 20 }, void 0), _jsx("span", __assign({ className: classes.badgeIcon }, { children: numCartItems }), void 0)] }), void 0), renderCtas(ctas !== null && ctas !== void 0 ? ctas : [], mode, !index && index !== 0 ? "nav" : "".concat(String(index)), handleClick, activeElement, classes.ctaDesktop)] }), void 0), _jsxs("div", __assign({ className: classes.menuOptionMobile }, { children: [_jsxs("p", __assign({ className: clx(classes.icon, classes.link), onClick: function () {
                                        handleElementClick("/cart");
                                    } }, { children: [_jsx(FiShoppingCart, { className: classes.cartIcon, fontSize: 20 }, void 0), _jsx("span", __assign({ className: classes.badgeIcon }, { children: numCartItems }), void 0)] }), void 0), _jsx(AiOutlineMenu, { size: 34, onClick: handleOpenMenu }, void 0)] }), void 0)] }), void 0) }), void 0), _jsx("div", __assign({ className: clx(classes.openNav, (_b = {}, _b[classes.showMenu] = openMenu, _b)) }, { children: _jsxs("div", __assign({ className: classes.expandedMenuOptionMobile }, { children: [_jsx(IoMdClose, { size: 34, onClick: handleCloseMenu }, void 0), _jsxs("div", __assign({ className: classes.expandedNavContentRightSide }, { children: [displayLinks(), renderCtas(ctas !== null && ctas !== void 0 ? ctas : [], mode, !index && index !== 0 ? "nav" : "".concat(String(index)), handleClick, activeElement, classes.ctaMobile)] }), void 0)] }), void 0) }), void 0), _jsx("div", { className: clx(classes.overlay, (_c = {}, _c[classes.showOverlay] = openMenu, _c)), onClick: handleCloseMenu }, void 0)] }, void 0));
};
