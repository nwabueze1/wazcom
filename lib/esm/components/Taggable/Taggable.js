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
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Chip, TextField, InputLabel } from "@material-ui/core";
import { useTaggableStyles } from "./styles";
export var Taggable = function (_a) {
    var label = _a.label, name = _a.name, onChange = _a.onChange, error = _a.error, tags = _a.tags;
    var classes = useTaggableStyles();
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx(InputLabel, __assign({ className: classes.label, htmlFor: name }, { children: label }), void 0), _jsx(Autocomplete, { multiple: true, options: tags, freeSolo: true, value: tags, onChange: onChange, renderTags: function (value, getTagProps) {
                    return value.map(function (value, index) { return (_jsx(Chip, __assign({ variant: "default", label: value }, getTagProps({ index: index })), index)); });
                }, renderInput: function (params) { return (_jsx(TextField, __assign({}, params, { variant: "outlined", name: "tags", placeholder: "Add tags", fullWidth: true, className: "" + classes.autoCompleteField }), void 0)); } }, void 0), error && _jsx("p", __assign({ className: classes.error_message }, { children: "tags is required" }), void 0)] }), void 0));
};
