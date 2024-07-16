import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clx from "classnames";
import { useStepsStyles } from "./styles";
import { BsCheck } from "react-icons/bs";
export var Steps = function (_a) {
    var className = _a.className, icon = _a.icon, current = _a.current, steps = _a.steps, _b = _a.isCompleted, isCompleted = _b === void 0 ? false : _b;
    var classes = useStepsStyles();
    return (_jsx("div", { className: clx(classes.root), children: _jsx("div", { className: clx(classes.steps, className), children: steps.map(function (item, index) {
                return (_jsxs("div", { className: clx(classes.stepItem), "data-active": isCompleted || current === index || current > index, children: [_jsxs("div", { className: classes.stepContent, "data-active": isCompleted || current === index || current > index, children: [!isCompleted && current <= index && _jsx("span", { children: item.title }), (current > index || isCompleted) && (_jsxs("span", { className: classes.stepIcon, children: [" ", icon ? icon : _jsx(BsCheck, {})] }))] }), _jsx("div", { className: clx(classes.stepLabel, "step__label"), children: item.label })] }, "".concat(index).concat(item.title)));
            }) }) }));
};
