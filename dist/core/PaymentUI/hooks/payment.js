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
import { useSelector, useDispatch } from "react-redux";
import { createApolloClient } from "../../../helpers/graphQL";
import { notify } from "../../../helpers";
import { INITIATE_PAYMENT, MAKE_ADYEN_PAYMENT, MAKE_FINCRA_PAYMENT, MAKE_FLUTTERWAVE_PAYMENT, MAKE_MOLLIE_PAYMENT, MAKE_NEW_PAYPAL_PAYMENT, MAKE_NODA_PAYMENT, MAKE_PAYPAL_PAYMENT, MAKE_PAYSTACK_PAYMENT, MAKE_SEEBIT_PAYMENT, MAKE_STRIPE_PAYMENT, VERIFY_ADYEN_PAYMENT, VERIFY_FINCRA_PAYMENT, VERIFY_FLUTTERWAVE_PAYMENT, VERIFY_MOLLIE_PAYMENT, VERIFY_NODA_PAYMENT, VERIFY_PAYMENT, VERIFY_PAYPAL_PAYMENT, VERIFY_PAYSTACK_PAYMENT, VERIFY_SEEBIT_PAYMENT, VERIFY_STRIPE_PAYMENT, } from "../graphql";
export var useGlobalPaymentMethod = function () {
    var gatewayUrl = useSelector(function (state) { return state; }).gatewayUrl;
    var dispatch = useDispatch();
    var client = createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "");
    return function (body, sitePaymentType) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                switch (sitePaymentType.payment_type.name) {
                    case "flutterwave":
                        return [2 /*return*/, flutterwavePayment(client, body, sitePaymentType)];
                    case "noda":
                        return [2 /*return*/, nodaPayment(client, body, sitePaymentType)];
                    case "adyen":
                        return [2 /*return*/, adyenPayment(client, body, sitePaymentType)];
                    case "paystack":
                        return [2 /*return*/, paystackPayment(client, body, sitePaymentType)];
                    case "fincra":
                        return [2 /*return*/, fincraPayment(client, body, sitePaymentType)];
                    case "seerbit":
                        return [2 /*return*/, seerbitPayment(client, body, sitePaymentType)];
                    case "stripe":
                        return [2 /*return*/, stripePayment(client, body, sitePaymentType)];
                    case "paypal":
                        return [2 /*return*/, paypalPayment(client, body, sitePaymentType)];
                    case "mollie":
                        return [2 /*return*/, molliePayment(client, body, sitePaymentType)];
                    default:
                        return [2 /*return*/, flutterwavePayment(client, body, sitePaymentType)];
                }
            }
            catch (error) {
                notify("error", "We could not complete that operation");
            }
            finally {
                dispatch({ type: "SET_LOADING", payload: false });
                dispatch({ type: "SET_NETWORK_OPERATION", payload: "" });
            }
            return [2 /*return*/];
        });
    }); };
};
var flutterwavePayment = function (client, body, sitePaymentType) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, errors;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, client.mutate({
                    mutation: MAKE_FLUTTERWAVE_PAYMENT,
                    variables: { body: body, site_payment_uuid: sitePaymentType.uuid },
                })];
            case 1:
                _a = _d.sent(), data = _a.data, errors = _a.errors;
                if (!data || !((_b = data === null || data === void 0 ? void 0 : data.makePaymentWithFlutterwave) === null || _b === void 0 ? void 0 : _b.redirect_url) || errors) {
                    return [2 /*return*/, notify("error", "We could not complete that operation")];
                }
                window.location.href = (_c = data === null || data === void 0 ? void 0 : data.makePaymentWithFlutterwave) === null || _c === void 0 ? void 0 : _c.redirect_url;
                return [2 /*return*/];
        }
    });
}); };
var nodaPayment = function (client, body, sitePaymentType) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, errors;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, client.mutate({
                    mutation: MAKE_NODA_PAYMENT,
                    variables: { body: body, site_payment_uuid: sitePaymentType.uuid },
                })];
            case 1:
                _a = _d.sent(), data = _a.data, errors = _a.errors;
                if (!data || !((_b = data === null || data === void 0 ? void 0 : data.makePaymentWithNoda) === null || _b === void 0 ? void 0 : _b.redirect_url) || errors) {
                    return [2 /*return*/, notify("error", "We could not complete that operation")];
                }
                window.location.href = (_c = data === null || data === void 0 ? void 0 : data.makePaymentWithNoda) === null || _c === void 0 ? void 0 : _c.redirect_url;
                return [2 /*return*/];
        }
    });
}); };
var adyenPayment = function (client, body, sitePaymentType) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, errors;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, client.mutate({
                    mutation: MAKE_ADYEN_PAYMENT,
                    variables: { body: body, site_payment_uuid: sitePaymentType.uuid },
                })];
            case 1:
                _a = _d.sent(), data = _a.data, errors = _a.errors;
                if (!data || !((_b = data === null || data === void 0 ? void 0 : data.makePaymentWithAdyen) === null || _b === void 0 ? void 0 : _b.redirect_url) || errors) {
                    return [2 /*return*/, notify("error", "We could not complete that operation")];
                }
                window.location.href = (_c = data === null || data === void 0 ? void 0 : data.makePaymentWithAdyen) === null || _c === void 0 ? void 0 : _c.redirect_url;
                return [2 /*return*/];
        }
    });
}); };
var fincraPayment = function (client, body, sitePaymentType) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, errors;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, client.mutate({
                    mutation: MAKE_FINCRA_PAYMENT,
                    variables: { body: body, site_payment_uuid: sitePaymentType.uuid },
                })];
            case 1:
                _a = _d.sent(), data = _a.data, errors = _a.errors;
                if (!data || !((_b = data === null || data === void 0 ? void 0 : data.makePaymentWithFincra) === null || _b === void 0 ? void 0 : _b.redirect_url) || errors) {
                    return [2 /*return*/, notify("error", "We could not complete that operation")];
                }
                window.location.href = (_c = data === null || data === void 0 ? void 0 : data.makePaymentWithFincra) === null || _c === void 0 ? void 0 : _c.redirect_url;
                return [2 /*return*/];
        }
    });
}); };
var paypalPayment = function (client, body, sitePaymentType) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, errors;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, client.mutate({
                    mutation: MAKE_NEW_PAYPAL_PAYMENT,
                    variables: { body: body, site_payment_uuid: sitePaymentType.uuid },
                })];
            case 1:
                _a = _d.sent(), data = _a.data, errors = _a.errors;
                if (!data || !((_b = data === null || data === void 0 ? void 0 : data.makePaymentWithPaypal) === null || _b === void 0 ? void 0 : _b.redirect_url) || errors) {
                    return [2 /*return*/, notify("error", "We could not complete that operation")];
                }
                window.location.href = (_c = data === null || data === void 0 ? void 0 : data.makePaymentWithPaypal) === null || _c === void 0 ? void 0 : _c.redirect_url;
                return [2 /*return*/];
        }
    });
}); };
var paystackPayment = function (client, body, sitePaymentType) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, errors;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, client.mutate({
                    mutation: MAKE_PAYSTACK_PAYMENT,
                    variables: { body: body, site_payment_uuid: sitePaymentType.uuid },
                })];
            case 1:
                _a = _d.sent(), data = _a.data, errors = _a.errors;
                if (!data || !((_b = data === null || data === void 0 ? void 0 : data.makePaymentWithPaystack) === null || _b === void 0 ? void 0 : _b.redirect_url) || errors) {
                    return [2 /*return*/, notify("error", "We could not complete that operation")];
                }
                window.location.href = (_c = data === null || data === void 0 ? void 0 : data.makePaymentWithPaystack) === null || _c === void 0 ? void 0 : _c.redirect_url;
                return [2 /*return*/];
        }
    });
}); };
var seerbitPayment = function (client, body, sitePaymentType) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, errors;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, client.mutate({
                    mutation: MAKE_SEEBIT_PAYMENT,
                    variables: { body: body, site_payment_uuid: sitePaymentType.uuid },
                })];
            case 1:
                _a = _d.sent(), data = _a.data, errors = _a.errors;
                if (!data || !((_b = data === null || data === void 0 ? void 0 : data.makePaymentWithSeebit) === null || _b === void 0 ? void 0 : _b.redirect_url) || errors) {
                    return [2 /*return*/, notify("error", "We could not complete that operation")];
                }
                window.location.href = (_c = data === null || data === void 0 ? void 0 : data.makePaymentWithSeebit) === null || _c === void 0 ? void 0 : _c.redirect_url;
                return [2 /*return*/];
        }
    });
}); };
var stripePayment = function (client, body, sitePaymentType) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, errors;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, client.mutate({
                    mutation: MAKE_STRIPE_PAYMENT,
                    variables: { body: body, site_payment_uuid: sitePaymentType.uuid },
                })];
            case 1:
                _a = _d.sent(), data = _a.data, errors = _a.errors;
                if (!data || !((_b = data === null || data === void 0 ? void 0 : data.makePaymentWithStripe) === null || _b === void 0 ? void 0 : _b.redirect_url) || errors) {
                    return [2 /*return*/, notify("error", "We could not complete that operation")];
                }
                window.location.href = (_c = data === null || data === void 0 ? void 0 : data.makePaymentWithStripe) === null || _c === void 0 ? void 0 : _c.redirect_url;
                return [2 /*return*/];
        }
    });
}); };
var molliePayment = function (client, body, sitePaymentType) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, errors;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, client.mutate({
                    mutation: MAKE_MOLLIE_PAYMENT,
                    variables: { body: body, site_payment_uuid: sitePaymentType.uuid },
                })];
            case 1:
                _a = _d.sent(), data = _a.data, errors = _a.errors;
                if (!data || !((_b = data === null || data === void 0 ? void 0 : data.makePaymentWithMollie) === null || _b === void 0 ? void 0 : _b.redirect_url) || errors) {
                    return [2 /*return*/, notify("error", "We could not complete that operation")];
                }
                window.location.href = (_c = data === null || data === void 0 ? void 0 : data.makePaymentWithMollie) === null || _c === void 0 ? void 0 : _c.redirect_url;
                return [2 /*return*/];
        }
    });
}); };
export var useVerifyFlutterwavePayment = function () {
    var gatewayUrl = useSelector(function (state) { return state; }).gatewayUrl;
    var client = createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "");
    return function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, errors, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.query({
                            query: VERIFY_FLUTTERWAVE_PAYMENT,
                            variables: __assign({}, variables),
                        })];
                case 1:
                    _a = _b.sent(), data = _a.data, errors = _a.errors;
                    if (!data ||
                        !data.verifyFlutterwavePayment.status ||
                        data.verifyFlutterwavePayment.status == "error" ||
                        errors)
                        throw new Error("We could not complete that operation");
                    return [2 /*return*/, data.verifyFlutterwavePayment];
                case 2:
                    e_1 = _b.sent();
                    notify("error", "We could not complete that operation");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
