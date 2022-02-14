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
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
var AutoPlaySwipeableViews = autoPlay(SwipeableViews);
export var Carousel = function (_a) {
    var items = _a.items;
    var theme = useTheme();
    var _b = React.useState(0), activeStep = _b[0], setActiveStep = _b[1];
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
    return (_jsxs(Box, __assign({ sx: { maxWidth: 400, flexGrow: 1 } }, { children: [_jsx(Paper, __assign({ square: true, elevation: 0, sx: {
                    display: "flex",
                    alignItems: "center",
                    height: 50,
                    pl: 2,
                    bgcolor: "background.default",
                } }, { children: _jsx(Typography, { children: items[activeStep].label }, void 0) }), void 0), _jsx(AutoPlaySwipeableViews, __assign({ axis: theme.direction === "rtl" ? "x-reverse" : "x", index: activeStep, onChangeIndex: handleStepChange, enableMouseEvents: true }, { children: items.map(function (_a, index) {
                    var _b = _a.image, src = _b.src, alt = _b.alt, label = _a.label;
                    return (_jsx("div", { children: Math.abs(activeStep - index) <= 2 ? (_jsx(Box, { component: "img", sx: {
                                height: 255,
                                display: "block",
                                maxWidth: 400,
                                overflow: "hidden",
                                width: "100%",
                            }, src: src, alt: alt !== null && alt !== void 0 ? alt : label }, void 0)) : null }, index));
                }) }), void 0), _jsx(MobileStepper, { steps: maxSteps, position: "static", activeStep: activeStep, nextButton: _jsxs(Button, __assign({ size: "small", onClick: handleNext, disabled: activeStep === maxSteps - 1 }, { children: ["Next", theme.direction === "rtl" ? (_jsx(KeyboardArrowLeft, {}, void 0)) : (_jsx(KeyboardArrowRight, {}, void 0))] }), void 0), backButton: _jsxs(Button, __assign({ size: "small", onClick: handleBack, disabled: activeStep === 0 }, { children: [theme.direction === "rtl" ? (_jsx(KeyboardArrowRight, {}, void 0)) : (_jsx(KeyboardArrowLeft, {}, void 0)), "Back"] }), void 0) }, void 0)] }), void 0));
};
