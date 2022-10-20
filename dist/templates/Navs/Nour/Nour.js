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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNourStyles } from "./styles";
import { Paper } from "@mui/material";
import clx from "classnames";
import { displaySocials, renderNavLink, renderNavLogo } from "../helpers";
export var Nour = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, handleClick = _a.handleClick, links = _a.links, socials = _a.socials, logo = _a.logo;
    var classes = useNourStyles();
    var _c = __read(useState(""), 2), activeElement = _c[0], setActiveElement = _c[1];
    var handleNavClick = function () {
        if (mode === "edit") {
            setActiveElement("nav");
            handleClick === null || handleClick === void 0 ? void 0 : handleClick("nav");
        }
    };
    var handleElementClick = function (element) {
        setActiveElement(element);
        handleClick === null || handleClick === void 0 ? void 0 : handleClick(element);
    };
    var displayLinks = function () {
        return links.map(function (link, index) {
            return renderNavLink(link, mode, index, classes, activeElement, handleElementClick);
        });
    };
    return (_jsx("div", __assign({ className: clx(classes.root, activeElement.toLowerCase() === "nav" && mode === "edit" && classes.activeElement), onClick: handleNavClick }, { children: _jsxs(Paper, __assign({ classes: { root: classes.paper }, className: classes.root, elevation: 3 }, { children: [renderNavLogo(mode, classes, activeElement, handleElementClick, logo), _jsx("div", __assign({ className: classes.linksContainer }, { children: displayLinks() }), void 0), _jsx("div", __assign({ className: classes.socialsContainer }, { children: displaySocials(socials, mode, classes, activeElement, handleElementClick) }), void 0)] }), void 0) }), void 0));
};
