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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Form, Formik } from "formik";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { buildValidationSchema } from "./BuildValidationSchema";
import { getInitialFormValues } from "./getInitialFormValues";
import { createResponse } from "./gql/actions/createResponse";
import { QuestionsInput } from "./QuestionInput";
import { usePluginFormStyles } from "./usePluginFormStyles";
export var PlugInForm = forwardRef(function (props, ref) {
    var questions = props.form.questions, form_uuid = props.form_uuid, setLoading = props.setLoading, className = props.className, submitButton = props.submitButton, classNames = props.classNames, _a = props.style, style = _a === void 0 ? { display: "grid" } : _a, onNotify = props.onNotify, onFormSubmitted = props.onFormSubmitted, apolloClient = props.apolloClient;
    var initialFormState = getInitialFormValues((questions !== null && questions !== void 0 ? questions : []));
    var validationSchema = buildValidationSchema((questions !== null && questions !== void 0 ? questions : []));
    var classes = usePluginFormStyles();
    var submitButtonRef = useRef(null);
    useImperativeHandle(ref, function () {
        return {
            submit: function () { var _a; return (_a = submitButtonRef.current) === null || _a === void 0 ? void 0 : _a.click(); },
        };
    });
    var handleSubmit = function (values, formikHelpers) { return __awaiter(void 0, void 0, void 0, function () {
        var errorMessage, _a, errors, data, submission_text, ex_1;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    errorMessage = "You need to select a valid form";
                    if (!form_uuid) {
                        return [2 /*return*/, onNotify === null || onNotify === void 0 ? void 0 : onNotify("error", errorMessage)];
                    }
                    setLoading === null || setLoading === void 0 ? void 0 : setLoading(true);
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, createResponse(apolloClient, form_uuid, values)];
                case 2:
                    _a = _d.sent(), errors = _a.errors, data = _a.data;
                    if (errors) {
                        errorMessage = "Failed to create form";
                        return [2 /*return*/, onNotify === null || onNotify === void 0 ? void 0 : onNotify("error", errorMessage)];
                    }
                    submission_text = (_b = data === null || data === void 0 ? void 0 : data.createResponse) === null || _b === void 0 ? void 0 : _b.submission_text;
                    onNotify === null || onNotify === void 0 ? void 0 : onNotify("success", submission_text);
                    formikHelpers.resetForm();
                    onFormSubmitted === null || onFormSubmitted === void 0 ? void 0 : onFormSubmitted((_c = data === null || data === void 0 ? void 0 : data.createResponse) === null || _c === void 0 ? void 0 : _c.data);
                    return [3 /*break*/, 5];
                case 3:
                    ex_1 = _d.sent();
                    onNotify === null || onNotify === void 0 ? void 0 : onNotify("error", errorMessage);
                    return [3 /*break*/, 5];
                case 4:
                    setLoading === null || setLoading === void 0 ? void 0 : setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(_Fragment, { children: _jsx(Formik, __assign({ validationSchema: validationSchema, initialValues: initialFormState, onSubmit: handleSubmit }, { children: function (props) { return (_jsxs(Form, __assign({ style: style }, { children: [_jsx("div", __assign({ className: className }, { children: (questions !== null && questions !== void 0 ? questions : []).map(function (_a, index) {
                            var question = _a.question, fields = _a.fields, type = _a.type, is_required = _a.is_required;
                            return (_jsx(QuestionsInput, { name: question, fields: fields, type: type, is_required: is_required, classNames: classNames, formikProps: props }, index));
                        }) })), !submitButton ? (_jsx("button", { className: classes.submitButton, type: "submit", ref: submitButtonRef })) : (submitButton)] }))); } })) }));
});
PlugInForm.displayName = "PluginForm";
