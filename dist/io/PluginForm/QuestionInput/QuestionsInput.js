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
import { FormikSingleChoice, FormikSelect, FormikTextArea, FormikTextInput, FormikMultiChoice, FormikOpinionScale, FormikRatingInput, usePalletteStyles, FormikDocumentUpload, FormikPhotoUpload, } from "../formik_io";
import { useQuestionInputStyles } from "./style";
export var QuestionsInput = function (_a) {
    var name = _a.name, type = _a.type, fields = _a.fields, is_required = _a.is_required, classNames = _a.classNames, formikProps = _a.formikProps, mscProperties = _a.mscProperties, label = _a.label, palette = _a.palette, client = _a.client, form_uuid = _a.form_uuid;
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        var addressKeys = [];
        var options = [];
        var format = (_a = fields === null || fields === void 0 ? void 0 : fields["format"]) !== null && _a !== void 0 ? _a : "*";
        var max_size = (_b = fields === null || fields === void 0 ? void 0 : fields["max_size"]) !== null && _b !== void 0 ? _b : "20MB"; //eg:10MB
        var max_size_mb = Number((_d = (_c = max_size === null || max_size === void 0 ? void 0 : max_size.split("MB")) === null || _c === void 0 ? void 0 : _c[0]) !== null && _d !== void 0 ? _d : 0);
        var getFormat = function () {
            return (format === null || format === void 0 ? void 0 : format.includes(".")) ? format : ".".concat(format);
        };
        switch (type) {
            case "SHORT_TEXT":
            case "WEB_URL":
            case "EMAIL_ADDRESS":
                return _jsx(FormikTextInput, __assign({}, commonInputProps));
            case "PHOTO":
                return (_jsx(FormikPhotoUpload, __assign({}, __assign(__assign({}, commonInputProps), { classNames: classNames === null || classNames === void 0 ? void 0 : classNames.imageUpload, label: label, form_uuid: form_uuid, client: client, accept: getFormat(), max_size_mb: max_size_mb }))));
            case "DOC":
            case "VIDEO":
                return (_jsx(FormikDocumentUpload, __assign({}, __assign(__assign({}, commonInputProps), { classNames: classNames === null || classNames === void 0 ? void 0 : classNames.fileUpload, label: label, form_uuid: form_uuid, client: client, accept: getFormat(), max_size_mb: max_size_mb }))));
            case "MULTILINE":
                return _jsx(FormikTextArea, __assign({}, commonInputProps, { classNames: classNames === null || classNames === void 0 ? void 0 : classNames.textArea }));
            case "YES_OR_NO":
            case "SINGLE_CHOICE":
                options = (_f = ((_e = fields === null || fields === void 0 ? void 0 : fields.choices) !== null && _e !== void 0 ? _e : [])) === null || _f === void 0 ? void 0 : _f.map(function (field) { return ({
                    label: field,
                    value: field,
                }); });
                return (_jsx(FormikSingleChoice, { options: options, name: name, control: "radio", classNames: classNames === null || classNames === void 0 ? void 0 : classNames.radioButtonInput, formikProps: formikProps, placeholder: label, palette: palette }));
            case "MULTI_CHOICE":
                options = (_h = ((_g = fields === null || fields === void 0 ? void 0 : fields.choices) !== null && _g !== void 0 ? _g : [])) === null || _h === void 0 ? void 0 : _h.map(function (field) { return ({
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
                return (_jsxs("div", __assign({ className: clx(classes.fieldSet, (_j = classNames === null || classNames === void 0 ? void 0 : classNames.addressInput) === null || _j === void 0 ? void 0 : _j.fieldset) }, { children: [_jsx("label", __assign({ className: clx(classes.legend, paletteStyles === null || paletteStyles === void 0 ? void 0 : paletteStyles.label, (_k = classNames === null || classNames === void 0 ? void 0 : classNames.addressInput) === null || _k === void 0 ? void 0 : _k.legend) }, { children: label })), addressKeys === null || addressKeys === void 0 ? void 0 : addressKeys.map(function (key, index) { return (_createElement(FormikTextInput, __assign({ is_address: true }, commonInputProps, { name: "".concat(name, ".").concat(fields === null || fields === void 0 ? void 0 : fields[key]), key: index, placeholder: index === addressKeys.length - 1 ? "Country" : fields === null || fields === void 0 ? void 0 : fields[key] }))); })] })));
            case "DROP_DOWN":
                options = (_m = ((_l = fields === null || fields === void 0 ? void 0 : fields.choices) !== null && _l !== void 0 ? _l : [])) === null || _m === void 0 ? void 0 : _m.map(function (choice) { return ({
                    label: choice.toLocaleUpperCase(),
                    value: choice,
                }); });
                return (_jsx(FormikSelect, { classNames: classNames === null || classNames === void 0 ? void 0 : classNames.selectInput, formikProps: formikProps, name: name, options: options }));
            case "OPINION":
                return (_jsx(FormikOpinionScale, __assign({}, commonInputProps, { label: commonInputProps.placeholder, classNames: __assign(__assign({}, classNames === null || classNames === void 0 ? void 0 : classNames.opinionScale), { label: clx(classes === null || classes === void 0 ? void 0 : classes.ratingLabel, (_o = classNames === null || classNames === void 0 ? void 0 : classNames.opinionScale) === null || _o === void 0 ? void 0 : _o.label) }), variant: (_q = (_p = mscProperties === null || mscProperties === void 0 ? void 0 : mscProperties.opinionScale) === null || _p === void 0 ? void 0 : _p.variant) !== null && _q !== void 0 ? _q : "contained" })));
            case "RATING":
                return (_jsx(FormikRatingInput, __assign({}, commonInputProps, { label: commonInputProps.placeholder, classNames: __assign(__assign({}, classNames === null || classNames === void 0 ? void 0 : classNames.ratingInput), { label: clx(classes === null || classes === void 0 ? void 0 : classes.ratingLabel, (_r = classNames === null || classNames === void 0 ? void 0 : classNames.ratingInput) === null || _r === void 0 ? void 0 : _r.label) }), variant: (_t = (_s = mscProperties === null || mscProperties === void 0 ? void 0 : mscProperties.rating) === null || _s === void 0 ? void 0 : _s.variant) !== null && _t !== void 0 ? _t : "contained", min: (_u = Number(fields === null || fields === void 0 ? void 0 : fields["from"])) !== null && _u !== void 0 ? _u : 1, max: (_v = Number(fields === null || fields === void 0 ? void 0 : fields["to"])) !== null && _v !== void 0 ? _v : 5 })));
            default:
                return null;
        }
    };
    return _jsx("div", __assign({ className: classes.inputContainer }, { children: renderFields() }));
};
