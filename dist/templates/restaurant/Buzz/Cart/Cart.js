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
import { emptyCartImagePlaceholder } from "utilities/restaurant";
import { useCartStyles } from ".";
export var Cart = function () {
    var classes = useCartStyles();
    var displayEmptyCart = function () { return (_jsx("div", __assign({ className: classes.emptyCartSection }, { children: _jsxs("div", __assign({ className: classes.emptyCartContainer }, { children: [_jsx("div", __assign({ className: classes.imgContainer }, { children: _jsx("img", { src: emptyCartImagePlaceholder, className: classes.img }, void 0) }), void 0), _jsx("p", __assign({ className: classes.cartText }, { children: "Your cart is empty" }), void 0), _jsx("div", __assign({ className: classes.cartEmpty }, { children: _jsx("p", { children: "Add a menu item to populate your cart" }, void 0) }), void 0)] }), void 0) }), void 0)); };
    return _jsx("div", __assign({ className: classes.root }, { children: displayEmptyCart() }), void 0);
};
