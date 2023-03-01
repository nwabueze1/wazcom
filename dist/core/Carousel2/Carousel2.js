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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { useCarouselStyles } from "./styles";
var AutoPlaySwipeableViews = SwipeableViews;
export var Carousel2 = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var className = _a.className, items = _a.items, classNames = _a.classNames;
    var theme = useTheme();
    var classes = useCarouselStyles();
    var _h = __read(React.useState(0), 2), activeStep = _h[0], setActiveStep = _h[1];
    var maxSteps = items.length;
    var handleNext = React.useCallback(function () {
        setActiveStep(activeStep + 1);
    }, [activeStep]);
    var handleBack = React.useCallback(function () {
        setActiveStep(activeStep - 1);
    }, [activeStep]);
    var handleStepChange = function (step) {
        setActiveStep(step);
    };
    return (_jsxs(Box, __assign({ sx: { flexGrow: 1 }, className: className }, { children: [_jsx(AutoPlaySwipeableViews, __assign({ axis: theme.direction === "rtl" ? "x-reverse" : "x", index: activeStep, onChangeIndex: handleStepChange, enableMouseEvents: true }, { children: items.map(function (_a, index) {
                    var component = _a.component;
                    return (_jsx("div", { children: component }, index));
                }) })), _jsx(MobileStepper, { steps: maxSteps, position: "static", activeStep: activeStep, className: classes.stepper, classes: {
                    dot: classes.dot,
                    dotActive: classes.active,
                }, nextButton: _jsx(Button, __assign({ size: "small", onClick: handleNext, disabled: activeStep === maxSteps - 1, className: (_b = classNames === null || classNames === void 0 ? void 0 : classNames.button) !== null && _b !== void 0 ? _b : "" }, { children: theme.direction === "rtl" ? (_jsx(KeyboardArrowLeft, { fontSize: "large", className: (_c = classNames === null || classNames === void 0 ? void 0 : classNames.arrow) !== null && _c !== void 0 ? _c : "" })) : (_jsx(KeyboardArrowRight, { fontSize: "large", className: (_d = classNames === null || classNames === void 0 ? void 0 : classNames.arrow) !== null && _d !== void 0 ? _d : "" })) })), backButton: _jsx(Button, __assign({ className: (_e = classNames === null || classNames === void 0 ? void 0 : classNames.button) !== null && _e !== void 0 ? _e : "", size: "small", onClick: handleBack, disabled: activeStep === 0 }, { children: theme.direction === "rtl" ? (_jsx(KeyboardArrowRight, { className: (_f = classNames === null || classNames === void 0 ? void 0 : classNames.arrow) !== null && _f !== void 0 ? _f : "", fontSize: "large" })) : (_jsx(KeyboardArrowLeft, { className: (_g = classNames === null || classNames === void 0 ? void 0 : classNames.arrow) !== null && _g !== void 0 ? _g : "", fontSize: "large" })) })) })] })));
};
