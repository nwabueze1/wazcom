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
import { useTextStyles } from "./styles";
import clx from "classnames";
import { InputLabel, OutlinedInput } from "@material-ui/core";
import { startCase } from "lodash";
export var Text = function (_a) {
    var className = _a.className, error = _a.error, label = _a.label, type = _a.type, name = _a.name, source = _a.source, onBlur = _a.onBlur, onChange = _a.onChange, placeholder = _a.placeholder;
    var classes = useTextStyles();
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsx(InputLabel, __assign({ className: classes.label, htmlFor: source !== null && source !== void 0 ? source : name, shrink: true }, { children: label }), void 0), _jsx(OutlinedInput, { type: type, name: source !== null && source !== void 0 ? source : name, placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : (source && startCase(source)), onBlur: onBlur, onChange: onChange, error: error, className: clx(classes.input, className) }, void 0)] }), void 0));
};
