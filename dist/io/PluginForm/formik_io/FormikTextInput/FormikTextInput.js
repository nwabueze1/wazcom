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
