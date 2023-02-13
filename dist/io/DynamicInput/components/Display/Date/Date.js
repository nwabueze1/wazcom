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
import { useDateStyles } from "./styles";
import { BsCalendarDate } from "react-icons/bs";
export var Date = function () {
    var classes = useDateStyles();
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx("p", __assign({ className: classes.dateText }, { children: "Month, day, year" })), _jsx(BsCalendarDate, { className: classes.dateIcon })] })));
};
