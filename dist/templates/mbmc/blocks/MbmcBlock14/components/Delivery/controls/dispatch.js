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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
import { handleInputBlur, handleInputChange } from "../../../../../components/Form";
import { useDeliveryStyles } from "../styles";
import { dispatchSchema } from "../validators";
import { useUpdateGuest, useCreateAddress, } from "../hooks";
import { RestaurantContext } from "../../../../../contexts";
import { usePickupConfig, usePickupControls } from "./pickup";
export var useDispatchConfig = function () {
    var cart = useContext(RestaurantContext).cart;
    var getPickupConfig = usePickupConfig();
    var updateGuest = useUpdateGuest();
    var createAddress = useCreateAddress();
    return function (onSubmission) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        var pickupConfig = getPickupConfig();
        return {
            initialValues: __assign(__assign({}, pickupConfig.initialValues), { addressline1: (_c = (_b = (_a = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _a === void 0 ? void 0 : _a.address) === null || _b === void 0 ? void 0 : _b.addressline1) !== null && _c !== void 0 ? _c : "", city: (_f = (_e = (_d = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _d === void 0 ? void 0 : _d.address) === null || _e === void 0 ? void 0 : _e.city) !== null && _f !== void 0 ? _f : "", state: (_j = (_h = (_g = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _g === void 0 ? void 0 : _g.address) === null || _h === void 0 ? void 0 : _h.state) !== null && _j !== void 0 ? _j : "", country: (_m = (_l = (_k = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _k === void 0 ? void 0 : _k.address) === null || _l === void 0 ? void 0 : _l.country) !== null && _m !== void 0 ? _m : "", postcode: (_q = (_p = (_o = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _o === void 0 ? void 0 : _o.address) === null || _p === void 0 ? void 0 : _p.postcode) !== null && _q !== void 0 ? _q : "" }),
            validationSchema: dispatchSchema,
            onSubmit: function (variables) { return __awaiter(void 0, void 0, void 0, function () {
                var email, firstname, lastname, phone, rest, guest, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            email = variables.email, firstname = variables.firstname, lastname = variables.lastname, phone = variables.phone, rest = __rest(variables, ["email", "firstname", "lastname", "phone"]);
                            return [4 /*yield*/, updateGuest({ email: email, firstname: firstname, lastname: lastname, phone: phone })];
                        case 1:
                            guest = _b.sent();
                            _a = guest;
                            if (!_a) return [3 /*break*/, 3];
                            return [4 /*yield*/, createAddress(__assign({}, rest), guest, onSubmission)];
                        case 2:
                            _a = (_b.sent());
                            _b.label = 3;
                        case 3:
                            _a;
                            return [2 /*return*/];
                    }
                });
            }); },
        };
    };
};
export var useDispatchControls = function () {
    var classes = useDeliveryStyles();
    var getPickupControls = usePickupControls();
    return function (formik) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
        var pickupControls = getPickupControls(formik);
        return __spreadArray(__spreadArray([], __read(pickupControls), false), [
            {
                type: "groupedInput",
                properties: {
                    name: "SHIPPING INFORMATION",
                    controls: [
                        {
                            type: "text",
                            properties: {
                                name: "addressline1",
                                placeholder: "House Address",
                                type: "text",
                                onChange: function (_a) {
                                    var value = _a.value;
                                    return handleInputChange(formik, "addressline1", value);
                                },
                                onBlur: function () {
                                    handleInputBlur(formik, "addressline1");
                                },
                                classNames: {
                                    textInput: classes.deliveryInput,
                                    feedback: classes.deliveryFeedback,
                                },
                                className: classes.deliveryInputParent,
                                value: formik.values.addressline1,
                                error: ((_b = (_a = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _a === void 0 ? void 0 : _a.guest) === null || _b === void 0 ? void 0 : _b.addressline1) &&
                                    Boolean((_d = (_c = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _c === void 0 ? void 0 : _c.guest) === null || _d === void 0 ? void 0 : _d.addressline1),
                                feedback: ((_f = (_e = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _e === void 0 ? void 0 : _e.guest) === null || _f === void 0 ? void 0 : _f.addressline1) && ((_h = (_g = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _g === void 0 ? void 0 : _g.guest) === null || _h === void 0 ? void 0 : _h.addressline1)
                                    ? { status: "error", text: formik.errors.addressline1 }
                                    : undefined,
                            },
                        },
                        {
                            type: "text",
                            properties: {
                                name: "city",
                                placeholder: "City",
                                type: "text",
                                onChange: function (_a) {
                                    var value = _a.value;
                                    return handleInputChange(formik, "city", value);
                                },
                                onBlur: function () {
                                    handleInputBlur(formik, "city");
                                },
                                classNames: {
                                    textInput: classes.deliveryInput,
                                    feedback: classes.deliveryFeedback,
                                },
                                className: classes.deliveryInputParent,
                                value: formik.values.city,
                                error: ((_j = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _j === void 0 ? void 0 : _j.city) && Boolean((_k = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _k === void 0 ? void 0 : _k.city),
                                feedback: ((_l = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _l === void 0 ? void 0 : _l.city) && ((_m = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _m === void 0 ? void 0 : _m.city)
                                    ? { status: "error", text: formik.errors.city }
                                    : undefined,
                            },
                        },
                        {
                            type: "text",
                            properties: {
                                name: "state",
                                placeholder: "State",
                                type: "text",
                                onChange: function (_a) {
                                    var value = _a.value;
                                    return handleInputChange(formik, "state", value);
                                },
                                onBlur: function () {
                                    handleInputBlur(formik, "state");
                                },
                                classNames: {
                                    textInput: classes.deliveryInput,
                                    feedback: classes.deliveryFeedback,
                                },
                                className: classes.deliveryInputParent,
                                value: formik.values.state,
                                error: ((_o = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _o === void 0 ? void 0 : _o.state) && Boolean((_p = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _p === void 0 ? void 0 : _p.state),
                                feedback: ((_q = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _q === void 0 ? void 0 : _q.state) && ((_r = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _r === void 0 ? void 0 : _r.state)
                                    ? { status: "error", text: formik.errors.state }
                                    : undefined,
                            },
                        },
                        {
                            type: "text",
                            properties: {
                                name: "country",
                                placeholder: "Country",
                                type: "text",
                                onChange: function (_a) {
                                    var value = _a.value;
                                    return handleInputChange(formik, "country", value);
                                },
                                onBlur: function () {
                                    handleInputBlur(formik, "country");
                                },
                                classNames: {
                                    textInput: classes.deliveryInput,
                                    feedback: classes.deliveryFeedback,
                                },
                                className: classes.deliveryInputParent,
                                value: formik.values.error,
                                error: ((_s = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _s === void 0 ? void 0 : _s.country) && Boolean((_t = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _t === void 0 ? void 0 : _t.country),
                                feedback: ((_u = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _u === void 0 ? void 0 : _u.country) && ((_v = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _v === void 0 ? void 0 : _v.country)
                                    ? { status: "error", text: formik.errors.country }
                                    : undefined,
                            },
                        },
                        {
                            type: "text",
                            properties: {
                                name: "postcode",
                                placeholder: "Postal Code",
                                type: "text",
                                onChange: function (_a) {
                                    var value = _a.value;
                                    return handleInputChange(formik, "postcode", value);
                                },
                                onBlur: function () {
                                    handleInputBlur(formik, "postcode");
                                },
                                classNames: {
                                    textInput: classes.deliveryInput,
                                    feedback: classes.deliveryFeedback,
                                },
                                className: classes.deliveryInputParent,
                                value: formik.values.postcode,
                                error: ((_w = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _w === void 0 ? void 0 : _w.postcode) && Boolean((_x = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _x === void 0 ? void 0 : _x.postcode),
                                feedback: ((_y = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _y === void 0 ? void 0 : _y.postcode) && ((_z = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _z === void 0 ? void 0 : _z.postcode)
                                    ? { status: "error", text: formik.errors.postcode }
                                    : undefined,
                            },
                        },
                    ],
                },
            },
        ], false);
    };
};
