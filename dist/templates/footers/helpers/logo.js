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
import { AiOutlinePicture } from "react-icons/ai";
import { clickAction, isNotRenderAnchor } from "./anchor";
export var displayLogo = function (mode, classes, activeElement, handleClick, logo, parentKey) {
    var _a;
    var url = (_a = logo === null || logo === void 0 ? void 0 : logo.url) !== null && _a !== void 0 ? _a : "#";
    return (_jsx(LogoWrapper, __assign({ mode: mode, url: url, handleClick: handleClick, className: activeElement === (parentKey !== null && parentKey !== void 0 ? parentKey : "footer_logo") ? classes.activeElement : undefined, parentKey: parentKey }, { children: _jsx(Logo, __assign({ mode: mode, classes: classes }, logo), void 0) }), void 0));
};
var hivedeckLogo = "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/logo/hivedeck_logo.svg";
var Logo = function (_a) {
    var mode = _a.mode, src = _a.src, text = _a.text, classes = _a.classes;
    return (_jsxs("div", __assign({ className: classes.footerLogoParent }, { children: [mode === "edit" && !src ? (_jsx(AiOutlinePicture, { className: classes.footerLogo }, void 0)) : (_jsx("img", { src: src !== null && src !== void 0 ? src : hivedeckLogo, alt: "", className: classes.footerLogo }, void 0)), text && _jsx("p", __assign({ className: classes.footerLogoText }, { children: text }), void 0)] }), void 0));
};
var LogoWrapper = function (_a) {
    var mode = _a.mode, url = _a.url, children = _a.children, handleClick = _a.handleClick, parentKey = _a.parentKey, className = _a.className;
    if (isNotRenderAnchor(url, mode))
        return (_jsx("div", __assign({ onClick: function (e) {
                e.stopPropagation();
                clickAction(url, mode, function () {
                    handleClick(mode === "view" ? url : parentKey !== null && parentKey !== void 0 ? parentKey : "footer_logo");
                });
            }, className: className }, { children: children }), void 0));
    return (_jsx("a", __assign({ href: url, target: url.startsWith("/") ? "_self" : "_blank", rel: "noreferrer noopener" }, { children: children }), void 0));
};
