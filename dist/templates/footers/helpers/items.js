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
import clx from "classnames";
export var displaySections = function (mode, classes, sections, activeElement, handleClick) {
    return sections.map(function (_a, index) {
        var title = _a.title, links = _a.links;
        var sectionId = "footer_sections." + String(index);
        return (_jsxs("div", __assign({ className: clx(classes.footerSection, activeElement === sectionId && classes.activeElement) }, { children: [_jsx("p", __assign({ className: classes.footerSectionTitle, onClick: function () {
                        return clickAction(sectionId, mode, function () {
                            handleClick(sectionId);
                        });
                    } }, { children: title }), void 0), links.map(function (_a, index) {
                    var text = _a.text, url = _a.url;
                    var linkId = sectionId + ".links." + String(index);
                    return isNotRenderAnchor(url, mode) ? (_jsx("p", __assign({ className: clx(classes.footerSectionLink, activeElement === linkId && classes.activeElement), onClick: function () {
                            return clickAction(url, mode, function () {
                                handleClick(mode === "view" ? url : linkId);
                            });
                        } }, { children: text }), index)) : (_jsx("a", __assign({ href: url, className: classes.footerSectionLink }, { children: text }), index));
                })] }), index));
    });
};
export var displayLinks = function (mode, classes, links, activeElement, handleClick) {
    return links.map(function (_a, index) {
        var text = _a.text, url = _a.url;
        var linkId = "footer_links." + String(index);
        return isNotRenderAnchor(url, mode) ? (_jsx("p", __assign({ className: clx(classes.footerSectionLink, activeElement === linkId && classes.activeElement), onClick: function () {
                return clickAction(url, mode, function () {
                    handleClick(mode === "view" ? url : linkId);
                });
            } }, { children: text }), index)) : (_jsx("a", __assign({ href: url, className: classes.footerSectionLink }, { children: text }), index));
    });
};
