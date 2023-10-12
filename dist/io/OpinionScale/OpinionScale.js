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
import { useOpinionScaleStyles } from "./useOpinionScaleStyles";
import clx from "classnames";
export var OpinionScale = function (_a) {
    var name = _a.name, _b = _a.variant, variant = _b === void 0 ? "contained" : _b, _c = _a.min, min = _c === void 0 ? 1 : _c, _d = _a.max, max = _d === void 0 ? 10 : _d, onChange = _a.onChange, value = _a.value, classNames = _a.classNames, isError = _a.isError, label = _a.label, helperText = _a.helperText;
    var ratings = Array.from({ length: max - min + 1 }, function (_, index) { return min + index; });
    var classes = useOpinionScaleStyles();
    var renderOpinionScale = function () {
        return ratings.map(function (rating, index) {
            var active = rating <= value;
            return (_jsx("div", __assign({ className: clx(classes.box, active && (variant === "outlined" ? classes.boxOutlined : classes.boxContained), variant === "contained"
                    ? classNames === null || classNames === void 0 ? void 0 : classNames.containedBox
                    : variant === "outlined"
                        ? classNames === null || classNames === void 0 ? void 0 : classNames.outlinedBox
                        : undefined, active && "active"), onClick: function () { return onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: rating }); } }, { children: _jsx("span", __assign({ className: clx(classes.innerText, active &&
                        (variant === "outlined" ? classes.outlinedActiveText : classes.containedActiveText), classNames === null || classNames === void 0 ? void 0 : classNames.boxText, active && "active") }, { children: rating })) }), index));
        });
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, classNames === null || classNames === void 0 ? void 0 : classNames.root) }, { children: [label && _jsx("label", __assign({ className: clx(classes.label, classNames === null || classNames === void 0 ? void 0 : classNames.label) }, { children: label })), _jsx("article", __assign({ className: clx(classes.boxContainer, classNames === null || classNames === void 0 ? void 0 : classNames.boxContainer) }, { children: renderOpinionScale() })), helperText && (_jsx("span", __assign({ className: clx(classes.helperTextDefault, isError && classes.helperTextError, classNames === null || classNames === void 0 ? void 0 : classNames.errorMessage) }, { children: helperText })))] })));
};
