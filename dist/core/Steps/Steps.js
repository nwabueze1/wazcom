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
import { useStepsStyles } from "./styles";
import { BsCheck } from "react-icons/bs";
export var Steps = function (_a) {
    var className = _a.className, icon = _a.icon, current = _a.current, steps = _a.steps, _b = _a.isCompleted, isCompleted = _b === void 0 ? false : _b;
    var classes = useStepsStyles();
    return (_jsx("div", __assign({ className: clx(classes.root) }, { children: _jsx("div", __assign({ className: clx(classes.steps, className) }, { children: steps.map(function (item, index) {
                return (_jsxs("div", __assign({ className: clx(classes.stepItem), "data-active": isCompleted || current === index || current > index }, { children: [_jsxs("div", __assign({ className: classes.stepContent, "data-active": isCompleted || current === index || current > index }, { children: [!isCompleted && current <= index && _jsx("span", { children: item.title }), (current > index || isCompleted) && (_jsxs("span", __assign({ className: classes.stepIcon }, { children: [" ", icon ? icon : _jsx(BsCheck, {})] })))] })), _jsx("div", __assign({ className: clx(classes.stepLabel, "step__label") }, { children: item.label }))] }), "".concat(index).concat(item.title)));
            }) })) })));
};
