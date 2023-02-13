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
import { Link } from "../../components";
import { renderCtas } from "../../utilities";
import Cookies from "universal-cookie";
export var MbmcBlock13 = function (_a) {
    var _b, _c;
    var _d, _e, _f;
    var _g = _a.mode, mode = _g === void 0 ? "view" : _g, _h = _a.activeElement, activeElement = _h === void 0 ? "" : _h, index = _a.index, logo = _a.logo, links = _a.links, handleClick = _a.handleClick, ctas = _a.ctas, contextProps = _a.contextProps, site_uuid = _a.site_uuid;
    var classes = useMbmcBlock13Styles();
    var _j = __read(useState(false), 2), openMenu = _j[0], setOpenMenu = _j[1];
    var cartItemCount = (_f = (_d = contextProps === null || contextProps === void 0 ? void 0 : contextProps.cartItemCount) !== null && _d !== void 0 ? _d : ((_e = new Cookies().get("cartItemCount")) !== null && _e !== void 0 ? _e : {})[site_uuid]) !== null && _f !== void 0 ? _f : 0;
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
    var CartLink = function () { return (_jsxs(Link, __assign({ className: clx(classes.icon, classes.link), target: "_self", href: mode === "edit" ? "#" : "/cart" }, { children: [_jsx(FiShoppingCart, { className: classes.cartIcon, fontSize: 20 }), cartItemCount > 0 && _jsx("span", __assign({ className: classes.badgeIcon }, { children: cartItemCount }))] }))); };
    return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: classes.container }, { children: [renderNavLogo(mode, classes, activeElement, handleElementClick, logo, !index && index !== 0 ? undefined : "".concat(String(index), ".logo")), _jsxs("div", __assign({ className: classes.menuList }, { children: [displayLinks(), _jsx(CartLink, {}), renderCtas(ctas !== null && ctas !== void 0 ? ctas : [], mode, !index && index !== 0 ? "nav" : "".concat(String(index)), handleClick, activeElement, classes.ctaDesktop)] })), _jsxs("div", __assign({ className: classes.menuOptionMobile }, { children: [_jsx(CartLink, {}), _jsx(AiOutlineMenu, { size: 34, onClick: handleOpenMenu })] }))] })) })), _jsx("div", __assign({ className: clx(classes.openNav, (_b = {}, _b[classes.showMenu] = openMenu, _b)) }, { children: _jsxs("div", __assign({ className: classes.expandedMenuOptionMobile }, { children: [_jsx(IoMdClose, { size: 34, onClick: handleCloseMenu }), _jsxs("div", __assign({ className: classes.expandedNavContentRightSide }, { children: [displayLinks(), renderCtas(ctas !== null && ctas !== void 0 ? ctas : [], mode, !index && index !== 0 ? "nav" : "".concat(String(index)), handleClick, activeElement, classes.ctaMobile)] }))] })) })), _jsx("div", { className: clx(classes.overlay, (_c = {}, _c[classes.showOverlay] = openMenu, _c)), onClick: handleCloseMenu })] }));
};
