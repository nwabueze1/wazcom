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
            return (_jsx("div", { className: clx(classes.box, active && (variant === "outlined" ? classes.boxOutlined : classes.boxContained), variant === "contained"
                    ? classNames === null || classNames === void 0 ? void 0 : classNames.containedBox
                    : variant === "outlined"
                        ? classNames === null || classNames === void 0 ? void 0 : classNames.outlinedBox
                        : undefined, active && "active"), onClick: function () { return onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: rating }); }, children: _jsx("span", { className: clx(classes.innerText, active &&
                        (variant === "outlined" ? classes.outlinedActiveText : classes.containedActiveText), classNames === null || classNames === void 0 ? void 0 : classNames.boxText, active && "active"), children: rating }) }, index));
        });
    };
    return (_jsxs("div", { className: clx(classes.root, classNames === null || classNames === void 0 ? void 0 : classNames.root), children: [label && _jsx("label", { className: clx(classes.label, classNames === null || classNames === void 0 ? void 0 : classNames.label), children: label }), _jsx("article", { className: clx(classes.boxContainer, classNames === null || classNames === void 0 ? void 0 : classNames.boxContainer), children: renderOpinionScale() }), helperText && (_jsx("span", { className: clx(classes.helperTextDefault, isError && classes.helperTextError, classNames === null || classNames === void 0 ? void 0 : classNames.errorMessage), children: helperText }))] }));
};
