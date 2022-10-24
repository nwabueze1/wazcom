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
import { useRestaurantDetailsStyles } from "./styles";
import { GoMail } from "react-icons/go";
import { BiPhone } from "react-icons/bi";
import { getCurrency, menuImagePlaceholder } from "utilities/restaurant";
export var RestaurantDetails = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var restaurant = _a.restaurant;
    var classes = useRestaurantDetailsStyles();
    return (_jsxs("div", __assign({ className: classes.detailsContainer }, { children: [_jsx("div", __assign({ className: classes.logoContainer }, { children: _jsx("div", __assign({ className: classes.logoWrapper }, { children: _jsx("img", { src: (_b = restaurant.restaurant.cover_image) !== null && _b !== void 0 ? _b : menuImagePlaceholder, alt: "", className: classes.logoImg }, void 0) }), void 0) }), void 0), _jsxs("div", __assign({ className: classes.locationParent }, { children: [_jsxs("p", __assign({ className: classes.restaurantLocation }, { children: [_jsxs("p", { children: [(_c = restaurant.restaurant) === null || _c === void 0 ? void 0 : _c.name, "\u00A0"] }, void 0), "-", _jsxs("span", { children: ["\u00A0", (_e = (_d = restaurant.restaurant) === null || _d === void 0 ? void 0 : _d.location) === null || _e === void 0 ? void 0 : _e.state] }, void 0)] }), void 0), _jsxs("div", __assign({ className: classes.restaurantDetails }, { children: [_jsxs("div", __assign({ className: classes.openingTime }, { children: [_jsx("span", { className: classes.bullet }, void 0), _jsxs("p", { children: ["Open: ", restaurant.restaurant.openingTimes] }, void 0)] }), void 0), _jsxs("div", __assign({ className: classes.openingDetails }, { children: [_jsx("span", { className: classes.bullet }, void 0), _jsxs("p", { children: ["Delivery fee:", " ", getCurrency((_f = restaurant.restaurant.bank_info) === null || _f === void 0 ? void 0 : _f.currency), " ", (_g = restaurant.restaurant.bank_info) === null || _g === void 0 ? void 0 : _g.delivery_fee] }, void 0)] }), void 0), _jsxs("div", __assign({ className: classes.openingDetails }, { children: [_jsx(GoMail, { className: classes.detailsIcon }, void 0), _jsx("a", __assign({ className: classes.mailLink, href: "mailto:".concat(restaurant.restaurant.email) }, { children: restaurant.restaurant.email }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.openingDetails }, { children: [_jsx(BiPhone, { className: classes.detailsIcon }, void 0), _jsx("a", __assign({ href: "tel:{restaurant.phone}", className: classes.mailLink }, { children: restaurant.restaurant.phone }), void 0)] }), void 0)] }), void 0)] }), void 0)] }), void 0));
};
