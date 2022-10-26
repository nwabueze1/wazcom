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
import { useBlaiseStyles } from "./styles";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import { displayLinks, displayLogo, displaySocials } from "../helpers";
import { Copyright } from "../Copyright";
export var Blaise = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, logo = _a.logo, socials = _a.socials, items = _a.items, handleClick = _a.handleClick;
    var _c = __read(useState(""), 2), activeElement = _c[0], setActiveElement = _c[1];
    var classes = useBlaiseStyles();
    var renderSocialIcon = function (Icon) { return (_jsx("div", __assign({ className: classes.footerSocialParent }, { children: Icon }), void 0)); };
    var midIndex = items.length > 1 ? Math.ceil(items.length / 2) : 1;
    var socialIcons = {
        FACEBOOK: renderSocialIcon(_jsx(ImFacebook, { className: classes.footerSocialIcon }, void 0)),
        TWITTER: renderSocialIcon(_jsx(BsTwitter, { className: classes.footerSocialIcon }, void 0)),
        INSTAGRAM: renderSocialIcon(_jsx(FaInstagram, { className: classes.footerSocialIcon }, void 0)),
        LINKEDIN: renderSocialIcon(_jsx(RiLinkedinFill, { className: classes.footerSocialIcon }, void 0)),
        YOUTUBE: renderSocialIcon(_jsx(RiYoutubeFill, { className: classes.footerSocialIcon }, void 0)),
    };
    var handleElementClick = function (element) {
        setActiveElement(element);
        handleClick === null || handleClick === void 0 ? void 0 : handleClick(element);
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.footerContent }, { children: [_jsx("div", __assign({ className: classes.footerSocials }, { children: displaySocials(mode, socialIcons, socials !== null && socials !== void 0 ? socials : [], classes, activeElement, handleElementClick) }), void 0), _jsxs("div", __assign({ className: classes.footerSection }, { children: [_jsx("div", __assign({ className: classes.footerSectionLinks }, { children: displayLinks(mode, classes, items.slice(0, midIndex), activeElement, handleElementClick) }), void 0), _jsx("div", __assign({ className: classes.footerSectionLinks }, { children: displayLinks(mode, classes, items.slice(midIndex), activeElement, handleElementClick) }), void 0)] }), void 0), displayLogo(mode, classes, activeElement, handleElementClick, logo)] }), void 0), _jsx(Copyright, {}, void 0)] }), void 0));
};
