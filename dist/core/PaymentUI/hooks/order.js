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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { createApolloClient } from "../../../helpers/graphQL";
import { notify } from "../../../helpers";
import { calculateCartSubTotal } from "../helpers";
import { CREATE_ORDER, UPDATE_ORDER } from "../graphql";
export var useCreateOrder = function () {
    var _a = useSelector(function (state) { return state; }), restaurant = _a.restaurant, gatewayUrl = _a.gatewayUrl;
    var dispatch = useDispatch();
    var cart = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart;
    var client = createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "");
    var cookies = new Cookies();
    return function (paymentType, onSuccess) { return __awaiter(void 0, void 0, void 0, function () {
        var cartCookie, cartItemCountCookie, _a, data, errors, order, error_1;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        return __generator(this, function (_t) {
            switch (_t.label) {
                case 0:
                    cartCookie = cookies.get("cart");
                    cartItemCountCookie = cookies.get("cartItemCount");
                    dispatch({ type: "SET_LOADING", payload: true });
                    dispatch({ type: "SET_NETWORK_OPERATION", payload: "create.order" });
                    _t.label = 1;
                case 1:
                    _t.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.mutate({
                            mutation: CREATE_ORDER,
                            variables: {
                                payment_type: (_c = (_b = paymentType === null || paymentType === void 0 ? void 0 : paymentType.name) === null || _b === void 0 ? void 0 : _b.toUpperCase()) === null || _c === void 0 ? void 0 : _c.replace(/ /g, '_'),
                                grand_total: calculateCartSubTotal(cart) +
                                    (((_e = (_d = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _d === void 0 ? void 0 : _d.address) === null || _e === void 0 ? void 0 : _e.uuid)
                                        ? (_g = (_f = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _f === void 0 ? void 0 : _f.bank_info) === null || _g === void 0 ? void 0 : _g.delivery_fee
                                        : 0),
                                address_uuid: (_k = (_j = (_h = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _h === void 0 ? void 0 : _h.address) === null || _j === void 0 ? void 0 : _j.uuid) !== null && _k !== void 0 ? _k : undefined,
                                cart_uuid: cart === null || cart === void 0 ? void 0 : cart.uuid,
                            },
                        })];
                case 2:
                    _a = _t.sent(), data = _a.data, errors = _a.errors;
                    if (!data || errors)
                        throw new Error("We could not complete that operation");
                    order = data.createOrder;
                    if (((_l = paymentType === null || paymentType === void 0 ? void 0 : paymentType.name) === null || _l === void 0 ? void 0 : _l.toLowerCase()) === "cash on delivery") {
                        dispatch({ type: "UPDATE_ORDER", payload: order });
                        notify("success", "Order placed successfully");
                        onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess();
                        delete cartCookie[(_p = (_o = (_m = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _m === void 0 ? void 0 : _m.site) === null || _o === void 0 ? void 0 : _o.uuid) !== null && _p !== void 0 ? _p : ""];
                        delete cartItemCountCookie[(_s = (_r = (_q = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _q === void 0 ? void 0 : _q.site) === null || _r === void 0 ? void 0 : _r.uuid) !== null && _s !== void 0 ? _s : ""];
                        cookies.set("cart", cartCookie, { path: "/" });
                        cookies.set("cartItemCount", cartItemCountCookie, { path: "/" });
                    }
                    return [2 /*return*/, order];
                case 3:
                    error_1 = _t.sent();
                    dispatch({ type: "SET_LOADING", payload: false });
                    dispatch({ type: "SET_NETWORK_OPERATION", payload: "" });
                    notify("error", "We could not complete that operation");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
};
export var useUpdateOrder = function () {
    var _a = useSelector(function (state) { return state; }), gatewayUrl = _a.gatewayUrl, restaurant = _a.restaurant;
    var dispatch = useDispatch();
    var client = createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "");
    var cookies = new Cookies();
    var cart = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart;
    return function (paymentType) { return __awaiter(void 0, void 0, void 0, function () {
        var urlParams, order_uuid, cartCookie, cartItemCountCookie, _a, data, errors, order, error_2;
        var _b, _c, _d, _e, _f, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    urlParams = new URLSearchParams(window.location.search);
                    order_uuid = urlParams.get("hivedeck_order_uuid");
                    dispatch({ type: "SET_LOADING", payload: true });
                    dispatch({ type: "SET_NETWORK_OPERATION", payload: "create.order" });
                    cartCookie = cookies.get("cart");
                    cartItemCountCookie = cookies.get("cartItemCount");
                    _h.label = 1;
                case 1:
                    _h.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.mutate({
                            mutation: UPDATE_ORDER,
                            variables: {
                                payment_type: paymentType.toUpperCase().replace(/ /g, "_"),
                                uuid: order_uuid,
                            },
                        })];
                case 2:
                    _a = _h.sent(), data = _a.data, errors = _a.errors;
                    if (!data || errors)
                        throw new Error("We could not complete that operation");
                    order = data.updateOrder;
                    dispatch({ type: "UPDATE_ORDER", payload: order });
                    notify("success", "Order placed successfully");
                    delete cartCookie[(_d = (_c = (_b = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _b === void 0 ? void 0 : _b.site) === null || _c === void 0 ? void 0 : _c.uuid) !== null && _d !== void 0 ? _d : ""];
                    delete cartItemCountCookie[(_g = (_f = (_e = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _e === void 0 ? void 0 : _e.site) === null || _f === void 0 ? void 0 : _f.uuid) !== null && _g !== void 0 ? _g : ""];
                    cookies.set("cart", cartCookie, { path: "/" });
                    cookies.set("cartItemCount", cartItemCountCookie, { path: "/" });
                    return [2 /*return*/, order];
                case 3:
                    error_2 = _h.sent();
                    notify("error", "We could not complete that operation");
                    return [3 /*break*/, 4];
                case 4:
                    dispatch({ type: "SET_LOADING", payload: false });
                    dispatch({ type: "SET_NETWORK_OPERATION", payload: "" });
                    return [2 /*return*/];
            }
        });
    }); };
};
