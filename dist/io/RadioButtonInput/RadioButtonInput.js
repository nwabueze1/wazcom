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
import { useRadioButtonInputStyles } from "./styles";
import { Radio, InputLabel } from "@mui/material";
import { displayFeedback } from "../../helpers/io";
import clx from "classnames";
export var RadioButtonInput = function (_a) {
    var _b;
    var className = _a.className, label = _a.label, classNames = _a.classNames, name = _a.name, feedback = _a.feedback, value = _a.value, helperText = _a.helperText, onChange = _a.onChange;
    var classes = useRadioButtonInputStyles();
    var handleChange = function (event) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: event.target.checked });
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [label && (_jsx(InputLabel, __assign({ className: (_b = classNames === null || classNames === void 0 ? void 0 : classNames.label) !== null && _b !== void 0 ? _b : "", htmlFor: name }, { children: label }))), _jsx(Radio, { checked: value, onChange: handleChange, className: (classNames === null || classNames === void 0 ? void 0 : classNames.radioButtonInput) ? classNames.radioButtonInput : "", classes: (classNames === null || classNames === void 0 ? void 0 : classNames.classes) ? classNames.classes : {} }), helperText, feedback && displayFeedback(feedback)] })));
};
