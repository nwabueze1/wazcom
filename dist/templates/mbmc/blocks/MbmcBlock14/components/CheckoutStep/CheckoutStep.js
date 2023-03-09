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
import { useCheckoutStepStyles } from "./styles";
import clx from "classnames";
import { StepHeader } from "./StepHeader";
export var CheckoutStep = function (_a) {
    var name = _a.name, StepComponent = _a.StepComponent, _b = _a.isActive, isActive = _b === void 0 ? false : _b, handleEdit = _a.handleEdit;
    var classes = useCheckoutStepStyles();
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx("div", __assign({ className: classes.stepHeading }, { children: isActive ? (_jsx("p", __assign({ className: clx(classes.stepTitle, isActive && classes.stepTitleActive) }, { children: name }))) : (_jsx(StepHeader, { name: name, handleEdit: handleEdit })) })), isActive && StepComponent] })));
};
