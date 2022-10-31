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
import { Copyright } from "../Copyright";
import { displayLogo, displaySections, displaySocials } from "../helpers";
import { useNoirStyles } from "./styles";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { ImInstagram, ImYoutube } from "react-icons/im";
export var Noir = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, handleClick = _a.handleClick, logo = _a.logo, socials = _a.socials, links = _a.links;
    var _c = __read(useState(""), 2), activeElement = _c[0], setActiveElement = _c[1];
    var classes = useNoirStyles();
    var socialIcons = {
        FACEBOOK: _jsx(FaFacebookSquare, { className: classes.footerSocialIcon }, void 0),
        TWITTER: _jsx(BsTwitter, { className: classes.footerSocialIcon }, void 0),
        LINKEDIN: _jsx(BsLinkedin, { className: classes.footerSocialIcon }, void 0),
        YOUTUBE: _jsx(ImYoutube, { className: classes.footerSocialIcon }, void 0),
        INSTAGRAM: _jsx(ImInstagram, { className: classes.footerSocialIcon }, void 0),
    };
    var handleElementClick = function (element) {
        setActiveElement(element);
        handleClick === null || handleClick === void 0 ? void 0 : handleClick(element);
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.footerContent }, { children: [_jsxs("div", __assign({ className: classes.footerLogoSocials }, { children: [displayLogo(mode, classes, activeElement, handleElementClick, logo), _jsx("div", __assign({ className: classes.footerSocials }, { children: displaySocials(mode, socialIcons, socials !== null && socials !== void 0 ? socials : [], classes, activeElement, handleElementClick) }), void 0)] }), void 0), displaySections(mode, classes, links, activeElement, handleElementClick)] }), void 0), _jsx(Copyright, {}, void 0)] }), void 0));
};
