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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import clx from "classnames";
import { useTablePaginationStyles } from "./styles";
import { PageNumber } from "./PageNumber";
export var PageNumbers = function (_a) {
    var onPageChange = _a.onPageChange, count = _a.count, currentPage = _a.currentPage;
    var classes = useTablePaginationStyles();
    var pages = __spreadArray([], __read(Array(count + 1).keys()), false).slice(1);
    var pageRangeDisplayed = 3;
    var initialLeftPageNumbers = pages.slice(0, pageRangeDisplayed);
    var initialRightPageNumbers = pages.slice(-pageRangeDisplayed);
    var initialRemainingNumbers = pages.slice(pageRangeDisplayed, -pageRangeDisplayed);
    var _b = __read(useState(initialLeftPageNumbers), 2), leftPageNumbers = _b[0], setLeftPages = _b[1];
    // const [rightPageNumbers, setRightPages] = useState(initialRightPageNumbers);
    // const [remainingPageNumbers, setRemainingPageNumbers] = useState(
    //   initialRemainingNumbers,
    // );
    var _c = __read(useState(0), 2), n = _c[0], setN = _c[1];
    var renderNumbers = function () {
        if (pages.length < 5) {
            return pages.map(function (page, index) { return (_jsx(PageNumber, { page: page, onPageChange: onPageChange, currentPage: currentPage }, index)); });
        }
        var leftPages = leftPageNumbers.map(function (page, leftIndex) { return (_jsx(PageNumber, { page: page, onPageChange: onPageChange, currentPage: currentPage }, leftIndex)); });
        var rightPages = initialRightPageNumbers.map(function (page, rightIndex) { return (_jsx(PageNumber, { page: page, onPageChange: onPageChange, currentPage: currentPage }, rightIndex)); });
        var dots = initialRemainingNumbers[n * pageRangeDisplayed] ? (_jsx("span", { className: clx(classes.pageNumber), onClick: function () {
                var newArr = __spreadArray(__spreadArray([], __read(leftPageNumbers), false), __read(initialRemainingNumbers.slice(n * pageRangeDisplayed, (n + 1) * pageRangeDisplayed)), false);
                setN(function (n) { return n + 1; });
                setLeftPages(newArr.slice(-pageRangeDisplayed));
            }, children: "..." })) : (_jsx(_Fragment, {}));
        return [leftPages, dots, rightPages];
    };
    return _jsx("div", { className: clx(classes.text), children: renderNumbers() });
};
