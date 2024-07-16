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
        return screens.map(function (screen, index) { return (_jsxs("div", { className: classes.radioInputContainer, children: [_jsx(RadioButtonInput, { name: screen, onChange: function (_a) {
                        var value = _a.value;
                        if (value)
                            handleScreenChange(screen);
                    }, value: screen.toLowerCase() === screenType.toLowerCase(), className: classes.radioIcon }), _jsx("p", { className: classes.radioOption, children: screen.charAt(0).toUpperCase() + screen.slice(1).toLowerCase() })] }, index)); });
    };
    return (_jsx("div", { className: classes.root, children: _jsxs("div", { className: classes.form, children: [_jsxs("div", { className: classes.placeholderContainer, children: [_jsx("label", { className: classes.labelText, children: "Screen Type" }), _jsx(Tooltip, { title: "Crop the image part you want to see for each screen type by selecting a type and performing the cropping", content: "Crop the image part you want to see for each screen type by selecting a type and performing the cropping", children: _jsx("p", { children: _jsx(BsQuestionCircleFill, { className: classes.tooltipIcon }) }) })] }), displayScreens()] }) }));
};
