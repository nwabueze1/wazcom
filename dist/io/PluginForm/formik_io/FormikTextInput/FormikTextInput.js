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
import { jsx as _jsx } from "react/jsx-runtime";
import { TextInput } from "../../../TextInput";
import clx from "classnames";
import { usePalletteStyles } from "../";
export var FormikTextInput = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    var className = _a.className, isRequired = _a.isRequired, name = _a.name, type = _a.type, formikProps = _a.formikProps, classNames = _a.classNames, placeholder = _a.placeholder, _r = _a.is_address, is_address = _r === void 0 ? false : _r, props = __rest(_a, ["className", "isRequired", "name", "type", "formikProps", "classNames", "placeholder", "is_address"]);
    var names = is_address ? (_b = name === null || name === void 0 ? void 0 : name.split) === null || _b === void 0 ? void 0 : _b.call(name, ".") : [name];
    var isAddressTouched = is_address && ((_d = (_c = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _c === void 0 ? void 0 : _c[names === null || names === void 0 ? void 0 : names[0]]) === null || _d === void 0 ? void 0 : _d[names === null || names === void 0 ? void 0 : names[1]]);
    var addressError = (_f = (_e = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _e === void 0 ? void 0 : _e[names[0]]) === null || _f === void 0 ? void 0 : _f[names[1]];
    var paletteStyles = usePalletteStyles(props === null || props === void 0 ? void 0 : props.palette);
    var isError = is_address
        ? (isAddressTouched && addressError)
        : (((_g = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _g === void 0 ? void 0 : _g[name]) && ((_h = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _h === void 0 ? void 0 : _h[name]));
    var errorMessage = is_address
        ? isAddressTouched && addressError
        : ((_j = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _j === void 0 ? void 0 : _j[name]) && ((_k = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _k === void 0 ? void 0 : _k[name]);
    var handleChange = function (_a) {
        var value = _a.value;
        if (type === "number") {
            var regex = /^[0-9+-]*$/;
            if (!regex.test(value))
                return;
        }
        if (type === "tel") {
            var phoneNumberRegexp = /^\+?[0-9]*$/; //validate if value can pass as a phone number
            if (!phoneNumberRegexp.test(value)) {
                return;
            }
        }
        formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue(name, value);
    };
    return (_jsx(TextInput, __assign({}, props, { name: name, onChange: handleChange, onBlur: function () { return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldTouched(name, true); }, isError: isError, helperText: errorMessage ? errorMessage : undefined, placeholder: "".concat(placeholder, " ").concat(isRequired ? "*" : "", " ").concat(type === "tel" ? "(eg: +2349032432432)" : ""), value: (_l = formikProps === null || formikProps === void 0 ? void 0 : formikProps.values) === null || _l === void 0 ? void 0 : _l[name], className: className, classNames: {
            input: (_m = clx(paletteStyles === null || paletteStyles === void 0 ? void 0 : paletteStyles.baseInput, classNames === null || classNames === void 0 ? void 0 : classNames.inputContainer, isError && "error")) !== null && _m !== void 0 ? _m : "",
            inputField: (_o = clx(paletteStyles === null || paletteStyles === void 0 ? void 0 : paletteStyles.field, classNames === null || classNames === void 0 ? void 0 : classNames.input, isError && "error")) !== null && _o !== void 0 ? _o : "",
            label: clx(paletteStyles === null || paletteStyles === void 0 ? void 0 : paletteStyles.label, (_p = classNames === null || classNames === void 0 ? void 0 : classNames.label) !== null && _p !== void 0 ? _p : ""),
            errorMessage: (_q = classNames === null || classNames === void 0 ? void 0 : classNames.errorMessage) !== null && _q !== void 0 ? _q : "",
        }, type: type, required: isRequired })));
};
