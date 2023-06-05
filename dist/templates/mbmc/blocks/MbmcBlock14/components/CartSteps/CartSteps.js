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
import { useCartStepsStyles } from "./styles";
import { MdCheckCircleOutline as CheckRoundedIcon } from "react-icons/md";
export var CartSteps = function (_a) {
    var steps = _a.steps;
    var classes = useCartStepsStyles();
    var currentStep = 2;
    var displaySteps = function () {
        return steps === null || steps === void 0 ? void 0 : steps.map(function (step, idx) {
            return (_jsxs("div", __assign({ className: "".concat(classes.step) }, { children: [_jsxs("div", __assign({ className: classes.stepContainer }, { children: [_jsx("div", __assign({ className: "".concat(classes.stepNum, " ").concat(currentStep == idx + 1
                                    ? classes.activeStepNum
                                    : currentStep > idx + 1
                                        ? classes.completedStepNum
                                        : classes.inactiveStepNum) }, { children: currentStep > idx + 1 ? _jsx(CheckRoundedIcon, { fontSize: "small" }) : idx + 1 })), _jsx("p", __assign({ className: "".concat(classes.stepName, " ").concat(currentStep == idx + 1
                                    ? classes.activeStepName
                                    : currentStep > idx + 1
                                        ? classes.completedStepName
                                        : classes.inactiveStepName) }, { children: step }))] })), steps.length - 1 !== idx && _jsx("div", { className: classes.stepDivider })] }), idx));
        });
    };
    return _jsx("div", __assign({ className: classes.root }, { children: displaySteps() }));
};
