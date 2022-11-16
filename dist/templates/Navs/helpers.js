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
import { jsx as _jsx } from "react/jsx-runtime";
import { AiOutlinePicture } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import clx from "classnames";
export var renderNavLink = function (_a, mode, index, classes, activeElement, handleClick) {
    var url = _a.url, text = _a.text;
    var id = "nav_links." + String(index);
    return isNotRenderAnchor(url, mode) ? (_jsx("p", __assign({ className: clx(classes.link, id.toLowerCase() === activeElement && mode === "edit" && classes.activeElement), onClick: function (e) {
            e.stopPropagation();
            clickAction(url, mode, function () {
                handleClick === null || handleClick === void 0 ? void 0 : handleClick(mode === "edit" ? id : url);
            });
        } }, { children: text }), index)) : (_jsx("a", __assign({ className: classes.link, target: "_blank", rel: "noopener noreferrer", href: url }, { children: text }), index));
};
var hivedeckLogo = "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/logo/hivedeck_logo.svg";
var isNotRenderAnchor = function (url, mode) {
    return (url === null || url === void 0 ? void 0 : url.startsWith("/")) || url === "#" || mode === "edit";
};
var clickAction = function (url, mode, handleClick) {
    if (mode === "edit" || (mode === "view" && url !== "#"))
        handleClick === null || handleClick === void 0 ? void 0 : handleClick();
};
export var renderNavLogo = function (mode, classes, activeElement, handleClick, logo) {
    var _a, _b;
    return (_jsx(LogoWrapper, __assign({ url: (_a = logo === null || logo === void 0 ? void 0 : logo.url) !== null && _a !== void 0 ? _a : "", mode: mode, handleClick: handleClick }, { children: mode === "view" ? (_jsx("img", { src: (_b = logo === null || logo === void 0 ? void 0 : logo.src) !== null && _b !== void 0 ? _b : hivedeckLogo, className: logo ? classes.logo : classes.hivedeckLogo }, void 0)) : (logo === null || logo === void 0 ? void 0 : logo.src) ? (_jsx("img", { src: logo === null || logo === void 0 ? void 0 : logo.src, className: clx(classes.logo, activeElement === "nav_logo" && classes.activeElement) }, void 0)) : (_jsx(AiOutlinePicture, { className: clx(classes.logo, activeElement === "nav_logo" && classes.activeElement) }, void 0)) }), void 0));
};
var LogoWrapper = function (_a) {
    var url = _a.url, mode = _a.mode, children = _a.children, handleClick = _a.handleClick;
    if (isNotRenderAnchor(url, mode)) {
        return (_jsx("div", __assign({ onClick: function (e) {
                e.stopPropagation();
                clickAction(url, mode, function () {
                    handleClick === null || handleClick === void 0 ? void 0 : handleClick(mode === "view" ? url : "nav_logo");
                });
            }, style: { cursor: "pointer" } }, { children: children }), void 0));
    }
    return (_jsx("a", __assign({ href: url, target: "_blank", rel: "noopener noreferrer" }, { children: children }), void 0));
};
export var displaySocials = function (socials, mode, classes, activeElement, handleClick) {
    return socials === null || socials === void 0 ? void 0 : socials.map(function (_a, index) {
        var type = _a.type, url = _a.url;
        var id = "nav_socials." + String(index);
        if (mode === "edit") {
            return (_jsx("div", __assign({ className: clx(classes.socialIntegration, activeElement === id && mode === "edit" && classes.activeElement), onClick: function (e) {
                    e.stopPropagation();
                    handleClick(id);
                }, style: { cursor: "pointer" } }, { children: renderSocialIcon(type) }), void 0));
        }
        return (_jsx("a", __assign({ className: classes.socialIntegration, target: "_blank", rel: "noopener noreferrer", href: url }, { children: renderSocialIcon(type) }), index));
    });
};
var renderSocialIcon = function (type) {
    switch (type) {
        case "FACEBOOK":
            return _jsx(FaFacebookF, {}, void 0);
        case "TWITTER":
            return _jsx(BsTwitter, {}, void 0);
        default:
            return _jsx(FaFacebookF, {}, void 0);
    }
};
