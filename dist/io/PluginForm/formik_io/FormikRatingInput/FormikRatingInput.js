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
import { RatingInput } from "../../../RatingInput";
import clx from "classnames";
import { usePallette } from "./usePallette";
import { usePluginInputGroup } from "../usePluginInputGroupStyles";
export var FormikRatingInput = function (_a) {
    var _b, _c, _d, _e, _f;
    var isRequired = _a.isRequired, name = _a.name, formikProps = _a.formikProps, variant = _a.variant, label = _a.label, props = __rest(_a, ["isRequired", "name", "formikProps", "variant", "label"]);
    var isInvalid = ((_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _b === void 0 ? void 0 : _b[name]) && ((_c = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _c === void 0 ? void 0 : _c[name]);
    var palletteStyles = usePallette(props === null || props === void 0 ? void 0 : props.palette);
    var classes = usePluginInputGroup();
    var handleChange = function (e) {
        formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue(name, Number(e.value));
    };
    return (_jsx(RatingInput, __assign({}, props, { variant: variant, name: name, value: (_d = formikProps === null || formikProps === void 0 ? void 0 : formikProps.values) === null || _d === void 0 ? void 0 : _d[name], onChange: handleChange, isError: isInvalid, helperText: isInvalid, label: "".concat(label, " ").concat(isRequired ? "*" : ""), classNames: __assign(__assign({}, props === null || props === void 0 ? void 0 : props.classNames), { label: clx(classes.ratingLabel, palletteStyles === null || palletteStyles === void 0 ? void 0 : palletteStyles.label, (_e = props === null || props === void 0 ? void 0 : props.classNames) === null || _e === void 0 ? void 0 : _e.label), rating: clx(palletteStyles === null || palletteStyles === void 0 ? void 0 : palletteStyles.rating, (_f = props === null || props === void 0 ? void 0 : props.classNames) === null || _f === void 0 ? void 0 : _f.rating) }) })));
};
