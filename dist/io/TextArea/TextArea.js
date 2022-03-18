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
import { jsx as _jsx } from "react/jsx-runtime";
import { TextareaAutosize } from "@mui/base";
import { useTextAreaStyles } from "./styles";
export var TextArea = function (_a) {
    var name = _a.name, value = _a.value, onChange = _a.onChange, minRows = _a.minRows;
    var classes = useTextAreaStyles();
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsx(TextareaAutosize, { minRows: minRows, placeholder: name, className: classes.textarea, name: name, style: { width: "100%" }, value: value, onChange: function (e) {
                return onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: e.target.value });
            } }, void 0) }), void 0));
};