export var useVerifyNodaPayment = function () {
    var gatewayUrl = useSelector(function (state) { return state; }).gatewayUrl;
    var client = createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "");
    return function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, errors, e_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.query({
                            query: VERIFY_NODA_PAYMENT,
                            variables: __assign({}, variables),
                        })];
                case 1:
                    _a = _b.sent(), data = _a.data, errors = _a.errors;
                    if (!data ||
                        !data.verifyNodaPayment.status ||
                        data.verifyNodaPayment.status == "error" ||
                        errors)
                        throw new Error("We could not complete that operation");
                    return [2 /*return*/, data.verifyNodaPayment];
                case 2:
                    e_2 = _b.sent();
                    notify("error", "We could not complete that operation");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
export var useVerifyAdyenPayment = function () {
    var gatewayUrl = useSelector(function (state) { return state; }).gatewayUrl;
    var client = createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "");
    return function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, errors, e_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.query({
                            query: VERIFY_ADYEN_PAYMENT,
                            variables: __assign({}, variables),
                        })];
                case 1:
                    _a = _b.sent(), data = _a.data, errors = _a.errors;
                    if (!data ||
                        !data.verifyAdyenPayment.status ||
                        data.verifyAdyenPayment.status == "error" ||
                        errors)
                        throw new Error("We could not complete that operation");
                    return [2 /*return*/, data.verifyAdyenPayment];
                case 2:
                    e_3 = _b.sent();
                    notify("error", "We could not complete that operation");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
