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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { MenuItem, Select } from "@mui/material";
import { parseMenuTime } from "utilities/restaurant";
import { useMenuSelectorStyles } from "./styles";
export var MenuSelector = function (_a) {
    var menus = _a.menus, handleChange = _a.handleChange, value = _a.value;
    var classes = useMenuSelectorStyles();
    var displayMenus = function () {
        return menus.map(function (_a, index) {
            var _b, _c;
            var name = _a.name, times = _a.times;
            var startTime = parseMenuTime((_b = times === null || times === void 0 ? void 0 : times.scheduleItems[0]) === null || _b === void 0 ? void 0 : _b.start_time);
            var endtime = parseMenuTime((_c = times === null || times === void 0 ? void 0 : times.scheduleItems[0]) === null || _c === void 0 ? void 0 : _c.end_time);
            return (_jsx(MenuItem, __assign({ value: name, className: classes.menuItem }, { children: _jsxs("p", __assign({ className: classes.options }, { children: [name, _jsxs("span", __assign({ className: classes.openingHours }, { children: ["( Open: ", startTime, " - ", endtime, ")"] }), void 0)] }), void 0) }), index));
        });
    };
    return (_jsx("div", __assign({ className: classes.container }, { children: _jsx(Select, __assign({ variant: "outlined", onChange: handleChange, value: value, className: classes.root }, { children: displayMenus() }), void 0) }), void 0));
};
