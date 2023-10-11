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
import clx from "classnames";
import { BsCheck } from "react-icons/bs";
import { useCheckboxInputStyles } from "./styles";
import { displayFeedback } from "../../helpers/io";
export var CheckBoxInput = function (_a) {
    var _b;
    var name = _a.name, className = _a.className, classNames = _a.classNames, helperText = _a.helperText, feedback = _a.feedback, onChange = _a.onChange, value = _a.value, label = _a.label, onFocus = _a.onFocus, onBlur = _a.onBlur, id = _a.id;
    var classes = useCheckboxInputStyles();
    var handleChange = function (event) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: event.target.checked });
    };
    return (_jsxs("div", __assign({ className: clx(className, classes.base) }, { children: [label && (_jsx("label", __assign({ htmlFor: id, className: clx(classes.labelStyle, (_b = classNames === null || classNames === void 0 ? void 0 : classNames.label) !== null && _b !== void 0 ? _b : "") }, { children: label }))), _jsxs("div", __assign({ className: clx(classes.root, classNames === null || classNames === void 0 ? void 0 : classNames.root) }, { children: [_jsxs("label", __assign({ className: classes.innerWrapper }, { children: [_jsx("input", { name: name, type: "checkbox", className: clx(classes.input), onChange: handleChange, checked: value, onFocus: onFocus, onBlur: onBlur, id: id }), _jsx("span", { className: clx("custom__checkbox", classes.customCheckbox, (classNames === null || classNames === void 0 ? void 0 : classNames.checkBoxInput) ? classNames.checkBoxInput : "") }), _jsx("span", __assign({ className: clx("checked__icon", classes.checkedIcon) }, { children: _jsx(BsCheck, {}) }))] })), _jsxs("div", __assign({ className: classes.helperText }, { children: [" ", helperText] })), feedback && displayFeedback(feedback)] }))] })));
};
