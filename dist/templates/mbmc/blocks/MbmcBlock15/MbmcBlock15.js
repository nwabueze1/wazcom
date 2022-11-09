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
import { useMbmcBlock18Styles } from "./styles";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
export var MbmcBlock15 = function (_a) {
    var steps = _a.steps, stepHistory = _a.stepHistory;
    var classes = useMbmcBlock18Styles();
    var currentStep = stepHistory === null || stepHistory === void 0 ? void 0 : stepHistory.slice(-1)[0];
    var completedSteps = stepHistory === null || stepHistory === void 0 ? void 0 : stepHistory.slice(0, stepHistory.length - 1);
    var displaySteps = function () {
        return steps === null || steps === void 0 ? void 0 : steps.map(function (step, idx) {
            return (_jsxs("div", __assign({ className: "".concat(classes.step) }, { children: [_jsxs("div", __assign({ className: classes.stepContainer }, { children: [_jsx("div", __assign({ className: "".concat(classes.stepNum, " ").concat(currentStep == idx + 1
                                    ? classes.activeStepNum
                                    : completedSteps.includes(idx + 1)
                                        ? classes.completedStepNum
                                        : classes.inactiveStepNum) }, { children: completedSteps.includes(idx + 1) ? (_jsx(CheckRoundedIcon, { fontSize: "small" }, void 0)) : (idx + 1) }), void 0), _jsx("p", __assign({ className: "".concat(classes.stepName, " ").concat(currentStep == idx + 1
                                    ? classes.activeStepName
                                    : completedSteps.includes(idx + 1)
                                        ? classes.completedStepName
                                        : classes.inactiveStepName) }, { children: step }), void 0)] }), void 0), steps.length - 1 !== idx && _jsx("div", { className: classes.stepDivider }, void 0)] }), idx));
        });
    };
    return _jsx("div", __assign({ className: classes.root }, { children: displaySteps() }), void 0);
};
