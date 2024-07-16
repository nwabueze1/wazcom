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
import { useSevynStyles } from "./styles";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import clx from "classnames";
export var Sevyn = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, socials = _a.socials, logo = _a.logo, handleClick = _a.handleClick, links = _a.links;
    var _c = __read(useState(""), 2), activeElement = _c[0], setActiveElement = _c[1];
    var classes = useSevynStyles();
    var renderSocialIcon = function (Icon) { return (_jsx("div", { className: classes.footerSocialParent, children: Icon })); };
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
    return (_jsxs("div", { className: clx(classes.root, activeElement.toLowerCase() === "footer" && mode === "edit" && classes.activeElement), onClick: handleFooterClick, children: [_jsxs("div", { className: classes.footerContent, children: [displayLogo(mode, classes, activeElement, handleElementClick, logo), _jsx("div", { className: classes.footerSections, children: displaySections(mode, classes, links, activeElement, handleElementClick) }), _jsx("div", { className: classes.footerSocials, children: displaySocials(mode, socialIcons, socials !== null && socials !== void 0 ? socials : [], classes, activeElement, handleElementClick) })] }), _jsx(Copyright, {})] }));
};
