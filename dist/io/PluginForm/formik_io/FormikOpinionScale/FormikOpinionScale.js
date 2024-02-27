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
import { usePalletteStyles } from "./usePalletteStyles";
import clx from "classnames";
export var FormikOpinionScale = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var formikProps = _a.formikProps, isRequired = _a.isRequired, name = _a.name, props = __rest(_a, ["formikProps", "isRequired", "name"]);
    var error = ((_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _b === void 0 ? void 0 : _b[name]) && ((_c = formikProps === null || formikProps === void 0 ? void 0 : formikProps["errors"]) === null || _c === void 0 ? void 0 : _c[name]);
    var pallettStyles = usePalletteStyles(props === null || props === void 0 ? void 0 : props.palette);
    var handleChange = function (e) {
        formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue(name, Number(e.value));
    };
    return (_jsx(OpinionScale, __assign({ name: name }, props, { onChange: handleChange, value: (_d = formikProps === null || formikProps === void 0 ? void 0 : formikProps.values) === null || _d === void 0 ? void 0 : _d[name], label: "".concat(props === null || props === void 0 ? void 0 : props.placeholder, " ").concat(isRequired && "*"), isError: error, helperText: error, classNames: __assign(__assign({}, props === null || props === void 0 ? void 0 : props.classNames), { containedBox: clx(pallettStyles === null || pallettStyles === void 0 ? void 0 : pallettStyles.container, (_e = props === null || props === void 0 ? void 0 : props.classNames) === null || _e === void 0 ? void 0 : _e.containedBox), outlinedBox: clx(pallettStyles === null || pallettStyles === void 0 ? void 0 : pallettStyles.container, (_f = props === null || props === void 0 ? void 0 : props.classNames) === null || _f === void 0 ? void 0 : _f.outlinedBox), boxText: clx(pallettStyles === null || pallettStyles === void 0 ? void 0 : pallettStyles.text, (_g = props === null || props === void 0 ? void 0 : props.classNames) === null || _g === void 0 ? void 0 : _g.boxText), label: clx(pallettStyles === null || pallettStyles === void 0 ? void 0 : pallettStyles.label, (_h = props === null || props === void 0 ? void 0 : props.classNames) === null || _h === void 0 ? void 0 : _h.label) }) })));
};
