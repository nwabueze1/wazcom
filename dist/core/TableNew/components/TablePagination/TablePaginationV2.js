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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTablePaginationV2Styles } from "./stylesV2";
import clx from "classnames";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
export var TablePaginationV2 = function (_a) {
    var _b, _c;
    var _d, _e;
    var currentPage = _a.currentPage, lastPage = _a.lastPage, count = _a.count, setTablePagination = _a.setTablePagination, classNames = _a.classNames;
    var classes = useTablePaginationV2Styles();
    var renderPages = function () {
        var maxVisiblePages = 25;
        var pageNumbers = [];
        if (lastPage <= maxVisiblePages) {
            pageNumbers.push.apply(pageNumbers, __spreadArray([], __read(Array.from({ length: lastPage }, function (_, index) { return index + 1; })), false));
        }
        else {
            var leftBound = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
            var rightBound = Math.min(leftBound + maxVisiblePages - 1, lastPage);
            if (leftBound > 1) {
                pageNumbers.push(1, "ellipsis");
            }
            for (var i = leftBound; i <= rightBound; i++) {
                pageNumbers.push(i);
            }
            if (rightBound < lastPage) {
                pageNumbers.push("ellipsis", lastPage);
            }
        }
        return (_jsx("div", { className: classes.elipsisContainer, children: pageNumbers.map(function (pageNumber, index) {
                var _a;
                var _b;
                if (pageNumber === "ellipsis") {
                    return (_jsx("span", { className: classes.elipsis, children: "..." }, "ellipsis".concat(index)));
                }
                var isActive = currentPage === pageNumber;
                return (_jsx("p", { className: clx(classes.paginationPage, isActive && classes.paginationPageActive, classNames === null || classNames === void 0 ? void 0 : classNames.paginationPage, (_a = {},
                        _a[(_b = classNames === null || classNames === void 0 ? void 0 : classNames.paginationPageActive) !== null && _b !== void 0 ? _b : ""] = isActive,
                        _a)), onClick: function () {
                        if (!isActive) {
                            setTablePagination({
                                count: count,
                                lastPage: lastPage,
                                currentPage: pageNumber,
                            });
                        }
                    }, children: pageNumber }, pageNumber));
            }) }));
    };
    var handlePreviousClick = function () {
        if (currentPage === 1)
            return;
        setTablePagination({ count: count, lastPage: lastPage, currentPage: currentPage - 1 });
    };
    var handleNextClick = function () {
        if (currentPage === lastPage)
            return;
        setTablePagination({ count: count, lastPage: lastPage, currentPage: currentPage + 1 });
    };
    return (_jsxs("div", { className: clx(classes.root, classNames === null || classNames === void 0 ? void 0 : classNames.root), children: [_jsxs("button", { className: clx(classes.paginationDirection, currentPage > 1 && classes.paginationDirectionActive, classNames === null || classNames === void 0 ? void 0 : classNames.paginationDirection, (_b = {},
                    _b[(_d = classNames === null || classNames === void 0 ? void 0 : classNames.paginationDirectionActive) !== null && _d !== void 0 ? _d : ""] = currentPage > 1,
                    _b)), onClick: handlePreviousClick, children: [_jsx(IoArrowBack, { className: classes.paginationDirectionIcon }), _jsx("span", { children: "Previous" })] }), _jsx("div", { className: classes.paginationPages, children: renderPages() }), _jsxs("button", { className: clx(classes.paginationDirection, currentPage < lastPage && classes.paginationDirectionActive, classNames === null || classNames === void 0 ? void 0 : classNames.paginationDirection, (_c = {},
                    _c[(_e = classNames === null || classNames === void 0 ? void 0 : classNames.paginationDirectionActive) !== null && _e !== void 0 ? _e : ""] = currentPage < lastPage,
                    _c)), onClick: handleNextClick, children: [_jsx("span", { children: "Next" }), _jsx(IoArrowForward, { className: classes.paginationDirectionIcon })] })] }));
};
