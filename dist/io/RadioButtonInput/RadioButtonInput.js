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
import { useRadioButtonInputStyles } from "./styles";
import { displayFeedback } from "../../helpers/io";
import clx from "classnames";
export var RadioButtonInput = function (_a) {
    var _b;
    var className = _a.className, label = _a.label, classNames = _a.classNames, name = _a.name, feedback = _a.feedback, value = _a.value, helperText = _a.helperText, checkedBackground = _a.checkedBackground, unCheckedBackground = _a.unCheckedBackground, radioSize = _a.radioSize, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.position, position = _d === void 0 ? "vertical" : _d, onChange = _a.onChange;
    var classes = useRadioButtonInputStyles({
        checkedBackground: checkedBackground,
        unCheckedBackground: unCheckedBackground,
        disabled: disabled,
        position: position,
        radioSize: radioSize,
    });
    var handleChange = function (event) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: event.target.checked });
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsxs("div", __assign({ className: clx(classes.radioWrapper) }, { children: [label && (_jsx("label", __assign({ htmlFor: label, className: clx(classes.labelStyle, (_b = classNames === null || classNames === void 0 ? void 0 : classNames.label) !== null && _b !== void 0 ? _b : "") }, { children: label }))), _jsxs("label", __assign({ className: classes.innerWrapper }, { children: [_jsx("input", { name: name, disabled: disabled, type: "radio", id: label, className: clx(classes.input), onChange: handleChange, checked: value }), _jsx("span", { className: clx("custom__radio", classes.customRadio, (classNames === null || classNames === void 0 ? void 0 : classNames.radioButtonInput) ? classNames.radioButtonInput : "") })] }))] })), _jsxs("div", __assign({ className: classes.helperText }, { children: [" ", helperText] })), feedback && displayFeedback(feedback)] })));
};
