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
import { useContext } from "react";
import Cookies from "universal-cookie";
import { RestaurantContext } from "../../../../../contexts";
import { CREATE_ORDER } from "../graphql";
import { calculateCartSubTotal } from "../../../helpers";
import { notify } from "../../../../../utilities";
export var useCreateOrder = function () {
    var _a = useContext(RestaurantContext), cart = _a.cart, clients = _a.clients, setContext = _a.setContext;
    var cookies = new Cookies();
    return function (paymentMethod) { return __awaiter(void 0, void 0, void 0, function () {
        var cartCookie, cartItemCountCookie, _a, data, errors, order, updatedCart, error_1;
        var _b, _c, _d, _e, _f, _g, _h, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    cartCookie = cookies.get("cart");
                    cartItemCountCookie = cookies.get("cartItemCount");
                    setContext === null || setContext === void 0 ? void 0 : setContext({ loading: true, networkOperation: "create.order" });
                    _k.label = 1;
                case 1:
                    _k.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (clients === null || clients === void 0 ? void 0 : clients.AMBROSIA).mutate({
                            mutation: CREATE_ORDER,
                            variables: {
                                payment_type: paymentMethod,
                                grand_total: calculateCartSubTotal(cart) +
                                    ((_c = (_b = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _b === void 0 ? void 0 : _b.bank_info) === null || _c === void 0 ? void 0 : _c.delivery_fee),
                                address_uuid: (_e = (_d = cart === null || cart === void 0 ? void 0 : cart.address) === null || _d === void 0 ? void 0 : _d.uuid) !== null && _e !== void 0 ? _e : undefined,
                                cart_uuid: cart === null || cart === void 0 ? void 0 : cart.uuid,
                            },
                        })];
                case 2:
                    _a = _k.sent(), data = _a.data, errors = _a.errors;
                    if (!data || errors)
                        throw new Error("We could not complete that operation");
                    order = data.createOrder;
                    updatedCart = __assign(__assign({}, cart), { order: order });
                    setContext === null || setContext === void 0 ? void 0 : setContext({ loading: false, networkOperation: "", cart: updatedCart });
                    notify("success", "Order placed successfully");
                    delete cartCookie[(_g = (_f = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _f === void 0 ? void 0 : _f.site_uuid) !== null && _g !== void 0 ? _g : ""];
                    delete cartItemCountCookie[(_j = (_h = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _h === void 0 ? void 0 : _h.site_uuid) !== null && _j !== void 0 ? _j : ""];
                    cookies.set("cart", cartCookie, { path: "/" });
                    cookies.set("cartItemCount", cartItemCountCookie, { path: "/" });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _k.sent();
                    setContext === null || setContext === void 0 ? void 0 : setContext({ loading: false, networkOperation: "" });
                    notify("error", "We could not complete that operation");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
};
