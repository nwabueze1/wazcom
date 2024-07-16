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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { usePluginInputGroup } from "../usePluginInputGroupStyles";
import { CheckBoxInput } from "../../../CheckBoxInput";
import clx from "classnames";
import { usePalletteStyles } from "./usePalletteStyles";
export var FormikMultiChoice = function (_a) {
    var _b, _c, _d;
    var className = _a.className, classNames = _a.classNames, isRequired = _a.isRequired, options = _a.options, formikProps = _a.formikProps, props = __rest(_a, ["className", "classNames", "isRequired", "options", "formikProps"]);
    var classes = usePluginInputGroup();
    var isError = ((_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _b === void 0 ? void 0 : _b[props === null || props === void 0 ? void 0 : props.name]) && ((_c = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _c === void 0 ? void 0 : _c[props === null || props === void 0 ? void 0 : props.name]);
    var errorMessage = (_d = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _d === void 0 ? void 0 : _d[props === null || props === void 0 ? void 0 : props.name];
    var palletteStyles = usePalletteStyles(props === null || props === void 0 ? void 0 : props.pallette);
    var renderOptions = function () {
        return options === null || options === void 0 ? void 0 : options.map(function (option, index) {
            var _a, _b, _c;
            var id = (props === null || props === void 0 ? void 0 : props.name) + (option === null || option === void 0 ? void 0 : option.value);
            var hasValue = (props === null || props === void 0 ? void 0 : props.multiple)
                ? (_b = (_a = formikProps === null || formikProps === void 0 ? void 0 : formikProps.values) === null || _a === void 0 ? void 0 : _a[props === null || props === void 0 ? void 0 : props.name]) === null || _b === void 0 ? void 0 : _b.includes(option === null || option === void 0 ? void 0 : option.value)
                : (_c = formikProps === null || formikProps === void 0 ? void 0 : formikProps.values) === null || _c === void 0 ? void 0 : _c[props === null || props === void 0 ? void 0 : props.name];
            var handleChange = function (e) {
                var _a, _b;
                var isChecked = e.value;
                if (!props.multiple) {
                    formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue(props.name, isChecked ? option.value : null);
                }
                else {
                    var values = isChecked
                        ? __spreadArray(__spreadArray([], __read((_a = formikProps === null || formikProps === void 0 ? void 0 : formikProps.values) === null || _a === void 0 ? void 0 : _a[props.name]), false), [option.value], false) : (_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.values) === null || _b === void 0 ? void 0 : _b[props.name].filter(function (value) { return value !== option.value; });
                    formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue(props.name, values);
                }
            };
            return (_jsx(CheckBoxInput, { onChange: handleChange, name: props === null || props === void 0 ? void 0 : props.name, value: hasValue, id: id, onBlur: formikProps === null || formikProps === void 0 ? void 0 : formikProps.handleBlur, classNames: __assign(__assign({}, classNames), { checkBoxInput: clx(classes.checkBox, classNames === null || classNames === void 0 ? void 0 : classNames.checkboxInput), label: clx(classes.checkBoxLabel, palletteStyles === null || palletteStyles === void 0 ? void 0 : palletteStyles.input, classNames === null || classNames === void 0 ? void 0 : classNames.label), input: clx(palletteStyles === null || palletteStyles === void 0 ? void 0 : palletteStyles.input, classNames === null || classNames === void 0 ? void 0 : classNames.input), root: clx(palletteStyles === null || palletteStyles === void 0 ? void 0 : palletteStyles.root, classNames === null || classNames === void 0 ? void 0 : classNames.root) }), label: option.label, className: clx(classes.checkboxInputOptionContainer, classNames === null || classNames === void 0 ? void 0 : classNames.optionContainer) }, index));
        });
    };
    return (_jsxs("div", { className: className, children: [_jsxs("div", { className: clx(classes.fieldSet, isError && "error", classNames === null || classNames === void 0 ? void 0 : classNames.fieldset), children: [_jsxs("p", { className: clx(classes.legend, palletteStyles === null || palletteStyles === void 0 ? void 0 : palletteStyles.label, classNames === null || classNames === void 0 ? void 0 : classNames.legend), children: [props.placeholder, " ", isRequired && _jsx("sup", { children: "*" })] }), renderOptions()] }), isError && errorMessage && (_jsx("span", { className: clx(classes.errorMessage, classNames === null || classNames === void 0 ? void 0 : classNames.errorMessage), children: errorMessage }))] }));
};
