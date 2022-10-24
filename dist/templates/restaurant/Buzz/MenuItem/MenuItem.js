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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useStyles } from "./styles";
import clsx from "clsx";
import { getCurrency, getFloatOrIntAmount, menuImagePlaceholder } from "utilities/restaurant";
export var Item = function (_a) {
    var onClick = _a.onClick, name = _a.name, price = _a.price, imageUrl = _a.image_url, status = _a.status, condition = _a.condition, description = _a.description;
    var currency = "$";
    var isOpen = true;
    var classes = useStyles({ isOpen: isOpen });
    return (_jsx(_Fragment, { children: _jsxs("div", __assign({ onClick: function () {
                isOpen && (onClick === null || onClick === void 0 ? void 0 : onClick());
            }, className: clsx(classes.root, status && classes.visible, condition && classes.noMargin) }, { children: [_jsx("div", { className: classes.imageWrapper, style: {
                        backgroundImage: "url(".concat(imageUrl !== null && imageUrl !== void 0 ? imageUrl : menuImagePlaceholder, ")"),
                    } }, void 0), _jsxs("div", __assign({ className: classes.content }, { children: [_jsxs("p", __assign({ className: classes.title }, { children: [name, " "] }), void 0), _jsx("p", __assign({ className: classes.description }, { children: description.length > 60
                                ? description.slice(0, 60) + "..."
                                : description }), void 0), _jsxs("span", __assign({ className: classes.amount }, { children: [getCurrency(currency), getFloatOrIntAmount(price)] }), void 0)] }), void 0)] }), void 0) }, void 0));
};
