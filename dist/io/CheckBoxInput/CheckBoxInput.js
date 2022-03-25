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
import Checkbox from "@mui/material/Checkbox";
export var CheckBoxInput = function (_a) {
    var className = _a.className, label = _a.label, checked = _a.checked, handleCheckChange = _a.handleCheckChange;
    return (_jsx("div", __assign({ className: className }, { children: _jsx(Checkbox, { checked: checked, onChange: handleCheckChange, inputProps: { "aria-label": label } }, void 0) }), void 0));
};
