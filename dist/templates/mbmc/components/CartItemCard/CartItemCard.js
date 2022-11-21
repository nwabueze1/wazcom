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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useCartItemCardStyles } from "./styles";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteIcon from "@mui/icons-material/Delete";
var CartItemCard = function () {
    var classes = useCartItemCardStyles();
    var _a = __read(useState(1), 2), count = _a[0], setCount = _a[1];
    var handleIncrement = function () {
        setCount(function (prev) { return prev + 1; });
    };
    var handleDecrement = function () {
        setCount(function (prev) { return (prev <= 1 ? 1 : prev - 1); });
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.topContent }, { children: [_jsx("div", __assign({ className: classes.imgContainer }, { children: _jsx("img", { className: classes.cartItemImg, src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/img2x.png", alt: "cart item image" }, void 0) }), void 0), _jsxs("div", __assign({ className: classes.content }, { children: [_jsx("p", __assign({ className: classes.title }, { children: "Crispy Coated Prawn" }), void 0), _jsx("p", __assign({ className: classes.description }, { children: "Lorem ipsum dolor sit amet, consetetur sadip snn g elitr, sed diam nonumy." }), void 0), _jsxs("div", __assign({ className: classes.priceContainer }, { children: [_jsx("div", __assign({ className: classes.price }, { children: _jsx("p", { children: "\u00A312.5" }, void 0) }), void 0), _jsxs("div", __assign({ className: classes.quantityCountContainer }, { children: [_jsx("div", __assign({ className: "".concat(classes.quantityButton, " ").concat(count == 1 && classes.disable), onClick: handleDecrement }, { children: _jsx(RemoveRoundedIcon, { className: classes.operationIcon }, void 0) }), void 0), _jsx("div", { children: count }, void 0), _jsx("div", __assign({ className: classes.quantityButton, onClick: handleIncrement }, { children: _jsx(AddRoundedIcon, { className: classes.operationIcon }, void 0) }), void 0)] }), void 0)] }), void 0)] }), void 0)] }), void 0), _jsx("div", __assign({ className: classes.bottomContent }, { children: _jsx("div", __assign({ className: "".concat(classes.deleteButton) }, { children: _jsx(DeleteIcon, { className: classes.deleteIcon }, void 0) }), void 0) }), void 0)] }), void 0));
};
export default CartItemCard;
