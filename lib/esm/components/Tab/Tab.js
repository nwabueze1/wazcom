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
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import clsx from "classnames";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import { Tab as MuiTab } from "@material-ui/core";
import { useTabStyles } from "./styles";
export var Tab = function (_a) {
    var className = _a.className, arr = _a.arr, color = _a.color, label = _a.label;
    var classes = useTabStyles();
    var _b = useState(false), isSelected = _b[0], changeIsSelected = _b[1];
    return (_jsx(Paper, __assign({ color: color, className: clsx(classes.tabs, className) }, { children: _jsx(Tabs, __assign({ "aria-label": label, variant: "scrollable" }, { children: arr.map(function (label, index) {
                return (_jsx(MuiTab, { label: label, onClick: function () { return changeIsSelected(!isSelected); }, selected: isSelected }, index));
            }) }), void 0) }), void 0));
};