export var useVerifyFincraPayment = function () {
    var gatewayUrl = useSelector(function (state) { return state; }).gatewayUrl;
    var client = createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "");
    return function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, errors, e_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.query({
                            query: VERIFY_FINCRA_PAYMENT,
                            variables: __assign({}, variables),
                        })];
                case 1:
                    _a = _b.sent(), data = _a.data, errors = _a.errors;
                    if (!data ||
                        !data.verifyFincraPayment.status ||
                        data.verifyFincraPayment.status == "error" ||
                        errors)
                        throw new Error("We could not complete that operation");
                    return [2 /*return*/, data.verifyFincraPayment];
                case 2:
                    e_4 = _b.sent();
                    notify("error", "We could not complete that operation");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
export var useVerifyMolliePayment = function () {
    var gatewayUrl = useSelector(function (state) { return state; }).gatewayUrl;
    var client = createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "");
    return function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, errors, e_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.query({
                            query: VERIFY_MOLLIE_PAYMENT,
                            variables: __assign({}, variables),
                        })];
                case 1:
                    _a = _b.sent(), data = _a.data, errors = _a.errors;
                    if (!data ||
                        !data.verifyMolliePayment.status ||
                        data.verifyMolliePayment.status == "error" ||
                        errors)
                        throw new Error("We could not complete that operation");
                    return [2 /*return*/, data.verifyMolliePayment];
                case 2:
                    e_5 = _b.sent();
                    notify("error", "We could not complete that operation");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
