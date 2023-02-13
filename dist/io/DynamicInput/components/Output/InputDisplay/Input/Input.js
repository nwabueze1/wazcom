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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { CheckBoxOutlineBlank, RadioButtonUncheckedOutlined } from "@mui/icons-material";
import { useDisplayInputStyles } from "./styles";
import { BiCheck } from "react-icons/bi";
export var Input = function (_a) {
    var handleSelect = _a.handleSelect, value = _a.value, index = _a.index, type = _a.type, checked = _a.checked;
    var classes = useDisplayInputStyles();
    var handleClick = function () {
        handleSelect();
    };
    var DisplayLabel = function () {
        switch (type) {
            case "dropdown":
                return _jsxs("p", { children: [index + 1, "."] });
            case "checkboxes":
                return _jsx(CheckBoxOutlineBlank, {});
            case "multiple":
                return _jsx(RadioButtonUncheckedOutlined, {});
            default:
                return _jsxs("p", { children: [index + 1, "."] });
        }
    };
    return (_jsxs("div", __assign({ className: classes.root, onClick: handleClick }, { children: [_jsxs("div", __assign({ className: classes.inputControl }, { children: [DisplayLabel(), _jsx("p", __assign({ className: classes.inputText }, { children: value }))] })), checked && _jsx(BiCheck, { className: classes.inputIcon })] })));
};
