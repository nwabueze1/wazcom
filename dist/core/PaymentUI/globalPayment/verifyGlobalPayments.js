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
import { notify } from "../../../helpers";
import { useSelector } from "react-redux";
import { useVerifyAdyenPayment, useVerifyFincraPayment, useVerifyFlutterwavePayment, useVerifyMolliePayment, useVerifyNodaPayment, useVerifyPayment, useVerifyPaypalPayment, useVerifyPaystackPayment, useVerifySeerBitPayment, useVerifyStripePayment, } from "../hooks";
import { useUpdateOrder, useRecordCartAction } from "../hooks";
export var useVerifyGlobalPayments = function () {
    var restaurant = useSelector(function (state) { return state; }).restaurant;
    var cart = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart;
    var verifyPayment = useVerifyPayment();
    var verifyFlutterwavePayment = useVerifyFlutterwavePayment();
    var verifyNodaPayment = useVerifyNodaPayment();
    var verifyPaystackPayment = useVerifyPaystackPayment();
    var verifyFincraPayment = useVerifyFincraPayment();
    var verifySeerBitPayment = useVerifySeerBitPayment();
    var verifyStripePayment = useVerifyStripePayment();
    var verifyPaypalPayment = useVerifyPaypalPayment();
    var verifyAdyenPayment = useVerifyAdyenPayment();
    var verifyMolliePayment = useVerifyMolliePayment();
    var recordCartAction = useRecordCartAction();
    var updateOrder = useUpdateOrder();
    return function (block_uuid, onCompletion) { return __awaiter(void 0, void 0, void 0, function () {
        var urlParams, paymentType, status_1, tx_ref, transaction_id, site_payment_uuid, transaction_id, site_payment_uuid, paymentId, site_payment_uuid, reference, site_payment_uuid_concat, split_fincra, site_payment_uuid, referenceId, site_payment_uuid, paymentReference, site_payment_uuid, session_uuid, site_payment_uuid, paymentId, payerId, site_payment_uuid, paymentSession, site_payment_uuid_concat, split_mollie, site_payment_uuid, paymentId;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
        return __generator(this, function (_1) {
            urlParams = new URLSearchParams(window.location.search);
            paymentType = (_a = urlParams.get("hivedeck_payment_type")) !== null && _a !== void 0 ? _a : "";
            switch (paymentType) {
                case "Hivedeck Payment":
                    {
                        status_1 = (_b = urlParams.get("status")) !== null && _b !== void 0 ? _b : "";
                        tx_ref = (_c = urlParams.get("tx_ref")) !== null && _c !== void 0 ? _c : "";
                        transaction_id = (_d = urlParams.get("transaction_id")) !== null && _d !== void 0 ? _d : "";
                        verifyPayment({
                            site_uuid: cart.restaurant.site.uuid,
                            status: status_1 == "successful" ? "success" : status_1,
                            tx_ref: tx_ref,
                            tx_id: Number(transaction_id),
                        })
                            .then(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, updateOrder(paymentType)];
                                    case 1:
                                        _a.sent();
                                        recordCartAction(block_uuid !== null && block_uuid !== void 0 ? block_uuid : "", "payment_confirmed");
                                        return [2 /*return*/];
                                }
                            });
                        }); })
                            .finally(function () { return onCompletion === null || onCompletion === void 0 ? void 0 : onCompletion(); });
                    }
                    break;
                case "flutterwave":
                    {
                        site_payment_uuid = (_e = urlParams.get("hivedeck_site_payment_uuid")) !== null && _e !== void 0 ? _e : "";
                        transaction_id = (_f = urlParams.get("transaction_id")) !== null && _f !== void 0 ? _f : "";
                        verifyFlutterwavePayment({
                            site_payment_uuid: site_payment_uuid,
                            transaction_id: transaction_id,
                        })
                            .then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!res.status) return [3 /*break*/, 2];
                                        return [4 /*yield*/, updateOrder(paymentType)];
                                    case 1:
                                        _a.sent();
                                        recordCartAction(block_uuid !== null && block_uuid !== void 0 ? block_uuid : "", "payment_confirmed");
                                        return [3 /*break*/, 3];
                                    case 2:
                                        notify("error", "Payment not completed");
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })
                            .finally(function () { return onCompletion === null || onCompletion === void 0 ? void 0 : onCompletion(); });
                    }
                    break;
                case "noda":
                    {
                        site_payment_uuid = (_g = urlParams.get("hivedeck_site_payment_uuid")) !== null && _g !== void 0 ? _g : "";
                        paymentId = (_h = urlParams.get("id")) !== null && _h !== void 0 ? _h : "";
                        verifyNodaPayment({
                            site_payment_uuid: site_payment_uuid,
                            paymentId: paymentId,
                        })
                            .then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!res.status) return [3 /*break*/, 2];
                                        return [4 /*yield*/, updateOrder(paymentType)];
                                    case 1:
                                        _a.sent();
                                        recordCartAction(block_uuid !== null && block_uuid !== void 0 ? block_uuid : "", "payment_confirmed");
                                        return [3 /*break*/, 3];
                                    case 2:
                                        notify("error", "Payment not completed");
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })
                            .finally(function () { return onCompletion === null || onCompletion === void 0 ? void 0 : onCompletion(); });
                    }
                    break;
                case "paystack":
                    {
                        site_payment_uuid = (_j = urlParams.get("hivedeck_site_payment_uuid")) !== null && _j !== void 0 ? _j : "";
                        reference = (_k = urlParams.get("reference")) !== null && _k !== void 0 ? _k : "";
                        verifyPaystackPayment({
                            site_payment_uuid: site_payment_uuid,
                            reference: reference,
                        })
                            .then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!res.status) return [3 /*break*/, 2];
                                        return [4 /*yield*/, updateOrder(paymentType)];
                                    case 1:
                                        _a.sent();
                                        recordCartAction(block_uuid !== null && block_uuid !== void 0 ? block_uuid : "", "payment_confirmed");
                                        return [3 /*break*/, 3];
                                    case 2:
                                        notify("error", "Payment not completed");
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })
                            .finally(function () { return onCompletion === null || onCompletion === void 0 ? void 0 : onCompletion(); });
                    }
                    break;
                case "fincra":
                    {
                        site_payment_uuid_concat = (_l = urlParams.get("hivedeck_site_payment_uuid")) !== null && _l !== void 0 ? _l : "";
                        split_fincra = site_payment_uuid_concat.split("?reference=");
                        site_payment_uuid = (_m = split_fincra[0]) !== null && _m !== void 0 ? _m : "";
                        referenceId = (_o = split_fincra[1]) !== null && _o !== void 0 ? _o : "";
                        verifyFincraPayment({
                            site_payment_uuid: site_payment_uuid,
                            referenceId: referenceId,
                        })
                            .then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!res.status) return [3 /*break*/, 2];
                                        return [4 /*yield*/, updateOrder(paymentType)];
                                    case 1:
                                        _a.sent();
                                        recordCartAction(block_uuid !== null && block_uuid !== void 0 ? block_uuid : "", "payment_confirmed");
                                        return [3 /*break*/, 3];
                                    case 2:
                                        notify("error", "Payment not completed");
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })
                            .finally(function () { return onCompletion === null || onCompletion === void 0 ? void 0 : onCompletion(); });
                    }
                    break;
                case "seerbit":
                    {
                        site_payment_uuid = (_p = urlParams.get("hivedeck_site_payment_uuid")) !== null && _p !== void 0 ? _p : "";
                        paymentReference = (_q = urlParams.get("reference")) !== null && _q !== void 0 ? _q : "";
                        verifySeerBitPayment({
                            site_payment_uuid: site_payment_uuid,
                            paymentReference: paymentReference,
                        })
                            .then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!res.status) return [3 /*break*/, 2];
                                        return [4 /*yield*/, updateOrder(paymentType)];
                                    case 1:
                                        _a.sent();
                                        recordCartAction(block_uuid !== null && block_uuid !== void 0 ? block_uuid : "", "payment_confirmed");
                                        return [3 /*break*/, 3];
                                    case 2:
                                        notify("error", "Payment not completed");
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })
                            .finally(function () { return onCompletion === null || onCompletion === void 0 ? void 0 : onCompletion(); });
                    }
                    break;
                case "stripe":
                    {
                        site_payment_uuid = (_r = urlParams.get("hivedeck_site_payment_uuid")) !== null && _r !== void 0 ? _r : "";
                        session_uuid = (_s = urlParams.get("session_uuid")) !== null && _s !== void 0 ? _s : "";
                        verifyStripePayment({
                            site_payment_uuid: site_payment_uuid,
                            session_uuid: session_uuid,
                        })
                            .then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!res.status) return [3 /*break*/, 2];
                                        return [4 /*yield*/, updateOrder(paymentType)];
                                    case 1:
                                        _a.sent();
                                        recordCartAction(block_uuid !== null && block_uuid !== void 0 ? block_uuid : "", "payment_confirmed");
                                        return [3 /*break*/, 3];
                                    case 2:
                                        notify("error", "Payment not completed");
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })
                            .finally(function () { return onCompletion === null || onCompletion === void 0 ? void 0 : onCompletion(); });
                    }
                    break;
                case "paypal":
                    {
                        site_payment_uuid = (_t = urlParams.get("hivedeck_site_payment_uuid")) !== null && _t !== void 0 ? _t : "";
                        paymentId = (_u = urlParams.get("paymentId")) !== null && _u !== void 0 ? _u : "";
                        payerId = (_v = urlParams.get("PayerID")) !== null && _v !== void 0 ? _v : "";
                        verifyPaypalPayment({
                            site_payment_uuid: site_payment_uuid,
                            paymentId: paymentId,
                            payerId: payerId,
                        })
                            .then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!res.status) return [3 /*break*/, 2];
                                        return [4 /*yield*/, updateOrder(paymentType)];
                                    case 1:
                                        _a.sent();
                                        recordCartAction(block_uuid !== null && block_uuid !== void 0 ? block_uuid : "", "payment_confirmed");
                                        return [3 /*break*/, 3];
                                    case 2:
                                        notify("error", "Payment not completed");
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })
                            .finally(function () { return onCompletion === null || onCompletion === void 0 ? void 0 : onCompletion(); });
                    }
                    break;
                case "adyen":
                    {
                        site_payment_uuid = (_w = urlParams.get("hivedeck_site_payment_uuid")) !== null && _w !== void 0 ? _w : "";
                        paymentSession = (_x = urlParams.get("paymentSession")) !== null && _x !== void 0 ? _x : "";
                        verifyAdyenPayment({
                            site_payment_uuid: site_payment_uuid,
                            paymentSession: paymentSession,
                        })
                            .then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!res.status) return [3 /*break*/, 2];
                                        return [4 /*yield*/, updateOrder(paymentType)];
                                    case 1:
                                        _a.sent();
                                        recordCartAction(block_uuid !== null && block_uuid !== void 0 ? block_uuid : "", "payment_confirmed");
                                        return [3 /*break*/, 3];
                                    case 2:
                                        notify("error", "Payment not completed");
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })
                            .finally(function () { return onCompletion === null || onCompletion === void 0 ? void 0 : onCompletion(); });
                    }
                    break;
                case "mollie":
                    {
                        site_payment_uuid_concat = (_y = urlParams.get("hivedeck_site_payment_uuid")) !== null && _y !== void 0 ? _y : "";
                        split_mollie = site_payment_uuid_concat.split("?id=");
                        site_payment_uuid = (_z = split_mollie[0]) !== null && _z !== void 0 ? _z : "";
                        paymentId = (_0 = split_mollie[1]) !== null && _0 !== void 0 ? _0 : "";
                        verifyMolliePayment({
                            site_payment_uuid: site_payment_uuid,
                            paymentId: paymentId,
                        })
                            .then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!res.status) return [3 /*break*/, 2];
                                        return [4 /*yield*/, updateOrder(paymentType)];
                                    case 1:
                                        _a.sent();
                                        recordCartAction(block_uuid !== null && block_uuid !== void 0 ? block_uuid : "", "payment_confirmed");
                                        return [3 /*break*/, 3];
                                    case 2:
                                        notify("error", "Payment not completed");
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })
                            .finally(function () { return onCompletion === null || onCompletion === void 0 ? void 0 : onCompletion(); });
                    }
                    break;
            }
            return [2 /*return*/];
        });
    }); };
};
