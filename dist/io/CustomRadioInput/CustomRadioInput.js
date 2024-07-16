import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCustomRadioInputStyles } from "./styles";
import { RadioButtonInput } from "../RadioButtonInput";
import clx from "classnames";
export var CustomRadioInput = function (_a) {
    var name = _a.name, label = _a.label, value = _a.value, onChange = _a.onChange, className = _a.className;
    var classes = useCustomRadioInputStyles();
    var handleChange = function (_a) {
        var value = _a.value;
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name !== null && name !== void 0 ? name : "", value: value });
    };
    var handleComponentClick = function () {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name !== null && name !== void 0 ? name : "", value: true });
    };
    return (_jsxs("div", { className: clx(classes.root, className, value && classes.inputActive), onClick: handleComponentClick, children: [_jsx(RadioButtonInput, { className: classes.inputRadio, value: value, name: name, onChange: handleChange }), _jsx("p", { className: classes.inputLabel, children: label })] }));
};
