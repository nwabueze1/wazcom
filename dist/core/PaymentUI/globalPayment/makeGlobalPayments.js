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
import { calculateCartSubTotal, getTotalChargeAmount } from "../helpers";
import { useGlobalPaymentMethod, useInitiatePayment, useRecordCartAction } from "../hooks";
export var useMakeGlobalPayments = function () {
    var globalPaymentMethod = useGlobalPaymentMethod();
    var initiatePayment = useInitiatePayment();
    var recordCartAction = useRecordCartAction();
    return function (cart, userPaymentMethod, order, guest, block_uuid) { return __awaiter(void 0, void 0, void 0, function () {
        var body, redirect_url, cancel_url, _a, lineItems, deliveryFee;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35;
        return __generator(this, function (_36) {
            switch (_36.label) {
                case 0:
                    body = {};
                    redirect_url = window.location.href +
                        "?hivedeck_order_uuid=".concat(order.uuid, "&hivedeck_cart_uuid=").concat(cart.uuid, "&hivedeck_payment_type=").concat(userPaymentMethod.payment_type.name, "&hivedeck_site_payment_uuid=").concat(userPaymentMethod.uuid);
                    cancel_url = redirect_url + "&hivedeck_status=canceled";
                    _a = userPaymentMethod.payment_type.name;
                    switch (_a) {
                        case "Cash on delivery": return [3 /*break*/, 1];
                        case "Hivedeck Payment": return [3 /*break*/, 2];
                        case "flutterwave": return [3 /*break*/, 4];
                        case "noda": return [3 /*break*/, 5];
                        case "paystack": return [3 /*break*/, 6];
                        case "fincra": return [3 /*break*/, 7];
                        case "seerbit": return [3 /*break*/, 8];
                        case "stripe": return [3 /*break*/, 9];
                        case "paypal": return [3 /*break*/, 10];
                        case "adyen": return [3 /*break*/, 11];
                        case "mollie": return [3 /*break*/, 12];
                    }
                    return [3 /*break*/, 13];
                case 1: return [3 /*break*/, 13];
                case 2: return [4 /*yield*/, initiatePayment({
                        site_uuid: cart === null || cart === void 0 ? void 0 : cart.restaurant.site.uuid,
                        email: (_c = (_b = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _b === void 0 ? void 0 : _b.email) !== null && _c !== void 0 ? _c : "",
                        phone_number: (_d = guest === null || guest === void 0 ? void 0 : guest.phone) !== null && _d !== void 0 ? _d : "",
                        amount: getTotalChargeAmount(cart),
                        full_name: "".concat(guest === null || guest === void 0 ? void 0 : guest.firstname, " ").concat(guest === null || guest === void 0 ? void 0 : guest.lastname),
                        redirect_url: redirect_url,
                        metadata: {
                            order_uuid: order.uuid,
                        },
                    })];
                case 3:
                    _36.sent();
                    return [3 /*break*/, 13];
                case 4:
                    body = {
                        amount: getTotalChargeAmount(cart),
                        email: (_f = (_e = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _e === void 0 ? void 0 : _e.email) !== null && _f !== void 0 ? _f : "",
                        currency: (_j = (_h = (_g = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _g === void 0 ? void 0 : _g.bank_info) === null || _h === void 0 ? void 0 : _h.currency) !== null && _j !== void 0 ? _j : "",
                        phone_number: (_k = guest === null || guest === void 0 ? void 0 : guest.phone) !== null && _k !== void 0 ? _k : "",
                        callback: redirect_url,
                    };
                    globalPaymentMethod(body, userPaymentMethod);
                    return [3 /*break*/, 13];
                case 5:
                    body = {
                        amount: getTotalChargeAmount(cart),
                        email: (_m = (_l = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _l === void 0 ? void 0 : _l.email) !== null && _m !== void 0 ? _m : "",
                        currency: (_q = (_p = (_o = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _o === void 0 ? void 0 : _o.bank_info) === null || _p === void 0 ? void 0 : _p.currency) !== null && _q !== void 0 ? _q : "",
                        description: (_r = order.uuid) !== null && _r !== void 0 ? _r : "",
                        returnUrl: redirect_url,
                    };
                    globalPaymentMethod(body, userPaymentMethod);
                    return [3 /*break*/, 13];
                case 6:
                    body = {
                        fullname: "".concat(guest === null || guest === void 0 ? void 0 : guest.firstname, " ").concat(guest === null || guest === void 0 ? void 0 : guest.lastname),
                        amount: getTotalChargeAmount(cart),
                        email: (_t = (_s = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _s === void 0 ? void 0 : _s.email) !== null && _t !== void 0 ? _t : "",
                        currency: (_w = (_v = (_u = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _u === void 0 ? void 0 : _u.bank_info) === null || _v === void 0 ? void 0 : _v.currency) !== null && _w !== void 0 ? _w : "",
                        callback: redirect_url,
                    };
                    globalPaymentMethod(body, userPaymentMethod);
                    return [3 /*break*/, 13];
                case 7:
                    body = {
                        amount: getTotalChargeAmount(cart),
                        currency: (_z = (_y = (_x = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _x === void 0 ? void 0 : _x.bank_info) === null || _y === void 0 ? void 0 : _y.currency) !== null && _z !== void 0 ? _z : "",
                        callback: redirect_url,
                        customer: {
                            name: "".concat(guest === null || guest === void 0 ? void 0 : guest.firstname, " ").concat(guest === null || guest === void 0 ? void 0 : guest.lastname),
                            email: (_1 = (_0 = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _0 === void 0 ? void 0 : _0.email) !== null && _1 !== void 0 ? _1 : "",
                            phoneNumber: (_2 = guest === null || guest === void 0 ? void 0 : guest.phone) !== null && _2 !== void 0 ? _2 : "",
                        },
                    };
                    globalPaymentMethod(body, userPaymentMethod);
                    return [3 /*break*/, 13];
                case 8:
                    body = {
                        amount: getTotalChargeAmount(cart),
                        callback: window.location.href +
                            "?hivedeck_order_uuid=".concat(order.uuid, "&hivedeck_payment_type=").concat(userPaymentMethod.payment_type.name, "&hivedeck_site_payment_uuid=").concat(userPaymentMethod.uuid),
                        currency: (_5 = (_4 = (_3 = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _3 === void 0 ? void 0 : _3.bank_info) === null || _4 === void 0 ? void 0 : _4.currency) !== null && _5 !== void 0 ? _5 : "",
                        email: (_7 = (_6 = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _6 === void 0 ? void 0 : _6.email) !== null && _7 !== void 0 ? _7 : "",
                        country: (_10 = (_9 = (_8 = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _8 === void 0 ? void 0 : _8.address) === null || _9 === void 0 ? void 0 : _9.country) !== null && _10 !== void 0 ? _10 : "",
                    };
                    globalPaymentMethod(body, userPaymentMethod);
                    return [3 /*break*/, 13];
                case 9:
                    lineItems = (_11 = cart === null || cart === void 0 ? void 0 : cart.cartItems) === null || _11 === void 0 ? void 0 : _11.map(function (item) {
                        var _a, _b, _c, _d, _e;
                        return {
                            quantity: Number(item.quantity),
                            price_data: {
                                currency: (_c = (_b = (_a = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _a === void 0 ? void 0 : _a.bank_info) === null || _b === void 0 ? void 0 : _b.currency) !== null && _c !== void 0 ? _c : "",
                                unit_amount: (calculateCartSubTotal(cart, item === null || item === void 0 ? void 0 : item.uuid) * 100) / Number(item.quantity),
                                product_data: {
                                    name: item.menuItem.name,
                                    description: item.menuItem.description,
                                    images: [(_e = (_d = item.menuItem) === null || _d === void 0 ? void 0 : _d.image) === null || _e === void 0 ? void 0 : _e.src],
                                },
                            },
                        };
                    });
                    deliveryFee = !((_12 = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _12 === void 0 ? void 0 : _12.firstname)
                        ? Number((_14 = (_13 = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _13 === void 0 ? void 0 : _13.bank_info) === null || _14 === void 0 ? void 0 : _14.delivery_fee)
                        : ((_16 = (_15 = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _15 === void 0 ? void 0 : _15.address) === null || _16 === void 0 ? void 0 : _16.uuid)
                            ? Number((_18 = (_17 = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _17 === void 0 ? void 0 : _17.bank_info) === null || _18 === void 0 ? void 0 : _18.delivery_fee)
                            : 0;
                    if (deliveryFee) {
                        lineItems === null || lineItems === void 0 ? void 0 : lineItems.push({
                            quantity: 1,
                            price_data: {
                                currency: (_21 = (_20 = (_19 = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _19 === void 0 ? void 0 : _19.bank_info) === null || _20 === void 0 ? void 0 : _20.currency) !== null && _21 !== void 0 ? _21 : "",
                                unit_amount: deliveryFee * 100,
                                product_data: {
                                    name: "Delivery",
                                    description: "Amount charged for delivery",
                                    images: [],
                                },
                            },
                        });
                    }
                    body = {
                        line_items: lineItems,
                        success_url: redirect_url,
                        cancel_url: cancel_url,
                    };
                    globalPaymentMethod(body, userPaymentMethod);
                    return [3 /*break*/, 13];
                case 10:
                    body = {
                        amount: getTotalChargeAmount(cart),
                        description: (_22 = order.uuid) !== null && _22 !== void 0 ? _22 : "",
                        currency: (_25 = (_24 = (_23 = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _23 === void 0 ? void 0 : _23.bank_info) === null || _24 === void 0 ? void 0 : _24.currency) !== null && _25 !== void 0 ? _25 : "",
                        callback: redirect_url,
                        cancel_url: cancel_url,
                    };
                    globalPaymentMethod(body, userPaymentMethod);
                    return [3 /*break*/, 13];
                case 11:
                    body = {
                        email: (_27 = (_26 = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _26 === void 0 ? void 0 : _26.email) !== null && _27 !== void 0 ? _27 : "",
                        fullname: "".concat(guest === null || guest === void 0 ? void 0 : guest.firstname, " ").concat(guest === null || guest === void 0 ? void 0 : guest.lastname),
                        amount: getTotalChargeAmount(cart),
                        currency: (_30 = (_29 = (_28 = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _28 === void 0 ? void 0 : _28.bank_info) === null || _29 === void 0 ? void 0 : _29.currency) !== null && _30 !== void 0 ? _30 : "",
                        callback: redirect_url,
                    };
                    globalPaymentMethod(body, userPaymentMethod);
                    return [3 /*break*/, 13];
                case 12:
                    body = {
                        amount: {
                            currency: (_33 = (_32 = (_31 = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _31 === void 0 ? void 0 : _31.bank_info) === null || _32 === void 0 ? void 0 : _32.currency) !== null && _33 !== void 0 ? _33 : "",
                            value: getTotalChargeAmount(cart) + ".00",
                        },
                        description: (_34 = order.uuid) !== null && _34 !== void 0 ? _34 : "",
                        redirectUrl: redirect_url,
                        order_id: (_35 = order.uuid) !== null && _35 !== void 0 ? _35 : "",
                    };
                    globalPaymentMethod(body, userPaymentMethod);
                    return [3 /*break*/, 13];
                case 13:
                    recordCartAction(block_uuid !== null && block_uuid !== void 0 ? block_uuid : "", "payment_initiated");
                    return [2 /*return*/];
            }
        });
    }); };
};
