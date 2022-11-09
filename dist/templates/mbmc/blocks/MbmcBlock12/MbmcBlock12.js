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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useMbmcBlock12Styles } from "./styles";
import { MbmcButton } from "../../components/MbmcButton/MbmcButton";
import { useState } from "react";
import { TextArea, TextInput } from "io";
import { Loader } from "core";
export var MbmcBlock12 = function (_a) {
    var layout = _a.layout, heading = _a.heading, description = _a.description, ctas = _a.ctas, handleSend = _a.handleSend;
    var classes = useMbmcBlock12Styles({ flexDirection: layout !== null && layout !== void 0 ? layout : "row" });
    var _b = __read(useState(false), 2), loading = _b[0], setLoading = _b[1];
    var _c = __read(useState(false), 2), hasError = _c[0], setHasError = _c[1];
    var _d = __read(useState(false), 2), isSubmitted = _d[0], setIsSubmitted = _d[1];
    var _e = __read(useState({
        name: "",
        email: "",
        phoneNo: "",
        message: "",
    }), 2), formData = _e[0], setFormData = _e[1];
    var displayCtas = function () {
        return (ctas !== null && ctas !== void 0 ? ctas : []).map(function (_a, index) {
            var text = _a.text, rIcon = _a.rIcon, lIcon = _a.lIcon, props = __rest(_a, ["text", "rIcon", "lIcon"]);
            return (_jsx("div", __assign({ className: classes.btnParent }, { children: _jsxs(MbmcButton, __assign({}, props, { children: [lIcon, " ", text, " ", rIcon] }), void 0) }), index));
        });
    };
    var handleChange = function (data) {
        var name = data.name, value = data.value;
        setHasError(false);
        setIsSubmitted(false);
        setFormData(function (prev) {
            var _a;
            return __assign(__assign({}, prev), (_a = {}, _a[name] = value, _a));
        });
    };
    var handleClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var hasEmptyField, name_1, email, phoneNo, message, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hasEmptyField = Object.values(formData).includes("");
                    if (hasEmptyField) {
                        return [2 /*return*/, setHasError(true)];
                    }
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    name_1 = formData.name, email = formData.email, phoneNo = formData.phoneNo, message = formData.message;
                    return [4 /*yield*/, (handleSend === null || handleSend === void 0 ? void 0 : handleSend(name_1, email, phoneNo, message))];
                case 2:
                    _a.sent();
                    setFormData({
                        name: "",
                        email: "",
                        phoneNo: "",
                        message: "",
                    });
                    setIsSubmitted(true);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4:
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: classes.container }, { children: [_jsxs("div", __assign({ className: classes.headerContent }, { children: [_jsx("h3", __assign({ className: classes.headerTitle }, { children: heading }), void 0), _jsx("div", __assign({ className: classes.headerParagraph }, { children: _jsx("p", __assign({ className: classes.headerDescription }, { children: description }), void 0) }), void 0), _jsx("div", __assign({ className: classes.headerBtnContainer }, { children: displayCtas() }), void 0)] }), void 0), _jsx("div", __assign({ className: classes.demarcationContainer }, { children: _jsx("span", __assign({ className: classes.demarcation }, { children: "OR" }), void 0) }), void 0), _jsx("div", __assign({ className: classes.formContainer }, { children: _jsxs("form", __assign({ action: "", className: classes.form }, { children: [_jsx(TextInput, { placeholder: "Name", name: "name", value: formData.name, onChange: handleChange, className: classes.formInput, classNames: { textInput: classes.formTextInput } }, void 0), _jsx(TextInput, { placeholder: "Email address", type: "email", name: "email", value: formData.email, onChange: handleChange, className: classes.formInput, classNames: { textInput: classes.formTextInput } }, void 0), _jsx(TextInput, { placeholder: "Phone number", type: "phone", name: "phoneNo", value: formData.phoneNo, onChange: handleChange, className: classes.formInput, classNames: { textInput: classes.formTextInput } }, void 0), _jsx(TextArea, { placeholder: "Send a message", name: "message", value: formData.message, onChange: handleChange, className: classes.formInput, classNames: { textArea: classes.formTextArea }, minRows: 12 }, void 0), _jsx(MbmcButton, __assign({ onClick: handleClick, className: classes.formButton, size: "sm", type: "SECONDARY" }, { children: "Send" }), void 0), hasError && (_jsx("p", __assign({ className: classes.error }, { children: "*Error Occurred, please fill all fields with correct data and try again" }), void 0)), isSubmitted && (_jsx("p", __assign({ className: classes.success }, { children: "Message sent successfully" }), void 0)), loading && _jsx(Loader, {}, void 0)] }), void 0) }), void 0)] }), void 0) }), void 0));
};
