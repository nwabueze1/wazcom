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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { TableCell } from "@mui/material";
import clx from "classnames";
import { useState } from "react";
import { MdKeyboardArrowLeft as KeyboardArrowLeft, MdKeyboardArrowRight as KeyboardArrowRight, } from "react-icons/md";
import { useTablePaginationStyles } from "./styles";
import { PageNumbers } from "./PageNumbers";
export var TablePagination = function (_a) {
    var _b, _c;
    var currentPage = _a.page, count = _a.count, onPageChange = _a.onPageChange;
    var classes = useTablePaginationStyles();
    var _d = __read(useState(1), 2), page = _d[0], setPage = _d[1];
    var handleChange = function (e) {
        var value = Number(e.target.value) > count
            ? String(count)
            : Number(e.target.value) < 1
                ? "1"
                : e.target.value;
        setPage(parseInt(value));
    };
    return (_jsxs(_Fragment, { children: [_jsx(TableCell, __assign({ colSpan: 2 }, { children: _jsxs("div", __assign({ className: clx(classes.text) }, { children: ["All pages: ", currentPage, "/", count] })) })), _jsx(TableCell, __assign({ colSpan: 1000 }, { children: _jsxs("div", __assign({ className: classes.tablePagination }, { children: [_jsxs("div", __assign({ className: classes.tablePaginationNavigator }, { children: [_jsx("span", __assign({ className: clx(classes.text, classes.tablePaginationNavigatorText) }, { children: "Navigate to:" })), _jsx("form", __assign({ onSubmit: function (e) {
                                        e.preventDefault();
                                        onPageChange(null, page);
                                    } }, { children: _jsx("input", { onChange: handleChange, value: page, className: clx(classes.tablePaginationNavigatorInput), type: "number", onBlur: function () { return onPageChange(null, page); } }) }))] })), _jsxs("div", __assign({ className: classes.pageNavigation }, { children: [_jsx(KeyboardArrowLeft, { fontSize: "large", onClick: function () { return currentPage > 1 && onPageChange(null, currentPage - 1); }, className: clx(classes.pageNavigationIcon, (_b = {},
                                        _b[classes.deactivatePageNavigationIcon] = currentPage < 2,
                                        _b)) }), _jsx(PageNumbers, { onPageChange: onPageChange, count: count, currentPage: currentPage }), _jsx(KeyboardArrowRight, { fontSize: "large", onClick: function () { return currentPage < count && onPageChange(null, currentPage + 1); }, className: clx(classes.pageNavigationIcon, (_c = {},
                                        _c[classes.deactivatePageNavigationIcon] = currentPage >= count,
                                        _c)) })] }))] })) }))] }));
};
