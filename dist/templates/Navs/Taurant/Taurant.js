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
import { useTaurantStyles } from "./styles";
import { Paper } from "@mui/material";
import { displaySocials, renderNavLink, renderNavLogo } from "../helpers";
export var Taurant = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, links = _a.links, socials = _a.socials, handleClick = _a.handleClick, logo = _a.logo;
    var classes = useTaurantStyles();
    var displayLinks = function () {
        return links.map(function (link, index) { return renderNavLink(link, mode, index, classes, handleClick); });
    };
    return (_jsxs("div", __assign({ className: classes.root, onClick: function () {
            mode === "edit" && (handleClick === null || handleClick === void 0 ? void 0 : handleClick("nav"));
        } }, { children: [_jsx("head", { children: _jsx("link", { href: "https://fonts.googleapis.com/css2?family=Bitter:wght@500&family=Inter:wght@400;600&family=Merriweather&display=swap", rel: "stylesheet" }, void 0) }, void 0), _jsxs(Paper, __assign({ classes: { root: classes.paper }, className: classes.root, elevation: 3 }, { children: [renderNavLogo(mode, classes, handleClick, logo), _jsxs("div", __assign({ className: classes.content }, { children: [_jsx("div", __assign({ className: classes.linksContainer }, { children: displayLinks() }), void 0), _jsx("div", __assign({ className: classes.socialsContainer }, { children: displaySocials(socials, mode, classes, handleClick) }), void 0)] }), void 0)] }), void 0)] }), void 0));
};
