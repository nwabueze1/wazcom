import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { clickAction, isNotRenderAnchor } from "./anchor";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import clx from "classnames";
import { Link } from "../../../core/Link/Link";
export var displaySections = function (mode, classes, sections, activeElement, handleClick, parentKey) {
    return sections.map(function (_a, index) {
        var name = _a.name, links = _a.links;
        var sectionId = (parentKey !== null && parentKey !== void 0 ? parentKey : "footer_sections.") + String(index);
        return (_jsxs("div", { className: clx(classes.footerSection, activeElement === sectionId && classes.activeElement), children: [_jsx("p", { className: classes.footerSectionTitle, onClick: function (e) {
                        e.stopPropagation();
                        clickAction(sectionId, mode, function () {
                            handleClick(sectionId);
                        });
                    }, children: name }), _jsx("div", { className: classes.footerLinks, children: links.map(function (_a, index) {
                        var text = _a.text, url = _a.url, icon = _a.icon;
                        var linkId = sectionId + ".links." + String(index);
                        return (_jsxs("div", { className: activeElement === linkId && classes.activeElement, style: { display: "flex" }, children: [icon && _jsx("span", { className: classes.footerSectionLinkIcon, children: renderIcon(icon) }), "\u00A0", isNotRenderAnchor(url, mode) ? (_jsx("p", { className: classes.footerSectionLink, onClick: function (e) {
                                        e.stopPropagation();
                                        clickAction(url, mode, function () {
                                            handleClick(mode === "view" ? url : linkId);
                                        });
                                    }, children: text })) : (_jsx(Link, { href: url, className: classes.footerSectionLink, children: text }))] }, index));
                    }) })] }, index));
    });
};
export var displayLinks = function (mode, classes, links, activeElement, handleClick, step) {
    return links.map(function (_a, index) {
        var text = _a.text, url = _a.url, icon = _a.icon;
        var linkId = "footer_links." + String(index + step);
        return (_jsxs("div", { className: activeElement === linkId && classes.activeElement, onClick: function (e) {
                e.stopPropagation();
                clickAction(url, mode, function () {
                    handleClick(mode === "view" ? url : linkId);
                });
            }, style: { display: "flex" }, children: [icon && _jsx("span", { className: classes.footerSectionLinkIcon, children: renderIcon(icon) }), " ", isNotRenderAnchor(url, mode) ? (_jsx("p", { className: classes.footerSectionLink, children: text })) : (_jsxs("a", { href: url, className: classes.footerSectionLink, children: [icon && renderIcon(icon), " ", text] }))] }, index));
    });
};
var renderIcon = function (icon) {
    switch (icon.toLowerCase()) {
        case "facebook":
            return _jsx(FaFacebookF, {});
        case "twitter":
            return _jsx(BsTwitter, {});
        case "instagram":
            return _jsx(FaInstagram, {});
        case "linkedin":
            return _jsx(RiLinkedinFill, {});
        case "youtube":
            return _jsx(RiYoutubeFill, {});
        default:
            return _jsx(FaFacebookF, {});
    }
};
