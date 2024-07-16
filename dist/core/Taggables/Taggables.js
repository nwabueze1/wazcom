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
import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AutoComplete from "@mui/material/Autocomplete";
import { Chip, TextField, InputLabel, Typography } from "@mui/material";
import { useTaggablesStyles } from "./styles";
import clx from "classnames";
export var Taggables = function (_a) {
    var _b;
    var onChange = _a.onChange, name = _a.name, value = _a.value, className = _a.className, classNames = _a.classNames, label = _a.label, feedback = _a.feedback, options = _a.options, externalChip = _a.externalChip, error = _a.error, props = __rest(_a, ["onChange", "name", "value", "className", "classNames", "label", "feedback", "options", "externalChip", "error"]);
    var handleChange = function (tags) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name !== null && name !== void 0 ? name : "", value: tags });
    };
    var classes = useTaggablesStyles();
    var getFeedbackVariant = function (classes, feedback) {
        var feedbackVariant;
        switch (feedback.status) {
            case "success":
                feedbackVariant = classes.feedbackSuccess;
                break;
            case "error":
                feedbackVariant = classes.feedbackError;
                break;
            case "neutral":
                feedbackVariant = classes.feedbackNeutral;
                break;
            default:
                feedbackVariant = classes.feedbackNeutral;
        }
        return feedbackVariant;
    };
    return (_jsxs("div", { className: clx(className, classes.root), children: [label && (_jsx(InputLabel, { className: (_b = classNames === null || classNames === void 0 ? void 0 : classNames.label) !== null && _b !== void 0 ? _b : "", htmlFor: name, children: label })), _jsx(AutoComplete, __assign({ multiple: true, freeSolo: true, options: options, value: value !== null && value !== void 0 ? value : [], onChange: function (_, tags) {
                    handleChange(tags);
                }, renderTags: function (value, getTagProps) { return (_jsx("div", { className: clx(externalChip && classes.renderChipOutside), children: value.map(function (value, index) { return (_createElement(Chip, __assign({ variant: "filled", label: value }, getTagProps({ index: index }), { classes: { root: classes.chip, icon: classes.chipIcon }, key: index }))); }) })); }, renderInput: function (params) { return (_jsx(TextField, __assign({}, params, { error: error, variant: "outlined", name: "tags", placeholder: "" }))); } }, props)), feedback && (_jsx(Typography, { className: clx(classes.feedback, getFeedbackVariant(classes, feedback)), children: feedback.text }))] }));
};
