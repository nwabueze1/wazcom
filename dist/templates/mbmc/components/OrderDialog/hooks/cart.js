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
import { RestaurantContext } from "../../../contexts";
import { CREATE_CART, CREATE_CART_ITEM } from "../graphql";
import { notify } from "../../../utilities";
export var useCreateCart = function () {
    var _a = useContext(RestaurantContext), menu = _a.menu, client = _a.client;
    var cookies = new Cookies();
    return function () { return __awaiter(void 0, void 0, void 0, function () {
        var cartCookie, cartItemCountCookie, siteUuid, currency, _a, data, errors, error, _b, uuid, expires;
        var _c, _d, _e, _f, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    cartCookie = (_c = cookies.get("cart")) !== null && _c !== void 0 ? _c : {};
                    cartItemCountCookie = (_d = cookies.get("cartItemCount")) !== null && _d !== void 0 ? _d : {};
                    siteUuid = (_e = menu === null || menu === void 0 ? void 0 : menu.restaurant) === null || _e === void 0 ? void 0 : _e.site_uuid;
                    currency = (_g = (_f = menu === null || menu === void 0 ? void 0 : menu.restaurant) === null || _f === void 0 ? void 0 : _f.bank_info) === null || _g === void 0 ? void 0 : _g.currency;
                    return [4 /*yield*/, client.mutate({
                            mutation: CREATE_CART,
                            variables: { site_uuid: siteUuid, currency: currency },
                        })];
                case 1:
                    _a = _h.sent(), data = _a.data, errors = _a.errors;
                    if (!data || errors) {
                        error = new Error("We could not complete that operation");
                        throw error;
                    }
                    _b = data.createCart, uuid = _b.uuid, expires = _b.expires;
                    cartCookie[siteUuid] = uuid;
                    cartItemCountCookie[siteUuid] = 0;
                    cookies.set("cart", cartCookie, { path: "/", expires: new Date(expires) });
                    cookies.set("cartItemCount", cartItemCountCookie, {
                        path: "/",
                        expires: new Date(expires),
                    });
                    return [2 /*return*/, uuid];
            }
        });
    }); };
};
export var useAddToCart = function () {
    var _a = useContext(RestaurantContext), menu = _a.menu, client = _a.client, setContext = _a.setContext;
    var cookies = new Cookies();
    var createCart = useCreateCart();
    var updateCartCount = useUpdateCartCount();
    return function (variables, onClose, setContextProps) { return __awaiter(void 0, void 0, void 0, function () {
        var cartCookie, siteUuid, cartUuid, _a, data, errors, error, error_1;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    cartCookie = cookies.get("cart");
                    siteUuid = (_b = menu === null || menu === void 0 ? void 0 : menu.restaurant) === null || _b === void 0 ? void 0 : _b.site_uuid;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 6, , 7]);
                    setContext === null || setContext === void 0 ? void 0 : setContext({ loading: true });
                    if (!(!cartCookie || !cartCookie[siteUuid])) return [3 /*break*/, 3];
                    return [4 /*yield*/, createCart()];
                case 2:
                    cartUuid = _c.sent();
                    return [3 /*break*/, 4];
                case 3:
                    cartUuid = cartCookie[siteUuid];
                    _c.label = 4;
                case 4: return [4 /*yield*/, client.mutate({
                        mutation: CREATE_CART_ITEM,
                        variables: __assign(__assign({}, variables), { cart_uuid: cartUuid }),
                    })];
                case 5:
                    _a = _c.sent(), data = _a.data, errors = _a.errors;
                    if (!data || errors) {
                        error = new Error("We could not complete that operation");
                        throw error;
                    }
                    notify("success", "Item added successfully");
                    onClose === null || onClose === void 0 ? void 0 : onClose();
                    setContextProps === null || setContextProps === void 0 ? void 0 : setContextProps({ cartItemCount: cookies.get("cartItemCount")[siteUuid] + 1 });
                    updateCartCount();
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _c.sent();
                    notify("error", "We could not complete that operation");
                    return [3 /*break*/, 7];
                case 7:
                    setContext === null || setContext === void 0 ? void 0 : setContext({ loading: false });
                    return [2 /*return*/];
            }
        });
    }); };
};
var useUpdateCartCount = function () {
    var menu = useContext(RestaurantContext).menu;
    var cookies = new Cookies();
    return function () {
        var _a;
        var cartItemCountCookie = cookies.get("cartItemCount");
        var siteUuid = (_a = menu === null || menu === void 0 ? void 0 : menu.restaurant) === null || _a === void 0 ? void 0 : _a.site_uuid;
        cartItemCountCookie[siteUuid] = cartItemCountCookie[siteUuid] + 1;
        cookies.set("cartItemCount", cartItemCountCookie, {
            path: "/",
            expires: new Date(Date.now() + 86400000),
        });
    };
};
