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
import clx from "classnames";
import { RiLoader4Line } from "react-icons/ri";
import { useSpinnerStyles } from "./styles";
export var Spinner = function (_a) {
    var variant = _a.variant;
    var classes = useSpinnerStyles({ variant: variant });
    var _className = clx(variant === "primary"
        ? classes.contained
        : variant === "secondary"
            ? classes.outlined
            : classes.default);
    return (_jsx("span", __assign({ className: classes.root }, { children: _jsx(RiLoader4Line, { className: _className }) })));
};
