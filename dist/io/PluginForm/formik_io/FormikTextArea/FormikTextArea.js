import { jsx as _jsx } from "react/jsx-runtime";
import { TextArea } from "../../../TextArea";
import clx from "classnames";
import { usePalletteStyles } from "../";
export var FormikTextArea = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var className = _a.className, isRequired = _a.isRequired, classNames = _a.classNames, name = _a.name, formikProps = _a.formikProps, rows = _a.rows, placeholder = _a.placeholder, pallette = _a.pallette;
    var isError = ((_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _b === void 0 ? void 0 : _b[name]) && ((_c = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _c === void 0 ? void 0 : _c[name]);
    var palletteStyles = usePalletteStyles(pallette);
    return (_jsx(TextArea, { rows: Number(rows), className: className, placeholder: "".concat(placeholder, " ").concat(isRequired ? "*" : ""), value: (_d = formikProps === null || formikProps === void 0 ? void 0 : formikProps.values) === null || _d === void 0 ? void 0 : _d[name], onChange: function (_a) {
            var value = _a.value;
            return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue(name, value);
        }, onBlur: function () { return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldTouched(name, true); }, isError: isError, helperText: isError ? isError : undefined, classNames: {
            textAreaContainer: (_e = clx(classNames === null || classNames === void 0 ? void 0 : classNames.inputContainer, isError && "error")) !== null && _e !== void 0 ? _e : "",
            input: (_f = clx(palletteStyles === null || palletteStyles === void 0 ? void 0 : palletteStyles.baseInput, palletteStyles === null || palletteStyles === void 0 ? void 0 : palletteStyles.field, classNames === null || classNames === void 0 ? void 0 : classNames.input, isError && "error")) !== null && _f !== void 0 ? _f : "",
            helperTextError: (_g = classNames === null || classNames === void 0 ? void 0 : classNames.errorMessage) !== null && _g !== void 0 ? _g : "",
        } }));
};
