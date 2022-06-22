export var useHandleChangePage = function (changePage) {
    return function (event, newPage) {
        event;
        changePage === null || changePage === void 0 ? void 0 : changePage(newPage);
    };
};
export var useHandleChangeRowsPerPage = function (changeRowsPerPage, changePage) {
    return function (event) {
        changeRowsPerPage === null || changeRowsPerPage === void 0 ? void 0 : changeRowsPerPage(parseInt(event.target.value, 10) - 1);
        changePage === null || changePage === void 0 ? void 0 : changePage(0);
    };
};
export var useGetRowsPerPage = function (paginatorInfo, rowsPerPage) { var _a; return (_a = paginatorInfo === null || paginatorInfo === void 0 ? void 0 : paginatorInfo.perPage) !== null && _a !== void 0 ? _a : rowsPerPage; };
export var useGetCurrentPage = function (paginatorInfo) {
    return (paginatorInfo === null || paginatorInfo === void 0 ? void 0 : paginatorInfo.currentPage) ? paginatorInfo === null || paginatorInfo === void 0 ? void 0 : paginatorInfo.currentPage : 1;
};
