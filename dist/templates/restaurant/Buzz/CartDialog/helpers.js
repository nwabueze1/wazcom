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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export var calculateOptionsTotal = function (options, quantity) {
    if (!options || options.length === 0)
        return 0;
    var additions = options
        .filter(function (option) { return option.type !== "deselection"; })
        .map(function (option) { return option.selectedChoices.map(function (choice) { return Number(choice.amount); }); });
    var subtractions = options
        .filter(function (option) { return option.type === "deselection"; })
        .map(function (option) { return option.selectedChoices.map(function (choice) { return Number(choice.amount); }); });
    additions = __spreadArray([], __read(additions), false);
    subtractions = __spreadArray([], __read(subtractions), false);
    additions = additions.reduce(function (sum, num) { return sum + num; }, 0);
    subtractions = subtractions.reduce(function (sum, num) { return sum - num; }, 0);
    return quantity * (additions + subtractions);
};
export var parseOptionString = function (item) {
    if (!item.options)
        "";
    var options = JSON.parse(item.options);
    var parsedOptions = options
        .map(function (option) { return option.selectedChoices.map(function (choice) { return choice.name; }).join(", "); })
        .join(", ");
    return parsedOptions.length > 150 ? parsedOptions.slice(0, 145) + "..." : parsedOptions;
};
export var findMenuItem = function (menus, itemId) {
    var menuItems = menus.map(function (menu) { return menu.activeMenuItems; });
    var newMenuItems = [];
    menuItems.forEach(function (items) {
        newMenuItems = __spreadArray(__spreadArray([], __read(newMenuItems), false), __read(items), false);
    });
    menuItems = newMenuItems;
    return menuItems.find(function (item) { return item.id.toString() === itemId.toString(); });
};
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
