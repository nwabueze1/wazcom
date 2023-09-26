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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useField } from "formik";
import clx from "classnames";
import PhoneNumber from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RadioButtonGroup, TextArea, TextField, } from "./TextField";
import { SelectInput } from "../../SelectInput";
import { useTextFieldStyles } from "./TextField/useTextFieldStyles";
export var RadioButtonFormik = function (_a) {
    var label = _a.label, control = _a.control, multiple = _a.multiple, classNames = _a.classNames, props = __rest(_a, ["label", "control", "multiple", "classNames"]);
    var _b = __read(useField(__assign(__assign({}, props), { type: control })), 1), field = _b[0];
    var classes = useTextFieldStyles();
    return (_jsxs("label", __assign({ className: clx(classes.radioLabel, classNames === null || classNames === void 0 ? void 0 : classNames.radioOrCheckboxLabel), htmlFor: label }, { children: [_jsx("input", __assign({}, field, { type: control, multiple: multiple, id: label, className: classNames === null || classNames === void 0 ? void 0 : classNames.radioOrCheckBox })), " ", _jsx("span", { children: label })] })));
};
export var FormikTextInput = function (_a) {
    var className = _a.className, isRequired = _a.isRequired, classNames = _a.classNames, props = __rest(_a, ["className", "isRequired", "classNames"]);
    var _b = __read(useField(props), 2), field = _b[0], meta = _b[1];
    return (_jsx(TextField, __assign({}, field, { classNames: classNames, className: className, isError: (meta.touched && meta.error), errorMessage: meta.touched ? meta.error : "", placeholder: props.placeholder || props.name, isRequired: isRequired, type: props === null || props === void 0 ? void 0 : props.type })));
};
export var FormikPhoneNumber = function (_a) {
    var _b, _c, _d, _e;
    var default_country = _a.default_country, classNames = _a.classNames, formikProps = _a.formikProps, name = _a.name;
    var classes = useTextFieldStyles();
    var isInvalid = ((_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _b === void 0 ? void 0 : _b[name]) && ((_c = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _c === void 0 ? void 0 : _c[name]);
    return (_jsxs("div", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.root }, { children: [_jsx("label", __assign({ className: clx(classes.legend, classNames === null || classNames === void 0 ? void 0 : classNames.label) }, { children: name })), _jsx(PhoneNumber, { country: default_country.toLowerCase(), onChange: function (e) { return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue(name, e); }, onBlur: formikProps === null || formikProps === void 0 ? void 0 : formikProps.handleBlur, onFocus: function () { return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldTouched(name, true); }, containerClass: clx(classes.phoneContainerClass, classNames === null || classNames === void 0 ? void 0 : classNames.phoneNumberInputContainer, isInvalid && "error"), value: (_d = formikProps === null || formikProps === void 0 ? void 0 : formikProps.values) === null || _d === void 0 ? void 0 : _d[name], dropdownClass: classNames === null || classNames === void 0 ? void 0 : classNames.dropdownClass, buttonClass: classNames === null || classNames === void 0 ? void 0 : classNames.buttonClass, inputClass: clx(classes.phoneInput, classNames === null || classNames === void 0 ? void 0 : classNames.phoneNumberInput) }), isInvalid && (_jsx("span", __assign({ className: classes.errorMessage }, { children: (_e = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _e === void 0 ? void 0 : _e[name] })))] })));
};
export var FormikTextArea = function (_a) {
    var className = _a.className, isRequired = _a.isRequired, classNames = _a.classNames, props = __rest(_a, ["className", "isRequired", "classNames"]);
    var _b = __read(useField(props), 2), field = _b[0], meta = _b[1];
    return (_jsx(TextArea, __assign({}, field, { classNames: classNames, className: className, isError: (meta.touched && meta.error), errorMessage: meta.touched ? meta.error : "", placeholder: props.name, isRequired: isRequired })));
};
export var FormikRadio = function (_a) {
    var className = _a.className, classNames = _a.classNames, isRequired = _a.isRequired, _b = _a.control, control = _b === void 0 ? "radio" : _b, options = _a.options, props = __rest(_a, ["className", "classNames", "isRequired", "control", "options"]);
    var _c = __read(useField(__assign(__assign({}, props), { type: "radio" })), 2), meta = _c[1];
    var inputProps = {
        options: options,
        control: control,
        className: className,
        isRequired: isRequired,
        isError: (meta.touched && meta.error),
        errorMessage: meta.error ? meta.error : "",
        placeholder: props.name,
    };
    return (_jsx(RadioButtonGroup, __assign({}, inputProps, { classNames: classNames }, { children: options.map(function (_a, index) {
            var label = _a.label, value = _a.value;
            return (_jsx(RadioButtonFormik, { name: props.name, value: value, label: label, control: control, classNames: classNames }, index));
        }) })));
};
export var FormikSelect = function (_a) {
    var _b, _c;
    var classNames = _a.classNames, className = _a.className, options = _a.options, name = _a.name, formikProps = _a.formikProps;
    var isInvalid = ((_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _b === void 0 ? void 0 : _b[name]) && ((_c = formikProps === null || formikProps === void 0 ? void 0 : formikProps["errors"]) === null || _c === void 0 ? void 0 : _c[name]);
    return (_jsx(SelectInput, { options: options, name: name, isError: isInvalid, helperText: isInvalid, onChange: function (_a) {
            var value = _a.value;
            return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue(name, value);
        }, onBlur: function () { return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldTouched(name, true); }, label: name, containerClass: className, classNames: classNames }));
};
