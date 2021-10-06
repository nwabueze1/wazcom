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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useContext, useState } from "react";
import { useMutation } from "@apollo/client";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid, Button } from "@material-ui/core";
import { useStyles } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ONBOARD_SELLER, ONBOARD_STATUS, STORE_PAYPAL, } from "./graphql";
import { toast } from "react-toastify";
import { AppStateContext } from "../provider";
import { Content } from "./Content/Content";
export var Payment = function () {
    var _a;
    var search = window.location.search;
    var params = new URLSearchParams(search);
    var sellerPayPalId = params.get("merchantIdInPayPal");
    var permissionsGranted = params.get("permissionsGranted");
    var userId = (_a = useContext(AppStateContext).user) === null || _a === void 0 ? void 0 : _a.id;
    var siteId = useContext(AppStateContext).site;
    var classes = useStyles();
    var onBoardSeller = useMutation(ONBOARD_SELLER)[0];
    var onboardStatus = useMutation(ONBOARD_STATUS)[0];
    var storeUserPayPal = useMutation(STORE_PAYPAL)[0];
    var _b = useState(""), actionUrl = _b[0], setActionUrl = _b[1];
    useEffect(function () {
        function status() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!sellerPayPalId) return [3 /*break*/, 2];
                            return [4 /*yield*/, onboardStatus({ variables: { sellerPayPalId: sellerPayPalId } }).then(function (_a) {
                                    var _b;
                                    var data = _a.data;
                                    storeUserPayPal({
                                        variables: {
                                            site_id: siteId,
                                            merchant_id: (_b = data === null || data === void 0 ? void 0 : data.checkSellerStatus) === null || _b === void 0 ? void 0 : _b.merchant_client_id,
                                        },
                                    })
                                        .then(function () {
                                        toast.success("Onboard Complete");
                                    })
                                        .catch(function (error) {
                                        error.graphQLErrors.map(function (_a) {
                                            var message = _a.message;
                                            toast.error(message);
                                        });
                                    });
                                })];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            onBoardSeller({ variables: { userId: userId } }).then(function (_a) {
                                var data = _a.data;
                                setActionUrl(data.onBoardSeller.redirect_url);
                            });
                            return [2 /*return*/];
                    }
                });
            });
        }
        status();
    }, [permissionsGranted]);
    return (_jsxs(Grid, __assign({ container: true, component: "main", className: classes.root }, { children: [_jsx(CssBaseline, {}, void 0), _jsx(PayPalScriptProvider, { options: {
                    "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
                    "data-merchant-id": 
                    //this would be gotten from the user after onoarding as this implementation is not even supposed to happen here
                    "AduSSIF9NE4ZQVA8VNCdfSMYW1MGGsTWr1MeELD3dTS_gXmAI1XGh229OV_18bWioy2VfC2z7_vpXgsB",
                } }, void 0), _jsx(Content, {}, void 0), _jsx(Button, __assign({ className: classes.button, style: { background: "#F94C4C" } }, { children: _jsx("a", __assign({ href: actionUrl, "data-paypal-button": "true", className: classes.link }, { children: "Agree and connect" }), void 0) }), void 0)] }), void 0));
};
