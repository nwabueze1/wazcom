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
import { FormikSingleChoice, FormikSelect, FormikTextArea, FormikTextInput, FormikMultiChoice, FormikOpinionScale, FormikRatingInput, usePalletteStyles, } from "../formik_io";
import { useQuestionInputStyles } from "./style";
export var QuestionsInput = function (_a) {
    var name = _a.name, type = _a.type, fields = _a.fields, is_required = _a.is_required, classNames = _a.classNames, formikProps = _a.formikProps, mscProperties = _a.mscProperties, label = _a.label, palette = _a.palette;
    var classes = useQuestionInputStyles();
    var paletteStyles = usePalletteStyles(palette);
    var commonInputProps = {
        name: name,
        isRequired: is_required,
        placeholder: label,
        classNames: classNames === null || classNames === void 0 ? void 0 : classNames.textField,
        formikProps: formikProps,
        palette: palette,
    };
    var renderFields = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var addressKeys = [];
        var options = [];
        switch (type) {
            case "SHORT_TEXT":
            case "PHOTO":
            case "WEB_URL":
            case "EMAIL_ADDRESS":
            case "DOC":
            case "VIDEO":
                return _jsx(FormikTextInput, __assign({}, commonInputProps));
            case "MULTILINE":
                return _jsx(FormikTextArea, __assign({}, commonInputProps, { classNames: classNames === null || classNames === void 0 ? void 0 : classNames.textArea }));
            case "YES_OR_NO":
            case "SINGLE_CHOICE":
                options = (fields === null || fields === void 0 ? void 0 : fields.choices).map(function (field) { return ({
                    label: field,
                    value: field,
                }); });
                return (_jsx(FormikSingleChoice, { options: options, name: name, control: "radio", classNames: classNames === null || classNames === void 0 ? void 0 : classNames.radioButtonInput, formikProps: formikProps, placeholder: label, palette: palette }));
            case "MULTI_CHOICE":
                options = (fields === null || fields === void 0 ? void 0 : fields.choices).map(function (field) { return ({
                    label: field,
                    value: field,
                }); });
                return (_jsx(FormikMultiChoice, { options: options, name: name, multiple: options.length > 1, classNames: classNames === null || classNames === void 0 ? void 0 : classNames.checkBoxInput, formikProps: formikProps, placeholder: label, pallette: palette }));
            case "PHONE_NUMBER":
                return _jsx(FormikTextInput, __assign({}, commonInputProps, { type: "tel" }));
            case "DATE_FORMAT":
                return (_jsx(FormikTextInput, __assign({}, commonInputProps, { type: "date", placeholder: "", label: commonInputProps.placeholder })));
            case "ADDRESS":
                addressKeys = Object.keys(fields);
                return (_jsxs("div", __assign({ className: clx(classes.fieldSet, (_a = classNames === null || classNames === void 0 ? void 0 : classNames.addressInput) === null || _a === void 0 ? void 0 : _a.fieldset) }, { children: [_jsx("label", __assign({ className: clx(classes.legend, paletteStyles === null || paletteStyles === void 0 ? void 0 : paletteStyles.label, (_b = classNames === null || classNames === void 0 ? void 0 : classNames.addressInput) === null || _b === void 0 ? void 0 : _b.legend) }, { children: label })), addressKeys.map(function (key, index) { return (_createElement(FormikTextInput, __assign({ is_address: true }, commonInputProps, { name: "".concat(name, ".").concat(fields === null || fields === void 0 ? void 0 : fields[key]), key: index, placeholder: index === addressKeys.length - 1 ? "Country" : fields === null || fields === void 0 ? void 0 : fields[key] }))); })] })));
            case "DROP_DOWN":
                options = (fields === null || fields === void 0 ? void 0 : fields.choices).map(function (choice) { return ({
                    label: choice.toLocaleUpperCase(),
                    value: choice,
                }); });
                return (_jsx(FormikSelect, { classNames: classNames === null || classNames === void 0 ? void 0 : classNames.selectInput, formikProps: formikProps, name: name, options: options }));
            case "OPINION":
                return (_jsx(FormikOpinionScale, __assign({}, commonInputProps, { label: commonInputProps.placeholder, classNames: __assign(__assign({}, classNames === null || classNames === void 0 ? void 0 : classNames.opinionScale), { label: clx(classes === null || classes === void 0 ? void 0 : classes.ratingLabel, (_c = classNames === null || classNames === void 0 ? void 0 : classNames.opinionScale) === null || _c === void 0 ? void 0 : _c.label) }), variant: (_e = (_d = mscProperties === null || mscProperties === void 0 ? void 0 : mscProperties.opinionScale) === null || _d === void 0 ? void 0 : _d.variant) !== null && _e !== void 0 ? _e : "contained" })));
            case "RATING":
                return (_jsx(FormikRatingInput, __assign({}, commonInputProps, { label: commonInputProps.placeholder, classNames: __assign(__assign({}, classNames === null || classNames === void 0 ? void 0 : classNames.ratingInput), { label: clx(classes === null || classes === void 0 ? void 0 : classes.ratingLabel, (_f = classNames === null || classNames === void 0 ? void 0 : classNames.ratingInput) === null || _f === void 0 ? void 0 : _f.label) }), variant: (_h = (_g = mscProperties === null || mscProperties === void 0 ? void 0 : mscProperties.rating) === null || _g === void 0 ? void 0 : _g.variant) !== null && _h !== void 0 ? _h : "contained", min: (_j = Number(fields === null || fields === void 0 ? void 0 : fields["from"])) !== null && _j !== void 0 ? _j : 1, max: (_k = Number(fields === null || fields === void 0 ? void 0 : fields["to"])) !== null && _k !== void 0 ? _k : 5 })));
            default:
                return null;
        }
    };
    return _jsx("div", __assign({ className: classes.inputContainer }, { children: renderFields() }));
};
