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
import { useContext } from "react";
import { handleInputBlur, handleInputChange } from "../../../../../components/Form";
import { useDeliveryStyles } from "../styles";
import { pickupSchema } from "../validators";
import { useUpdateGuest } from "../hooks";
import { RestaurantContext } from "../../../../../contexts";
export var usePickupConfig = function () {
    var cart = useContext(RestaurantContext).cart;
    var updateGuest = useUpdateGuest();
    return function (onSubmission) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return {
            initialValues: {
                email: (_b = (_a = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _a === void 0 ? void 0 : _a.email) !== null && _b !== void 0 ? _b : "",
                firstname: (_d = (_c = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _c === void 0 ? void 0 : _c.firstname) !== null && _d !== void 0 ? _d : "",
                lastname: (_f = (_e = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _e === void 0 ? void 0 : _e.lastname) !== null && _f !== void 0 ? _f : "",
                phone: (_h = (_g = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _g === void 0 ? void 0 : _g.phone) !== null && _h !== void 0 ? _h : "",
            },
            validationSchema: pickupSchema,
            onSubmit: function (variables) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, updateGuest(variables, onSubmission, true)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); },
        };
    };
};
export var usePickupControls = function () {
    var classes = useDeliveryStyles();
    return function (formik) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        return [
            {
                type: "groupedInput",
                properties: {
                    name: "PERSONAL INFORMATION",
                    controls: [
                        {
                            type: "text",
                            properties: {
                                name: "email",
                                placeholder: "Email Address",
                                type: "email",
                                onChange: function (_a) {
                                    var value = _a.value;
                                    return handleInputChange(formik, "email", value);
                                },
                                onBlur: function () {
                                    handleInputBlur(formik, "email");
                                },
                                classNames: {
                                    textInput: classes.deliveryInput,
                                    feedback: classes.deliveryFeedback,
                                },
                                className: classes.deliveryInputParent,
                                value: formik.values.email,
                                errors: [{ message: ((_a = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _a === void 0 ? void 0 : _a.email) && Boolean((_b = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _b === void 0 ? void 0 : _b.email) }],
                                feedback: ((_c = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _c === void 0 ? void 0 : _c.email) && ((_d = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _d === void 0 ? void 0 : _d.email)
                                    ? { status: "error", text: formik.errors.email }
                                    : undefined,
                            },
                        },
                        {
                            type: "text",
                            properties: {
                                name: "firstname",
                                placeholder: "First name",
                                type: "text",
                                onChange: function (_a) {
                                    var value = _a.value;
                                    return handleInputChange(formik, "firstname", value);
                                },
                                onBlur: function () {
                                    handleInputBlur(formik, "firstname");
                                },
                                classNames: {
                                    textInput: classes.deliveryInput,
                                    feedback: classes.deliveryFeedback,
                                },
                                className: classes.deliveryInputParent,
                                value: formik.values.firstname,
                                errors: [{ message: ((_e = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _e === void 0 ? void 0 : _e.firstname) && Boolean((_f = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _f === void 0 ? void 0 : _f.firstname) }],
                                feedback: ((_g = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _g === void 0 ? void 0 : _g.firstname) && ((_h = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _h === void 0 ? void 0 : _h.firstname)
                                    ? { status: "error", text: formik.errors.firstname }
                                    : undefined,
                            },
                        },
                        {
                            type: "text",
                            properties: {
                                name: "lastname",
                                placeholder: "Last name",
                                type: "text",
                                onChange: function (_a) {
                                    var value = _a.value;
                                    return handleInputChange(formik, "lastname", value);
                                },
                                onBlur: function () {
                                    handleInputBlur(formik, "lastname");
                                },
                                classNames: {
                                    textInput: classes.deliveryInput,
                                    feedback: classes.deliveryFeedback,
                                },
                                className: classes.deliveryInputParent,
                                value: formik.values.lastname,
                                errors: [{ message: ((_j = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _j === void 0 ? void 0 : _j.lastname) && Boolean((_k = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _k === void 0 ? void 0 : _k.lastname) }],
                                feedback: ((_l = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _l === void 0 ? void 0 : _l.lastname) && ((_m = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _m === void 0 ? void 0 : _m.lastname)
                                    ? { status: "error", text: formik.errors.lastname }
                                    : undefined,
                            },
                        },
                        {
                            type: "text",
                            properties: {
                                name: "phone",
                                placeholder: "Phone number",
                                type: "tel",
                                onChange: function (_a) {
                                    var value = _a.value;
                                    return handleInputChange(formik, "phone", value);
                                },
                                onBlur: function () {
                                    handleInputBlur(formik, "phone");
                                },
                                classNames: {
                                    textInput: classes.deliveryInput,
                                    feedback: classes.deliveryFeedback,
                                },
                                className: classes.deliveryInputParent,
                                value: formik.values.phone,
                                errors: [{ message: ((_o = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _o === void 0 ? void 0 : _o.phone) && Boolean((_p = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _p === void 0 ? void 0 : _p.phone) }],
                                feedback: ((_q = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _q === void 0 ? void 0 : _q.phone) && ((_r = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _r === void 0 ? void 0 : _r.phone)
                                    ? { status: "error", text: formik.errors.phone }
                                    : undefined,
                            },
                        },
                    ],
                },
            },
        ];
    };
};
