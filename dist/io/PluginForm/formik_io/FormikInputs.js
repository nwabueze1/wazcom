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
import clx from "classnames";
import { CheckBoxInput, PhoneNumberInput, SelectInput, TextArea, TextInput, RadioButtonInput, } from "../../";
import { usePluginInputGroup } from "./usePluginInputGroupStyles";
export var FormikTextInput = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var className = _a.className, isRequired = _a.isRequired, name = _a.name, type = _a.type, formikProps = _a.formikProps, classNames = _a.classNames, placeholder = _a.placeholder, _q = _a.is_address, is_address = _q === void 0 ? false : _q, props = __rest(_a, ["className", "isRequired", "name", "type", "formikProps", "classNames", "placeholder", "is_address"]);
    var names = name.split(".");
    var isAddressTouched = (_c = (_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _b === void 0 ? void 0 : _b[names[0]]) === null || _c === void 0 ? void 0 : _c[names[1]];
    var addressError = (_e = (_d = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _d === void 0 ? void 0 : _d[names[0]]) === null || _e === void 0 ? void 0 : _e[names[1]];
    var isError = is_address
        ? (isAddressTouched && addressError)
        : (((_f = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _f === void 0 ? void 0 : _f[name]) && ((_g = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _g === void 0 ? void 0 : _g[name]));
    var errorMessage = is_address
        ? isAddressTouched && addressError
        : ((_h = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _h === void 0 ? void 0 : _h[name]) && ((_j = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _j === void 0 ? void 0 : _j[name]);
    return (_jsx(TextInput, __assign({}, props, { name: name, onChange: function (_a) {
            var value = _a.value;
            return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue(name, value);
        }, onBlur: function () { return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldTouched(name, true); }, isError: isError, helperText: errorMessage ? errorMessage : undefined, placeholder: "".concat(placeholder, " ").concat(isRequired && "*"), value: (_k = formikProps === null || formikProps === void 0 ? void 0 : formikProps.values) === null || _k === void 0 ? void 0 : _k[name], className: className, classNames: {
            input: (_l = classNames === null || classNames === void 0 ? void 0 : classNames.inputContainer) !== null && _l !== void 0 ? _l : "",
            inputField: (_m = classNames === null || classNames === void 0 ? void 0 : classNames.input) !== null && _m !== void 0 ? _m : "",
            label: (_o = classNames === null || classNames === void 0 ? void 0 : classNames.label) !== null && _o !== void 0 ? _o : "",
            errorMessage: (_p = classNames === null || classNames === void 0 ? void 0 : classNames.errorMessage) !== null && _p !== void 0 ? _p : "",
        }, type: type, required: isRequired })));
};
export var FormikPhoneNumber = function (_a) {
    var _b, _c, _d, _e;
    var default_country = _a.default_country, classNames = _a.classNames, formikProps = _a.formikProps, name = _a.name;
    var classes = usePluginInputGroup();
    var isInvalid = ((_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _b === void 0 ? void 0 : _b[name]) && ((_c = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _c === void 0 ? void 0 : _c[name]);
    return (_jsxs("div", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.root }, { children: [_jsx("label", __assign({ className: clx(classes.legend, classNames === null || classNames === void 0 ? void 0 : classNames.label) }, { children: name })), _jsx(PhoneNumberInput, { country: default_country.toLowerCase(), onChange: function (e) { return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue(name, e.value); }, onBlur: function () { return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldTouched(name, true); }, classNames: {
                    container: clx(classes.phoneContainerClass, classNames === null || classNames === void 0 ? void 0 : classNames.phoneNumberInputContainer, isInvalid && "error"),
                    dropdown: classNames === null || classNames === void 0 ? void 0 : classNames.dropdownClass,
                    input: clx(classes.phoneInput, classNames === null || classNames === void 0 ? void 0 : classNames.phoneNumberInput),
                    root: classNames === null || classNames === void 0 ? void 0 : classNames.phoneNumberInputRoot,
                    button: classNames === null || classNames === void 0 ? void 0 : classNames.buttonClass,
                }, value: (_d = formikProps === null || formikProps === void 0 ? void 0 : formikProps.values) === null || _d === void 0 ? void 0 : _d[name] }), isInvalid && (_jsx("span", __assign({ className: classes.errorMessage }, { children: (_e = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _e === void 0 ? void 0 : _e[name] })))] })));
};
export var FormikTextArea = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var className = _a.className, isRequired = _a.isRequired, classNames = _a.classNames, name = _a.name, formikProps = _a.formikProps, rows = _a.rows;
    return (_jsx(TextArea, { rows: Number(rows), className: className, placeholder: "".concat(name, " ").concat(isRequired && "*"), value: (_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.values) === null || _b === void 0 ? void 0 : _b[name], onChange: function (_a) {
            var value = _a.value;
            return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue(name, value);
        }, onBlur: function () { return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldTouched(name, true); }, isError: (((_c = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _c === void 0 ? void 0 : _c[name]) && ((_d = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _d === void 0 ? void 0 : _d[name])), helperText: ((_e = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _e === void 0 ? void 0 : _e[name])
            ? (_f = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _f === void 0 ? void 0 : _f[name]
            : undefined, classNames: {
            textAreaContainer: (_g = classNames === null || classNames === void 0 ? void 0 : classNames.inputContainer) !== null && _g !== void 0 ? _g : "",
            input: (_h = classNames === null || classNames === void 0 ? void 0 : classNames.input) !== null && _h !== void 0 ? _h : "",
            helperTextError: (_j = classNames === null || classNames === void 0 ? void 0 : classNames.errorMessage) !== null && _j !== void 0 ? _j : "",
        } }));
};
export var FormikRadio = function (_a) {
    var _b, _c, _d;
    var className = _a.className, classNames = _a.classNames, isRequired = _a.isRequired, options = _a.options, formikProps = _a.formikProps, props = __rest(_a, ["className", "classNames", "isRequired", "options", "formikProps"]);
    var classes = usePluginInputGroup();
    var isError = ((_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _b === void 0 ? void 0 : _b[props.name]) && ((_c = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _c === void 0 ? void 0 : _c[props.name]);
    var errorMessage = (_d = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _d === void 0 ? void 0 : _d[props.name];
    var renderOptions = function () {
        return options.map(function (_a, index) {
            var _b;
            var label = _a.label, value = _a.value;
            var id = props.name + label;
            var handleChange = function (e) {
                formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue(props.name, e.value);
            };
            return (_jsxs("article", __assign({ className: clx(classes.radioButtonOptionContainer, classNames === null || classNames === void 0 ? void 0 : classNames.optionContainer) }, { children: [_jsx(RadioButtonInput, { id: id, onChange: handleChange, name: props.name, isBooleanValue: false, value: value, checked: ((_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.values) === null || _b === void 0 ? void 0 : _b[props.name]) === value, classNames: { radioButtonInput: classNames === null || classNames === void 0 ? void 0 : classNames.radioButtonInput }, onBlur: function () { return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldTouched(props === null || props === void 0 ? void 0 : props.name, true); } }), _jsx("label", __assign({ htmlFor: id, className: clx(classes.checkBoxLabel, classNames === null || classNames === void 0 ? void 0 : classNames.label) }, { children: label }))] }), index));
        });
    };
    return (_jsxs("div", __assign({ className: className }, { children: [_jsxs("fieldset", __assign({ className: clx(classes.fieldSet, isError && "error", classNames === null || classNames === void 0 ? void 0 : classNames.fieldset) }, { children: [_jsxs("legend", __assign({ className: clx(classes.legend, classNames === null || classNames === void 0 ? void 0 : classNames.legend) }, { children: [props.name, " ", isRequired && _jsx("sup", { children: "*" })] })), renderOptions()] })), isError && errorMessage && (_jsx("span", __assign({ className: clx(classes.errorMessage, classNames === null || classNames === void 0 ? void 0 : classNames.errorMessage) }, { children: errorMessage })))] })));
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
export var FormikCheckBox = function (_a) {
    var _b, _c, _d;
    var className = _a.className, classNames = _a.classNames, isRequired = _a.isRequired, options = _a.options, formikProps = _a.formikProps, props = __rest(_a, ["className", "classNames", "isRequired", "options", "formikProps"]);
    var classes = usePluginInputGroup();
    var isError = ((_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _b === void 0 ? void 0 : _b[props.name]) && ((_c = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _c === void 0 ? void 0 : _c[props.name]);
    var errorMessage = (_d = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _d === void 0 ? void 0 : _d[props.name];
    var renderOptions = function () {
        return options.map(function (option, index) {
            var _a, _b, _c;
            var id = props.name + option.value;
            var hasValue = props.multiple
                ? (_b = (_a = formikProps === null || formikProps === void 0 ? void 0 : formikProps.values) === null || _a === void 0 ? void 0 : _a[props === null || props === void 0 ? void 0 : props.name]) === null || _b === void 0 ? void 0 : _b.includes(option.value)
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
            return (_jsxs("article", __assign({ className: classes.checkboxInputOptionContainer }, { children: [_jsx(CheckBoxInput, { onChange: handleChange, name: props.name, value: hasValue, id: id, onBlur: formikProps === null || formikProps === void 0 ? void 0 : formikProps.handleBlur, classNames: {
                            checkBoxInput: clx(classes.checkBox, classNames === null || classNames === void 0 ? void 0 : classNames.checkboxInput),
                        } }), " ", _jsx("label", __assign({ htmlFor: id, className: clx(classes.checkBoxLabel, classNames === null || classNames === void 0 ? void 0 : classNames.label) }, { children: option.label }))] }), index));
        });
    };
    return (_jsxs("div", __assign({ className: className }, { children: [_jsxs("fieldset", __assign({ className: clx(classes.fieldSet, isError && "error", classNames === null || classNames === void 0 ? void 0 : classNames.fieldset) }, { children: [_jsxs("legend", __assign({ className: clx(classes.legend, classNames === null || classNames === void 0 ? void 0 : classNames.legend) }, { children: [props.name, " ", isRequired && _jsx("sup", { children: "*" })] })), renderOptions()] })), isError && errorMessage && (_jsx("span", __assign({ className: clx(classes.errorMessage, classNames === null || classNames === void 0 ? void 0 : classNames.errorMessage) }, { children: errorMessage })))] })));
};
