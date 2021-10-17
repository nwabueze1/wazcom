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
import { FormLabel, Switch } from "@material-ui/core";
import { useToggleStyles } from "./styles";
export var Toggle = function (_a) {
    var name = _a.name, label = _a.label, value = _a.value, onChange = _a.onChange, helperText = _a.helperText;
    var classes = useToggleStyles();
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx(FormLabel, __assign({ className: classes.label }, { children: label }), void 0), _jsx(Switch, { className: classes.toggle, onChange: onChange, checked: value, name: name }, void 0), helperText && _jsx("p", __assign({ className: classes.helperText }, { children: helperText }), void 0)] }), void 0));
};
