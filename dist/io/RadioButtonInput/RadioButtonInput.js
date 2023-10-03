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
    var className = _a.className, label = _a.label, classNames = _a.classNames, name = _a.name, feedback = _a.feedback, value = _a.value, helperText = _a.helperText, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, onChange = _a.onChange, onBlur = _a.onBlur, onFormikChange = _a.onFormikChange, _d = _a.labelPlacement, labelPlacement = _d === void 0 ? "left" : _d;
    var classes = useRadioButtonInputStyles({ isDisabled: isDisabled });
    var handleChange = function (event) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: event.target.checked });
    };
    var renderInput = function () { return (_jsxs("label", __assign({ className: classes.innerWrapper }, { children: [_jsx("input", { name: name, disabled: isDisabled, type: "radio", id: label, className: clx(classes.input), onChange: function (e) {
                    handleChange(e);
                    onFormikChange === null || onFormikChange === void 0 ? void 0 : onFormikChange(e);
                }, checked: value, onBlur: onBlur }), _jsx("span", { className: clx("custom__radio", classes.customRadio, (classNames === null || classNames === void 0 ? void 0 : classNames.radioButtonInput) ? classNames.radioButtonInput : "") })] }))); };
    return (_jsxs("div", __assign({ className: clx(classes.root, className, classNames === null || classNames === void 0 ? void 0 : classNames.root) }, { children: [labelPlacement === "right" && renderInput(), label && (_jsx("label", __assign({ htmlFor: label, className: clx(classes.labelStyle, (_b = classNames === null || classNames === void 0 ? void 0 : classNames.label) !== null && _b !== void 0 ? _b : "") }, { children: label }))), labelPlacement === "left" && renderInput(), _jsxs("div", __assign({ className: classes.helperText }, { children: [" ", helperText] })), feedback && displayFeedback(feedback)] })));
};
