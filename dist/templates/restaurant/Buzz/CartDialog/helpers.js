export var changeQuantity = function (add, quantity, setQuantity) {
    if (add) {
        setQuantity(quantity + 1);
        return;
    }
    if (quantity > 1) {
        setQuantity(quantity - 1);
    }
};
export var parseCartItem = function (cart, cartItemId) {
    var _a;
    if (!cartItemId)
        return [1, []];
    var cartItem = (_a = cart === null || cart === void 0 ? void 0 : cart.cartItems) === null || _a === void 0 ? void 0 : _a.find(function (item) { return item.id.toString() === cartItemId.toString(); });
    if (!cartItem)
        return [1, []];
    var options = (cartItem === null || cartItem === void 0 ? void 0 : cartItem.options) ? JSON.parse(cartItem === null || cartItem === void 0 ? void 0 : cartItem.options) : [];
    var quantity = cartItem.quantity;
    return [quantity, options];
};
