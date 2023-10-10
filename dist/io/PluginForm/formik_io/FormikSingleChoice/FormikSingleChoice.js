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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { usePluginInputGroup } from "../usePluginInputGroupStyles";
import clx from "classnames";
import { RadioButtonInput } from "../../../RadioButtonInput";
export var FormikSingleChoice = function (_a) {
    var _b, _c, _d;
    var className = _a.className, classNames = _a.classNames, isRequired = _a.isRequired, options = _a.options, formikProps = _a.formikProps, props = __rest(_a, ["className", "classNames", "isRequired", "options", "formikProps"]);
    var classes = usePluginInputGroup();
    var isError = ((_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _b === void 0 ? void 0 : _b[props.name]) && ((_c = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _c === void 0 ? void 0 : _c[props.name]);
    var errorMessage = (_d = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _d === void 0 ? void 0 : _d[props.name];
    var radioInputClass = {
        radioButtonInput: classNames === null || classNames === void 0 ? void 0 : classNames.radioButtonInput,
        label: clx(classes.checkBoxLabel, classNames === null || classNames === void 0 ? void 0 : classNames.label),
    };
    var renderOptions = function () {
        return options.map(function (_a, index) {
            var _b;
            var label = _a.label, value = _a.value;
            var handleChange = function (e) {
                formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue(props.name, e.value);
            };
            return (_jsx(RadioButtonInput, { label: label, onChange: handleChange, name: props.name, isBooleanValue: false, value: value, checked: ((_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.values) === null || _b === void 0 ? void 0 : _b[props.name]) === value, classNames: radioInputClass, onBlur: function () { return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldTouched(props === null || props === void 0 ? void 0 : props.name, true); }, className: clx(classes.radioButtonOptionContainer, classNames === null || classNames === void 0 ? void 0 : classNames.optionContainer) }, index));
        });
    };
    return (_jsxs("div", __assign({ className: className }, { children: [_jsxs("fieldset", __assign({ className: clx(classes.fieldSet, isError && "error", classNames === null || classNames === void 0 ? void 0 : classNames.fieldset) }, { children: [_jsxs("legend", __assign({ className: clx(classes.legend, classNames === null || classNames === void 0 ? void 0 : classNames.legend) }, { children: [props.name, " ", isRequired && _jsx("sup", { children: "*" })] })), renderOptions()] })), isError && errorMessage && (_jsx("span", __assign({ className: clx(classes.errorMessage, classNames === null || classNames === void 0 ? void 0 : classNames.errorMessage) }, { children: errorMessage })))] })));
};
