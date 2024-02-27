import { jsx as _jsx } from "react/jsx-runtime";
import { SelectInput } from "../../../SelectInput";
export var FormikSelect = function (_a) {
    var _b, _c;
    var classNames = _a.classNames, className = _a.className, options = _a.options, name = _a.name, formikProps = _a.formikProps, placeholder = _a.placeholder;
    var isInvalid = ((_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _b === void 0 ? void 0 : _b[name]) && ((_c = formikProps === null || formikProps === void 0 ? void 0 : formikProps["errors"]) === null || _c === void 0 ? void 0 : _c[name]);
    return (_jsx(SelectInput, { options: options, name: name, isError: isInvalid, helperText: isInvalid, onChange: function (_a) {
            var value = _a.value;
            return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue(name, value);
        }, onBlur: function () { return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldTouched(name, true); }, label: placeholder, containerClass: className, classNames: classNames }));
};
