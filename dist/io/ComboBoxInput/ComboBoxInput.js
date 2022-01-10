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
import Autocomplete from "@mui/material/Autocomplete";
import { InputLabel, TextField } from "@mui/material";
import { useComboBoxStyles } from "./styles";
export var ComboBoxInput = function (_a) {
    var name = _a.name, onChange = _a.onChange, error = _a.error, comboData = _a.comboData, label = _a.label, value = _a.value;
    var classes = useComboBoxStyles();
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx(InputLabel, __assign({ className: classes.label, htmlFor: name }, { children: label }), void 0), _jsx(Autocomplete, { options: comboData !== null && comboData !== void 0 ? comboData : [""], getOptionLabel: function (option) { return option; }, style: { width: 300 }, onChange: onChange, value: value, renderInput: function (params) { return (_jsx(TextField, __assign({}, params, { label: label, variant: "outlined" }), void 0)); } }, void 0), error && (_jsxs("p", __assign({ className: classes.error_message }, { children: [name === null || name === void 0 ? void 0 : name.replace(/_/g, " "), " is required"] }), void 0))] }), void 0));
};
