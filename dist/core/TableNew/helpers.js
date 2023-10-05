export var parseQueryVariables = function (search, sort, pagination) {
    var parsedSort = [];
    sort.forEach(function (_a) {
        var column = _a.column, order = _a.order;
        parsedSort.push({ column: column, order: order.toUpperCase(), type: order.toUpperCase() });
    });
    return { search: search, sort: parsedSort, page: pagination.currentPage, first: pagination.count };
};
