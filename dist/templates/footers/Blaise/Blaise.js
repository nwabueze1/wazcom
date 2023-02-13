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
import clx from "classnames";
export var Blaise = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, logo = _a.logo, socials = _a.socials, links = _a.links, handleClick = _a.handleClick;
    var _c = __read(useState(""), 2), activeElement = _c[0], setActiveElement = _c[1];
    var classes = useBlaiseStyles();
    var renderSocialIcon = function (Icon) { return (_jsx("div", __assign({ className: classes.footerSocialParent }, { children: Icon }))); };
    var midIndex = links.length > 1 ? Math.ceil(links.length / 2) : 1;
    var socialIcons = {
        FACEBOOK: renderSocialIcon(_jsx(ImFacebook, { className: classes.footerSocialIcon })),
        TWITTER: renderSocialIcon(_jsx(BsTwitter, { className: classes.footerSocialIcon })),
        INSTAGRAM: renderSocialIcon(_jsx(FaInstagram, { className: classes.footerSocialIcon })),
        LINKEDIN: renderSocialIcon(_jsx(RiLinkedinFill, { className: classes.footerSocialIcon })),
        YOUTUBE: renderSocialIcon(_jsx(RiYoutubeFill, { className: classes.footerSocialIcon })),
    };
    var handleFooterClick = function () {
        if (mode === "edit") {
            setActiveElement("footer");
            handleClick === null || handleClick === void 0 ? void 0 : handleClick("footer");
        }
    };
    var handleElementClick = function (element) {
        setActiveElement(element);
        handleClick === null || handleClick === void 0 ? void 0 : handleClick(element);
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, activeElement.toLowerCase() === "footer" &&
            mode === "edit" &&
            classes.activeElement), onClick: handleFooterClick }, { children: [_jsxs("div", __assign({ className: classes.footerContent }, { children: [_jsx("div", __assign({ className: classes.footerSocials }, { children: displaySocials(mode, socialIcons, socials !== null && socials !== void 0 ? socials : [], classes, activeElement, handleElementClick) })), _jsxs("div", __assign({ className: classes.footerSection }, { children: [_jsx("div", __assign({ className: classes.footerSectionLinks }, { children: displayLinks(mode, classes, links.slice(0, midIndex), activeElement, handleElementClick, 0) })), _jsx("div", __assign({ className: classes.footerSectionLinks }, { children: displayLinks(mode, classes, links.slice(midIndex), activeElement, handleElementClick, midIndex) }))] })), displayLogo(mode, classes, activeElement, handleElementClick, logo)] })), _jsx(Copyright, {})] })));
};
