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
import { useTablePaginationStyles } from "../styles";
import clx from "classnames";
export var Pagination = function (_a) {
    var currentPage = _a.currentPage, pages = _a.pages, setPage = _a.setPage;
    var classes = useTablePaginationStyles();
    var pagesArray = new Array(pages).fill("").map(function (_, index) { return index + 1; });
    var remainder = pages % 3;
    var slice = Math.floor(pages / 3);
    var firstSlice = pagesArray.slice(0, remainder > 0 ? slice + 1 : slice);
    var secondSlice = pagesArray.slice(remainder > 0 ? slice + 1 : slice, (remainder > 0 ? slice + 1 : slice) + 3);
    var thirdSlice = pagesArray.slice((remainder > 0 ? slice + 1 : slice) + 3);
    var tabs;
    if (firstSlice.includes(currentPage)) {
        tabs = __spreadArray(__spreadArray(__spreadArray([], __read(firstSlice), false), ["..."], false), __read(thirdSlice), false);
    }
    else if (secondSlice.includes(currentPage)) {
        tabs = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], __read(firstSlice.slice(0, 1)), false), ["..."], false), __read(secondSlice), false), __read(thirdSlice), false);
    }
    else {
        tabs = __spreadArray(__spreadArray(__spreadArray([], __read(firstSlice.slice(0, 3)), false), ["..."], false), __read(thirdSlice), false);
    }
    var getIntervalTab = function () {
        if (firstSlice.includes(currentPage))
            return secondSlice[secondSlice.length - 1];
        else if (secondSlice.includes(currentPage))
            return firstSlice[firstSlice.length - 1];
        else
            return firstSlice[firstSlice.length - 1];
    };
    var renderTabs = function () {
        return tabs.map(function (tab, index) {
            var isActive = currentPage === Number(tab);
            return (_jsx("p", __assign({ className: clx(classes.paginationPage, isActive && classes.paginationPageActive), onClick: function () {
                    if (isActive)
                        return;
                    var page = Number(tab === "..." ? getIntervalTab() : tab);
                    setPage(page);
                } }, { children: tab }), index));
        });
    };
    return _jsx(_Fragment, { children: renderTabs() });
};
