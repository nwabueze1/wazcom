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
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// const AutoPlaySwipeableViews = autoPlay<typeof SwipeableViews>(SwipeableViews);
export var Carousel = function (_a) {
    var className = _a.className, items = _a.items;
    var theme = useTheme();
    var _b = __read(React.useState(0), 2), activeStep = _b[0], setActiveStep = _b[1];
    var maxSteps = items.length;
    var handleNext = React.useCallback(function () {
        setActiveStep(activeStep + 1);
    }, [activeStep]);
    var handleBack = React.useCallback(function () {
        setActiveStep(activeStep - 1);
    }, [activeStep]);
    // const handleStepChange = (step: number) => {
    //     setActiveStep(step);
    // };
    return (_jsxs(Box, __assign({ sx: { maxWidth: 400, flexGrow: 1 }, className: className }, { children: [_jsx(Paper, __assign({ square: true, elevation: 0, sx: {
                    display: "flex",
                    alignItems: "center",
                    height: 50,
                    pl: 2,
                    bgcolor: "background.default",
                } }, { children: _jsx(Typography, { children: items[activeStep].label }) })), _jsx(MobileStepper, { steps: maxSteps, position: "static", activeStep: activeStep, nextButton: _jsxs(Button, __assign({ size: "small", onClick: handleNext, disabled: activeStep === maxSteps - 1 }, { children: ["Next", theme.direction === "rtl" ? _jsx(KeyboardArrowLeft, {}) : _jsx(KeyboardArrowRight, {})] })), backButton: _jsxs(Button, __assign({ size: "small", onClick: handleBack, disabled: activeStep === 0 }, { children: [theme.direction === "rtl" ? _jsx(KeyboardArrowRight, {}) : _jsx(KeyboardArrowLeft, {}), "Back"] })) })] })));
};
