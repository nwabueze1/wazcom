import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRadioButtonInputStyles } from "./styles";
import { displayFeedback } from "../../helpers/io";
import clx from "classnames";
export var RadioButtonInput = function (_a) {
    var _b;
    var className = _a.className, label = _a.label, classNames = _a.classNames, name = _a.name, feedback = _a.feedback, value = _a.value, helperText = _a.helperText, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, id = _a.id, _d = _a.isBooleanValue, isBooleanValue = _d === void 0 ? true : _d, checked = _a.checked;
    var classes = useRadioButtonInputStyles({ isDisabled: isDisabled });
    var handleChange = function (event) {
        onChange === null || onChange === void 0 ? void 0 : onChange({
            name: name,
            value: isBooleanValue ? event.target.checked : event.target.value,
        });
    };
    return (_jsxs("div", { className: clx(classes.base, className), children: [label && (_jsx("label", { htmlFor: label, className: clx(classes.labelStyle, (_b = classNames === null || classNames === void 0 ? void 0 : classNames.label) !== null && _b !== void 0 ? _b : ""), children: label })), _jsxs("div", { className: clx(classes.root, classNames === null || classNames === void 0 ? void 0 : classNames.root), children: [_jsxs("label", { className: classes.innerWrapper, children: [_jsx("input", { name: name, disabled: isDisabled, type: "radio", id: id || label, className: clx(classes.input, classNames === null || classNames === void 0 ? void 0 : classNames.input), onChange: handleChange, checked: isBooleanValue ? value : checked, onFocus: onFocus, onBlur: onBlur, value: value }), _jsx("span", { className: clx("custom__radio", classes.customRadio, isDisabled && "disabled", (classNames === null || classNames === void 0 ? void 0 : classNames.radioButtonInput) ? classNames.radioButtonInput : "") })] }), _jsxs("div", { className: classes.helperText, children: [" ", helperText] }), feedback && displayFeedback(feedback)] })] }));
};
