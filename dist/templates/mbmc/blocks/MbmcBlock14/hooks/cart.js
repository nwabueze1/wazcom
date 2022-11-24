var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useContext } from "react";
import { RestaurantContext } from "../../../contexts";
import { UPDATE_CART_ITEM } from "../graphql";
import { notify } from "../../../utilities";
export var useUpdateCartItemQuantity = function () {
    var _a = useContext(RestaurantContext), cart = _a.cart, clients = _a.clients, setContext = _a.setContext;
    return function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, errors, error, updatedCart, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    setContext === null || setContext === void 0 ? void 0 : setContext({ loading: true, networkOperation: "update.cart-item.".concat(variables.uuid) });
                    return [4 /*yield*/, (clients === null || clients === void 0 ? void 0 : clients.AMBROSIA).mutate({
                            mutation: UPDATE_CART_ITEM,
                            variables: variables,
                        })];
                case 1:
                    _a = _b.sent(), data = _a.data, errors = _a.errors;
                    if (!data || errors) {
                        error = new Error("We could not complete that operation");
                        throw error;
                    }
                    updatedCart = getUpdatedCart(JSON.parse(JSON.stringify(cart)), variables.uuid, variables.quantity);
                    notify("success", variables.quantity === 0
                        ? "Item deleted successfully"
                        : "Item updated successfully");
                    setContext === null || setContext === void 0 ? void 0 : setContext({ cart: updatedCart, loading: false, networkOperation: "" });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    setContext === null || setContext === void 0 ? void 0 : setContext({ loading: false, networkOperation: "" });
                    notify("error", "We could not complete that operation");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
var getUpdatedCart = function (cart, itemUuid, quantity) {
    var cartItems = __spreadArray([], __read(cart.cartItems), false);
    var idx = cartItems.findIndex(function (item) { return item.uuid === itemUuid; });
    if (quantity === 0)
        cartItems === null || cartItems === void 0 ? void 0 : cartItems.splice(idx, 1);
    else {
        var cartItem = cartItems[idx];
        cartItem.quantity = String(quantity);
        cartItems[idx] = cartItem;
    }
    cart.cartItems = cartItems;
    return cart;
};