export var useVerifyPaypalPayment = function () {
    var gatewayUrl = useSelector(function (state) { return state; }).gatewayUrl;
    var client = createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "");
    return function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, errors, e_6;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.query({
                            query: VERIFY_PAYPAL_PAYMENT,
                            variables: __assign({}, variables),
                        })];
                case 1:
                    _a = _b.sent(), data = _a.data, errors = _a.errors;
                    if (!data ||
                        !data.verifyPaypalPayment.status ||
                        data.verifyPaypalPayment.status == "error" ||
                        errors)
                        throw new Error("We could not complete that operation");
                    return [2 /*return*/, data.verifyPaypalPayment];
                case 2:
                    e_6 = _b.sent();
                    notify("error", "We could not complete that operation");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
export var useVerifyPaystackPayment = function () {
    var gatewayUrl = useSelector(function (state) { return state; }).gatewayUrl;
    var client = createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "");
    return function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, errors, e_7;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.query({
                            query: VERIFY_PAYSTACK_PAYMENT,
                            variables: __assign({}, variables),
                        })];
                case 1:
                    _a = _b.sent(), data = _a.data, errors = _a.errors;
                    if (!data ||
                        !data.verifyPaystackPayment.status ||
                        data.verifyPaystackPayment.status == "error" ||
                        errors)
                        throw new Error("We could not complete that operation");
                    return [2 /*return*/, data.verifyPaystackPayment];
                case 2:
                    e_7 = _b.sent();
                    notify("error", "We could not complete that operation");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
