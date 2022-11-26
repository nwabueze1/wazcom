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
import { useEmptyCartStyles } from "./styles";
export var EmptyCart = function () {
    var classes = useEmptyCartStyles();
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/Cart+empty%403x.webp", alt: "Empty Cart", className: classes.emptyCartImage }, void 0), _jsxs("div", __assign({ className: classes.emptyCartMessage }, { children: [_jsx("p", __assign({ className: classes.emptyCartHeading }, { children: "Your Cart Is Empty" }), void 0), _jsx("p", __assign({ className: classes.emptyCartText }, { children: "You are are yet to add any item to cart, check out our awesome menu and place your order now." }), void 0)] }), void 0)] }), void 0));
};
