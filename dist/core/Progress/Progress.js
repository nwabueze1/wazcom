import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clx from "classnames";
import { useProgressStyles } from "./styles";
export var Progress = function (_a) {
    var value = _a.value, label = _a.label, _b = _a.showProgress, showProgress = _b === void 0 ? false : _b;
    var classes = useProgressStyles({ value: value });
    return (_jsxs("div", { className: clx(classes.root), children: [_jsxs("div", { className: classes.header, children: [label && (_jsx("span", { className: classes.label, "aria-label": "progress label", children: label })), _jsx("span", {}), showProgress && (_jsxs("span", { className: classes.label, "aria-label": "progress percentage", children: [value, "%"] }))] }), _jsx("div", { className: classes.bar, children: _jsx("div", { className: classes.progress, "aria-label": "progress bar" }) })] }));
};
