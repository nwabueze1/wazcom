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
import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clx from "classnames";
import { FormikRadio, FormikSelect, FormikTextArea, FormikTextInput } from "../io";
import { capitalizeFirstChar } from "./CapitalizeFirstCharacter";
import { useQuestionInputStyles } from "./style";
import { FormikPhoneNumber } from "../io/FormikInputs";
export var QuestionsInput = function (_a) {
    var name = _a.name, type = _a.type, fields = _a.fields, is_required = _a.is_required, classNames = _a.classNames, formikProps = _a.formikProps;
    var classes = useQuestionInputStyles();
    var commonInputProps = {
        name: name,
        isRequired: is_required,
        placeholder: name,
        classNames: classNames === null || classNames === void 0 ? void 0 : classNames.textField,
    };
    var renderFields = function () {
        var addressKeys = [];
        var options = [];
        switch (type) {
            case "SHORT_TEXT":
            case "PHOTO":
            case "WEB_URL":
            case "EMAIL_ADDRESS":
                return _jsx(FormikTextInput, __assign({}, commonInputProps));
            case "MULTILINE":
                return _jsx(FormikTextArea, __assign({}, commonInputProps, { classNames: classNames === null || classNames === void 0 ? void 0 : classNames.textArea }));
            case "YES_OR_NO":
            case "SINGLE_CHOICE":
            case "MULTI_CHOICE":
                options = (fields === null || fields === void 0 ? void 0 : fields.choices).map(function (field) { return ({
                    label: field,
                    value: field,
                }); });
                return (_jsx(FormikRadio, { options: options, name: name, control: type === "MULTI_CHOICE" ? "checkbox" : "radio", multiple: type === "MULTI_CHOICE", classNames: classNames === null || classNames === void 0 ? void 0 : classNames.radioInputOrCheckbox }));
            case "DATE_FORMAT":
                return (_jsxs("div", { children: [_jsx("label", __assign({ className: clx(classes.legend, classes.label) }, { children: capitalizeFirstChar(name) })), _jsx(FormikTextInput, __assign({}, commonInputProps, { type: "date" }))] }));
            case "ADDRESS":
                addressKeys = Object.keys(fields);
                return (_jsxs("fieldset", __assign({ className: classes.fieldSet }, { children: [_jsx("legend", __assign({ className: classes.legend }, { children: name })), addressKeys.map(function (key, index) { return (_createElement(FormikTextInput, __assign({}, commonInputProps, { name: "".concat(name, ".").concat(fields === null || fields === void 0 ? void 0 : fields[key]), key: index, placeholder: index === addressKeys.length - 1 ? "Country" : fields === null || fields === void 0 ? void 0 : fields[key] }))); })] })));
            case "DROP_DOWN":
                options = (fields === null || fields === void 0 ? void 0 : fields.choices).map(function (choice) { return ({
                    label: choice.toLocaleUpperCase(),
                    value: choice,
                }); });
                return (_jsx(FormikSelect, { classNames: classNames === null || classNames === void 0 ? void 0 : classNames.selectInput, formikProps: formikProps, name: name, options: options }));
            case "PHONE_NUMBER":
                return (_jsx(FormikPhoneNumber, { name: name, formikProps: formikProps, default_country: "NG", classNames: classNames === null || classNames === void 0 ? void 0 : classNames.phoneNumberInput }));
            default:
                return null;
        }
    };
    return _jsx("div", __assign({ className: classes.inputContainer }, { children: renderFields() }));
};
