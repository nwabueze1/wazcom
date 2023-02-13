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
import { TextField } from "@mui/material";
import { useShortAnswerStyles } from "./styles";
export var ShortAnswer = function (_a) {
    var placeholderText = _a.placeholderText;
    var classes = useShortAnswerStyles();
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsx(TextField, { className: classes.shortAnswerInput, inputMode: "text", sx: { border: 0 }, id: "standard-basic", variant: "standard", value: placeholderText, disabled: true }) })));
};
