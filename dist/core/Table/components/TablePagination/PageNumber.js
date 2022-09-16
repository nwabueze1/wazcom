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
import clx from "classnames";
import { useTablePaginationStyles } from "./styles";
export var PageNumber = function (_a) {
    var _b;
    var onPageChange = _a.onPageChange, page = _a.page, currentPage = _a.currentPage;
    var classes = useTablePaginationStyles();
    return (_jsx("span", __assign({ className: clx(classes.pageNumber, (_b = {},
            _b[classes.activePage] = page == currentPage,
            _b)), onClick: function () { return onPageChange(null, page); } }, { children: page })));
};
