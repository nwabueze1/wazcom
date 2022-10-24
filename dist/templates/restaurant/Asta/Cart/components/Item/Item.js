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
import { useStyles } from "./styles";
import clsx from "clsx";
import { getCurrency, getFloatOrIntAmount, menuImagePlaceholder, } from "../../../../../../utilities";
import { IoIosClose } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { parseFloat } from "../../helper";
export var Item = function (_a) {
    var setCartItems = _a.setCartItems, data = _a.data;
    var currency = "$";
    var isOpen = true;
    var classes = useStyles({ isOpen: isOpen });
    var _b = data.menuItem, name = _b.name, uuid = _b.uuid, image_url = _b.image_url, status = _b.status, description = _b.description, price = _b.price;
    var handleChangeQuantity = function (uuid, method) {
        setCartItems(function (cartItems) {
            var updatedtCartItems = cartItems.map(function (cartItem) {
                if (cartItem.menuItem.uuid === uuid) {
                    var quantity = method === "add"
                        ? +cartItem.quantity + 1
                        : +cartItem.quantity > 1
                            ? +cartItem.quantity - 1
                            : 1;
                    return __assign(__assign({}, cartItem), { quantity: quantity });
                }
                return cartItem;
            });
            return updatedtCartItems;
        });
    };
    var handleRemove = function (uuid) {
        setCartItems(function (cartItems) {
            return cartItems.filter(function (cartItem) { return cartItem.menuItem.uuid !== uuid; });
        });
    };
    return (_jsxs("div", __assign({ className: clsx(classes.root, status && classes.visible) }, { children: [_jsx("div", { className: classes.imageWrapper, style: {
                    backgroundImage: "url(".concat(image_url !== null && image_url !== void 0 ? image_url : menuImagePlaceholder, ")"),
                } }, void 0), _jsxs("div", __assign({ className: classes.content }, { children: [_jsxs("div", { children: [_jsxs("p", __assign({ className: classes.title }, { children: [name, " "] }), void 0), _jsx("p", __assign({ className: classes.description }, { children: description.length > 30
                                    ? description.slice(0, 30) + "..."
                                    : description }), void 0)] }, void 0), _jsxs("div", __assign({ className: classes.optionsGroup }, { children: [_jsxs("div", __assign({ className: classes.amount }, { children: [getCurrency(currency), getFloatOrIntAmount(price * parseFloat(data.quantity))] }), void 0), _jsxs("div", __assign({ className: classes.optionsContainer }, { children: [_jsx(AiOutlineMinusCircle, { className: classes.icon, onClick: function () {
                                            handleChangeQuantity(uuid, "remove");
                                        } }, void 0), _jsx("p", { children: data.quantity }, void 0), _jsx(IoAddCircleOutline, { className: classes.icon, onClick: function () {
                                            handleChangeQuantity(uuid, "add");
                                        } }, void 0)] }), void 0), _jsx("div", __assign({ className: classes.closeIconContainer, onClick: function () { return handleRemove(uuid); } }, { children: _jsx(IoIosClose, { size: 24, className: classes.closeIcon }, void 0) }), void 0)] }), void 0)] }), void 0)] }), void 0));
};
