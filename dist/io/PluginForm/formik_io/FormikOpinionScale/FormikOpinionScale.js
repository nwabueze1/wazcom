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
import { OpinionScale } from "../../../OpinionScale";
export var FormikOpinionScale = function (_a) {
    var _b, _c, _d;
    var formikProps = _a.formikProps, isRequired = _a.isRequired, name = _a.name, props = __rest(_a, ["formikProps", "isRequired", "name"]);
    var error = ((_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _b === void 0 ? void 0 : _b[name]) && ((_c = formikProps === null || formikProps === void 0 ? void 0 : formikProps["errors"]) === null || _c === void 0 ? void 0 : _c[name]);
    var handleChange = function (e) {
        formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue(name, Number(e.value));
    };
    return (_jsx(OpinionScale, __assign({ name: name }, props, { onChange: handleChange, value: (_d = formikProps === null || formikProps === void 0 ? void 0 : formikProps.values) === null || _d === void 0 ? void 0 : _d[name], label: "".concat(name, " ").concat(isRequired && "*"), isError: error, helperText: error })));
};