export var useVerifySeerBitPayment = function () {
    var gatewayUrl = useSelector(function (state) { return state; }).gatewayUrl;
    var client = createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "");
    return function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, errors, e_8;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.query({
                            query: VERIFY_SEEBIT_PAYMENT,
                            variables: __assign({}, variables),
                        })];
                case 1:
                    _a = _b.sent(), data = _a.data, errors = _a.errors;
                    if (!data ||
                        !data.verifySeeBitPayment.status ||
                        data.verifySeeBitPayment.status == "error" ||
                        errors)
                        throw new Error("We could not complete that operation");
                    return [2 /*return*/, data.verifySeeBitPayment];
                case 2:
                    e_8 = _b.sent();
                    notify("error", "We could not complete that operation");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
export var useVerifyStripePayment = function () {
    var gatewayUrl = useSelector(function (state) { return state; }).gatewayUrl;
    var client = createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "");
    return function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, errors, e_9;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.query({
                            query: VERIFY_STRIPE_PAYMENT,
                            variables: __assign({}, variables),
                        })];
                case 1:
                    _a = _b.sent(), data = _a.data, errors = _a.errors;
                    if (!data ||
                        !data.verifyStripePayment.status ||
                        data.verifyStripePayment.status == "error" ||
                        errors)
                        throw new Error("We could not complete that operation");
                    return [2 /*return*/, data.verifyStripePayment];
                case 2:
                    e_9 = _b.sent();
                    notify("error", "We could not complete that operation");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
export var usePaypalPayment = function () {
    var gatewayUrl = useSelector(function (state) { return state; }).gatewayUrl;
    var client = createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "");
    return function (order_uuid) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, errors, redirect_url, error_1;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.mutate({
                            mutation: MAKE_PAYPAL_PAYMENT,
                            variables: { order_uuid: order_uuid, pageRedirect: window.location.pathname },
                        })];
                case 1:
                    _a = _c.sent(), data = _a.data, errors = _a.errors;
                    if (!data || !((_b = data === null || data === void 0 ? void 0 : data.makePaypalDirectPayment) === null || _b === void 0 ? void 0 : _b.redirect_url) || errors)
                        throw new Error("We could not complete that operation");
                    redirect_url = data.makePaypalDirectPayment.redirect_url;
                    window.location.href = redirect_url;
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _c.sent();
                    notify("error", "We could not complete that operation");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
export var useInitiatePayment = function () {
    var gatewayUrl = useSelector(function (state) { return state; }).gatewayUrl;
    var dispatch = useDispatch();
    var client = createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "");
    return function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, errors, link, e_10;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.mutate({
                            mutation: INITIATE_PAYMENT,
                            variables: {
                                input: __assign({}, variables),
                            },
                        })];
                case 1:
                    _a = _c.sent(), data = _a.data, errors = _a.errors;
                    if (!data || !((_b = data === null || data === void 0 ? void 0 : data.initiateGatewayPayment) === null || _b === void 0 ? void 0 : _b.link) || errors)
                        throw new Error("We could not complete that operation");
                    link = data.initiateGatewayPayment.link;
                    window.location.href = link;
                    return [3 /*break*/, 3];
                case 2:
                    e_10 = _c.sent();
                    notify("error", "We could not complete that operation");
                    dispatch({ type: "SET_LOADING", payload: false });
                    dispatch({ type: "SET_NETWORK_OPERATION", payload: "" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
export var useVerifyPayment = function () {
    var gatewayUrl = useSelector(function (state) { return state; }).gatewayUrl;
    var client = createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "");
    return function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, errors, e_11;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.mutate({
                            mutation: VERIFY_PAYMENT,
                            variables: {
                                input: __assign({}, variables),
                            },
                        })];
                case 1:
                    _a = _c.sent(), data = _a.data, errors = _a.errors;
                    if (!data || !((_b = data === null || data === void 0 ? void 0 : data.verifyGatewayPayment) === null || _b === void 0 ? void 0 : _b.uuid) || errors)
                        throw new Error("We could not complete that operation");
                    return [2 /*return*/, data.verifyGatewayPayment];
                case 2:
                    e_11 = _c.sent();
                    notify("error", "We could not complete that operation");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
