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
    var children = _a.children, name = _a.name, _b = _a.variant, variant = _b === void 0 ? "PRIMARY" : _b, _c = _a.size, size = _c === void 0 ? "md" : _c, className = _a.className, _d = _a.type, type = _d === void 0 ? 'button' : _d, handleClick = _a.handleClick, activeElement = _a.activeElement;
    var classes = useButtonStyles();
    return (_jsx(MainButton, __assign({ onClick: handleClick, type: type, className: clx(className, classes.button, variant === "PRIMARY" && classes.buttonPrimary, variant === "SECONDARY" && classes.buttonSecondary, variant === "NEUTRAL" && classes.buttonNeutral, size === "sm" && classes.buttonSmall, (name === null || name === void 0 ? void 0 : name.toLowerCase()) === (activeElement === null || activeElement === void 0 ? void 0 : activeElement.toLowerCase()) && classes.buttonActive) }, { children: children }), void 0));
};
