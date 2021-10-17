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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTableStyles } from "./styles";
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, } from "@mui/material";
export var Table = function (_a) {
    var headers = _a.headers, data = _a.data, props = __rest(_a, ["headers", "data"]);
    var classes = useTableStyles();
    return (_jsx(TableContainer, __assign({ component: Paper }, { children: _jsxs(MuiTable, __assign({ classes: {
                root: classes.root,
            } }, props, { children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, __assign({ padding: "checkbox" }, { children: _jsx(Checkbox, {}, void 0) }), void 0), headers.map(function (_a) {
                                var name = _a.name, label = _a.label;
                                return _jsx(TableCell, { children: label }, name);
                            })] }, void 0) }, void 0), _jsx(TableBody, { children: data === null || data === void 0 ? void 0 : data.map(function (row, index) {
                        return (_jsxs(TableRow, { children: [_jsx(TableCell, __assign({ padding: "checkbox" }, { children: _jsx(Checkbox, {}, void 0) }), void 0), headers.map(function (_a) {
                                    var name = _a.name;
                                    return _jsx(TableCell, { children: row === null || row === void 0 ? void 0 : row[name] }, name);
                                })] }, index));
                    }) }, void 0)] }), void 0) }), void 0));
};
