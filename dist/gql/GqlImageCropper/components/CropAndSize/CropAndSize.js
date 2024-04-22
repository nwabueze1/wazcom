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
import { RadioButtonInput } from "../../../../io";
import { Tooltip } from "../../../../core";
import { BsQuestionCircleFill } from "react-icons/bs";
import { useCropAndSizeStyles } from "./styles";
export var CropAndSize = function (_a) {
    var screenType = _a.screenType, handleChange = _a.handleChange;
    var classes = useCropAndSizeStyles();
    var screens = ["desktop", "tablet", "mobile"];
    var handleScreenChange = function (screen) {
        handleChange("screenType", screen);
    };
    var displayScreens = function () {
        return screens.map(function (screen, index) { return (_jsxs("div", __assign({ className: classes.radioInputContainer }, { children: [_jsx(RadioButtonInput, { name: screen, onChange: function (_a) {
                        var value = _a.value;
                        if (value)
                            handleScreenChange(screen);
                    }, value: screen.toLowerCase() === screenType.toLowerCase(), className: classes.radioIcon }), _jsx("p", __assign({ className: classes.radioOption }, { children: screen.charAt(0).toUpperCase() + screen.slice(1).toLowerCase() }))] }), index)); });
    };
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: classes.form }, { children: [_jsxs("div", __assign({ className: classes.placeholderContainer }, { children: [_jsx("label", __assign({ className: classes.labelText }, { children: "Screen Type" })), _jsx(Tooltip, __assign({ title: "Crop the image part you want to see for each screen type by selecting a type and performing the cropping", content: "Crop the image part you want to see for each screen type by selecting a type and performing the cropping" }, { children: _jsx("p", { children: _jsx(BsQuestionCircleFill, { className: classes.tooltipIcon }) }) }))] })), displayScreens()] })) })));
};
