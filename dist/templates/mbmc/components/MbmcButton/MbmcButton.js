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
import { useButtonStyles } from "./styles";
import { Button as MainButton } from "../../../../core/Button";
import clx from "classnames";
export var MbmcButton = function (_a) {
    var children = _a.children, _b = _a.type, type = _b === void 0 ? "PRIMARY" : _b, _c = _a.size, size = _c === void 0 ? "md" : _c, className = _a.className, _d = _a.buttonType, buttonType = _d === void 0 ? "button" : _d, onClick = _a.onClick;
    var classes = useButtonStyles();
    return (_jsx(MainButton, __assign({ onClick: onClick, type: buttonType, className: clx(className, classes.button, type === "PRIMARY" ? classes.buttonPrimary : classes.buttonSecondary, size === "sm" && classes.buttonSmall) }, { children: children }), void 0));
};
