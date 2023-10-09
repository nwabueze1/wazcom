import { jsx as _jsx } from "react/jsx-runtime";
import { TextArea } from "../../../TextArea";
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
