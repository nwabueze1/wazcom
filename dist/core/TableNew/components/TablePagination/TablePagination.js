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
import { useTablePaginationStyles } from "./styles";
import { SelectInput } from "../../../../io";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import clx from "classnames";
export var TablePagination = function (_a) {
    var currentPage = _a.currentPage, lastPage = _a.lastPage, count = _a.count, setTablePagination = _a.setTablePagination;
    var classes = useTablePaginationStyles();
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
                if (pageNumber === "ellipsis") {
                    return (_jsx("span", { className: classes.elipsis, children: "..." }, "ellipsis".concat(index)));
                }
                var isActive = currentPage === pageNumber;
                return (_jsx("p", { className: clx(classes.paginationPage, isActive && classes.paginationPageActive), onClick: function () {
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
    return (_jsxs("div", { className: classes.root, children: [_jsxs("div", { className: clx(classes.paginationDirection, currentPage > 1 && classes.paginationDirectionActive), onClick: handlePreviousClick, children: [_jsx(BsFillCaretLeftFill, { className: classes.paginationDirectionIcon }), _jsx("p", { children: "Previous" })] }), _jsxs("div", { className: classes.paginationRows, children: [_jsx("p", { children: "Rows per page" }), _jsx(SelectInput, { className: classes.paginationSelect, classNames: {
                            classes: {
                                select: classes.paginationSelectInput,
                                icon: classes.paginationSelectInputIcon,
                            },
                            optionLabel: classes.paginationSelectInputLabel,
                        }, options: [
                            { label: "5", value: "5" },
                            { label: "10", value: "10" },
                            { label: "20", value: "20" },
                        ], onChange: function (_a) {
                            var count = _a.value;
                            setTablePagination({
                                currentPage: 1,
                                lastPage: lastPage,
                                count: Number(count),
                            });
                        }, value: String(count) })] }), _jsx("div", { className: classes.paginationPages, children: renderPages() }), _jsxs("div", { className: clx(classes.paginationDirection, currentPage < lastPage && classes.paginationDirectionActive), onClick: handleNextClick, children: [_jsx("p", { children: "Next" }), _jsx(BsFillCaretRightFill, { className: classes.paginationDirectionIcon })] })] }));
};
