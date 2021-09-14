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
import { RadioButtonStyles } from "./styles";
import { Radio } from "@material-ui/core";
import clx from "classnames";
import { useState } from "react";
var RadioButton = function (_a) {
    var className = _a.className, color = _a.color;
    var classes = RadioButtonStyles();
    var _b = useState(true), isChecked = _b[0], setIsChecked = _b[1];
    return (_jsx("div", __assign({ className: clx(className, classes.root) }, { children: _jsx(Radio, { style: { color: color }, onClick: function () { return setIsChecked(!isChecked); }, checked: isChecked }, void 0) }), void 0));
};
export default RadioButton;
