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
import { useServiceCardStyles } from "./styles";
import clsx from "clsx";
import { menuImagePlaceholder } from "utilities/restaurant";
import { MbmcButton } from "../MbmcButton/MbmcButton";
export var MbmcMenuCard = function (_a) {
    var onClick = _a.onClick, name = _a.name, imageUrl = _a.image_url, description = _a.description, price = _a.price, startPrice = _a.startPrice;
    var currency = "$";
    var isOpen = true;
    var classes = useServiceCardStyles({ isOpen: isOpen });
    return (_jsxs("div", __assign({ onClick: function () {
            isOpen && (onClick === null || onClick === void 0 ? void 0 : onClick());
        }, className: clsx(classes.root, classes.visible) }, { children: [_jsx("div", { className: classes.imageWrapper, style: {
                    backgroundImage: "url(".concat(imageUrl !== null && imageUrl !== void 0 ? imageUrl : menuImagePlaceholder, ")"),
                } }, void 0), _jsxs("div", __assign({ className: classes.content }, { children: [_jsxs("div", __assign({ className: classes.menuHeaderContainer }, { children: [_jsxs("p", __assign({ className: classes.title }, { children: [name, " "] }), void 0), startPrice ? (_jsxs("p", __assign({ className: classes.price }, { children: [currency, price, "", " - ", "", currency, price] }), void 0)) : (_jsxs("p", __assign({ className: classes.price }, { children: [currency, price] }), void 0))] }), void 0), _jsx("p", __assign({ className: classes.description }, { children: description }), void 0), _jsx(MbmcButton, __assign({ className: classes.menuButton, bgColor: "#F25430" }, { children: "Order now" }), void 0)] }), void 0)] }), void 0));
};
