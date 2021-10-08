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
import { FormLabel, OutlinedInput } from "@material-ui/core";
import { useStyles } from "./styles";
export var PasswordFields = function (_a) {
    var siteName = _a.siteName, placeholder = _a.placeholder, name = _a.name, onChange = _a.onChange, multiline = _a.multiline, props = _a.props, rows = _a.rows, error = _a.error, showInformation = _a.showInformation, information = _a.information;
    var classes = useStyles(props);
    return (_jsxs("div", __assign({ className: classes.nameContainer }, { children: [_jsx(FormLabel, __assign({ className: classes.label }, { children: siteName }), void 0), _jsxs("div", __assign({ className: classes.input_parent }, { children: [_jsx(OutlinedInput, { placeholder: placeholder, name: name, rows: rows, type: "password", multiline: multiline, onChange: onChange, className: (classes.input, classes.customTextField) }, void 0), showInformation && (_jsx("div", __assign({ className: classes.information }, { children: information }), void 0))] }), void 0), error && (_jsxs("p", __assign({ className: classes.error_message }, { children: [name === null || name === void 0 ? void 0 : name.replace(/_/g, " "), " is required"] }), void 0))] }), void 0));
};
