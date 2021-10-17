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
import { useState } from "react";
import useStyles from "./styles";
import { Typography } from "@mui/material";
import Pagination from '@mui/material/Pagination';
export var Page = function () {
    var totalPages = 4;
    var classes = useStyles();
    var _a = useState(1), page = _a[0], setPage = _a[1];
    var handleChange = function (_, value) {
        setPage(value);
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx(Typography, __assign({ className: classes.description }, { children: "Pagination" }), void 0), _jsxs(Typography, __assign({ className: classes.pageNumber }, { children: ["Page: ", page + " of " + totalPages] }), void 0), _jsx(Pagination, { count: 4, page: page, onChange: handleChange }, void 0)] }), void 0));
};
