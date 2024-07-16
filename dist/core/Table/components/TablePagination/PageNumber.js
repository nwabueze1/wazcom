import { jsx as _jsx } from "react/jsx-runtime";
import clx from "classnames";
import { useTablePaginationStyles } from "./styles";
export var PageNumber = function (_a) {
    var _b;
    var onPageChange = _a.onPageChange, page = _a.page, currentPage = _a.currentPage;
    var classes = useTablePaginationStyles();
    return (_jsx("span", { className: clx(classes.pageNumber, (_b = {},
            _b[classes.activePage] = page == currentPage,
            _b)), onClick: function () { return onPageChange(null, page); }, children: page }));
};
