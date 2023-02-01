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
import { useTablePaginationStyles } from "./styles";
import { SelectInput } from "../../../../io";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import clx from "classnames";
export var TablePagination = function (_a) {
    var currentPage = _a.currentPage, lastPage = _a.lastPage, count = _a.count, setTablePagination = _a.setTablePagination;
    var classes = useTablePaginationStyles();
    var renderPages = function () {
        return new Array(lastPage).fill("").map(function (_, index) {
            var isActive = currentPage === index + 1;
            return (_jsx("p", __assign({ className: clx(classes.paginationPage, isActive && classes.paginationPageActive), onClick: function () {
                    if (isActive)
                        return;
                    setTablePagination({ count: count, lastPage: lastPage, currentPage: index + 1 });
                } }, { children: index + 1 }), index));
        });
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
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: clx(classes.paginationDirection, currentPage > 1 && classes.paginationDirectionActive), onClick: handlePreviousClick }, { children: [_jsx(BsFillCaretLeftFill, { className: classes.paginationDirectionIcon }, void 0), _jsx("p", { children: "Previous" }, void 0)] }), void 0), _jsxs("div", __assign({ className: classes.paginationRows }, { children: [_jsx("p", { children: "Rows per page" }, void 0), _jsx(SelectInput, { className: classes.paginationSelect, classNames: {
                            classes: {
                                select: classes.paginationSelectInput,
                                icon: classes.paginationSelectInputIcon,
                            },
                            optionLabel: classes.paginationSelectInputLabel,
                        }, options: [
                            { label: "2", value: "2" },
                            { label: "5", value: "5" },
                            { label: "10", value: "10" },
                            { label: "20", value: "20" },
                        ], onChange: function (_a) {
                            var count = _a.value;
                            setTablePagination({ currentPage: currentPage, lastPage: lastPage, count: Number(count) });
                        }, value: String(count) }, void 0)] }), void 0), _jsx("div", __assign({ className: classes.paginationPages }, { children: renderPages() }), void 0), _jsxs("div", __assign({ className: clx(classes.paginationDirection, currentPage < lastPage && classes.paginationDirectionActive), onClick: handleNextClick }, { children: [_jsx("p", { children: "Next" }, void 0), _jsx(BsFillCaretRightFill, { className: classes.paginationDirectionIcon }, void 0)] }), void 0)] }), void 0));
};
