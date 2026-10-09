import { jsx as _jsx } from "react/jsx-runtime";
import { TextField } from "@mui/material";
import { useShortAnswerStyles } from "./styles";
export var ShortAnswer = function (_a) {
    var placeholderText = _a.placeholderText;
    var classes = useShortAnswerStyles();
    return (_jsx("div", { className: classes.root, children: _jsx(TextField, { className: classes.shortAnswerInput, inputMode: "text", sx: { border: 0 }, id: "standard-basic", variant: "standard", value: placeholderText, disabled: true }) }));
};
