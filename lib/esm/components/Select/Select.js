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
import { useSelectStyles } from "./styles";
import clx from "classnames";
import { Select, FormControl } from "@material-ui/core";
export var Selector = function (_a) {
    var className = _a.className, array = _a.array, handleChange = _a.handleChange, value = _a.value;
    var classes = useSelectStyles();
    return (_jsx("div", __assign({ className: clx(className) }, { children: _jsx(FormControl, __assign({ variant: "outlined", className: classes.formControl }, { children: _jsx(Select, __assign({ classes: {
                    select: classes.selected,
                    root: classes.root,
                }, native: true, id: "select", value: value, onChange: handleChange }, { children: array.map(function (value, index) {
                    return (_jsx("option", __assign({ value: value, className: clx() }, { children: value }), index));
                }) }), void 0) }), void 0) }), void 0));
};
