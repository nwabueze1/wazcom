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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { usePluginInputGroup } from "../usePluginInputGroupStyles";
import clx from "classnames";
import { PhoneNumberInput } from "../../../PhoneNumberInput";
export var FormikPhoneNumber = function (_a) {
    var _b, _c, _d, _e;
    var default_country = _a.default_country, classNames = _a.classNames, formikProps = _a.formikProps, name = _a.name;
    var classes = usePluginInputGroup();
    var isInvalid = ((_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _b === void 0 ? void 0 : _b[name]) && ((_c = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _c === void 0 ? void 0 : _c[name]);
    var handleChange = function (value) {
        formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue(name, value);
    };
    return (_jsxs("div", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.root }, { children: [_jsx("label", __assign({ className: clx(classes.legend, classNames === null || classNames === void 0 ? void 0 : classNames.label) }, { children: name })), _jsx(PhoneNumberInput, { country: default_country.toLowerCase(), onChange: handleChange, onBlur: function () { return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldTouched(name, true); }, classNames: {
                    container: clx(classes.phoneContainerClass, classNames === null || classNames === void 0 ? void 0 : classNames.phoneNumberInputContainer, isInvalid && "error"),
                    dropdown: classNames === null || classNames === void 0 ? void 0 : classNames.dropdownClass,
                    input: clx(classes.phoneInput, classNames === null || classNames === void 0 ? void 0 : classNames.phoneNumberInput),
                    root: classNames === null || classNames === void 0 ? void 0 : classNames.phoneNumberInputRoot,
                    button: classNames === null || classNames === void 0 ? void 0 : classNames.buttonClass,
                }, value: (_d = formikProps === null || formikProps === void 0 ? void 0 : formikProps.values) === null || _d === void 0 ? void 0 : _d[name] }), isInvalid && (_jsx("span", __assign({ className: classes.errorMessage }, { children: (_e = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _e === void 0 ? void 0 : _e[name] })))] })));
};
