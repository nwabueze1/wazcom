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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { clickAction, isNotRenderAnchor } from "./anchor";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import clx from "classnames";
export var displaySections = function (mode, classes, sections, activeElement, handleClick, parentKey) {
    return sections.map(function (_a, index) {
        var name = _a.name, links = _a.links;
        var sectionId = (parentKey !== null && parentKey !== void 0 ? parentKey : "footer_sections.") + String(index);
        return (_jsxs("div", __assign({ className: clx(classes.footerSection, activeElement === sectionId && classes.activeElement) }, { children: [_jsx("p", __assign({ className: classes.footerSectionTitle, onClick: function (e) {
                        e.stopPropagation();
                        clickAction(sectionId, mode, function () {
                            handleClick(sectionId);
                        });
                    } }, { children: name }), void 0), _jsx("div", __assign({ className: classes.footerLinks }, { children: links.map(function (_a, index) {
                        var text = _a.text, url = _a.url, icon = _a.icon;
                        var linkId = sectionId + ".links." + String(index);
                        return (_jsxs("div", __assign({ className: activeElement === linkId && classes.activeElement, onClick: function (e) {
                                e.stopPropagation();
                                clickAction(url, mode, function () {
                                    handleClick(mode === "view" ? url : linkId);
                                });
                            }, style: { display: "flex" } }, { children: [icon && (_jsx("span", __assign({ className: classes.footerSectionLinkIcon }, { children: renderIcon(icon) }), void 0)), " ", isNotRenderAnchor(url, mode) ? (_jsx("p", __assign({ className: classes.footerSectionLink }, { children: text }), void 0)) : (_jsxs("a", __assign({ href: url, className: classes.footerSectionLink }, { children: [icon && renderIcon(icon), " ", text] }), void 0))] }), index));
                    }) }), void 0)] }), index));
    });
};
export var displayLinks = function (mode, classes, links, activeElement, handleClick, step) {
    return links.map(function (_a, index) {
        var text = _a.text, url = _a.url, icon = _a.icon;
        var linkId = "footer_links." + String(index + step);
        return (_jsxs("div", __assign({ className: activeElement === linkId && classes.activeElement, onClick: function (e) {
                e.stopPropagation();
                clickAction(url, mode, function () {
                    handleClick(mode === "view" ? url : linkId);
                });
            }, style: { display: "flex" } }, { children: [icon && _jsx("span", __assign({ className: classes.footerSectionLinkIcon }, { children: renderIcon(icon) }), void 0), " ", isNotRenderAnchor(url, mode) ? (_jsx("p", __assign({ className: classes.footerSectionLink }, { children: text }), void 0)) : (_jsxs("a", __assign({ href: url, className: classes.footerSectionLink }, { children: [icon && renderIcon(icon), " ", text] }), void 0))] }), index));
    });
};
var renderIcon = function (icon) {
    switch (icon.toLowerCase()) {
        case "facebook":
            return _jsx(FaFacebookF, {}, void 0);
        case "twitter":
            return _jsx(BsTwitter, {}, void 0);
        case "instagram":
            return _jsx(FaInstagram, {}, void 0);
        case "linkedin":
            return _jsx(RiLinkedinFill, {}, void 0);
        case "youtube":
            return _jsx(RiYoutubeFill, {}, void 0);
        default:
            return _jsx(FaFacebookF, {}, void 0);
    }
};
