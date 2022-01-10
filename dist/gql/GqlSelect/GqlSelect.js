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
import { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select as MuiSelect, CircularProgress, } from "@mui/material";
import { useGqlSelectStyles } from "./styles";
import { useQuery } from "@apollo/client";
export var GqlSelect = function (_a) {
    var name = _a.name, label = _a.label, _b = _a.options, key = _b.key, query = _b.name, onChange = _a.onChange;
    var classes = useGqlSelectStyles();
    var _c = useQuery(query), data = _c.data, loading = _c.loading;
    var _d = useState([]), options = _d[0], setOptions = _d[1];
    useEffect(function () {
        if (data) {
            var options_1 = data === null || data === void 0 ? void 0 : data[key].data;
            setOptions(options_1);
        }
    }, [data]);
    if (loading) {
        return (_jsx("div", __assign({ className: classes.loader }, { children: _jsx(CircularProgress, { size: 14, color: "inherit" }, void 0) }), void 0));
    }
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx(InputLabel, __assign({ className: classes.label, htmlFor: name }, { children: label }), void 0), _jsx(FormControl, __assign({ variant: "outlined" }, { children: _jsxs(MuiSelect, __assign({ name: name, onChange: onChange, displayEmpty: true, defaultValue: "" }, { children: [_jsx(MenuItem, __assign({ disabled: true, value: "" }, { children: _jsx("em", { children: "Select an option!" }, void 0) }), void 0), options.map(function (row, index) {
                            return (_jsx(MenuItem, __assign({ value: row.title }, { children: row.title }), index));
                        })] }), void 0) }), void 0)] }), void 0));
};
