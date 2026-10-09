import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useStyles } from "./useStyles";
import clx from "classnames";
import { MdClose } from "react-icons/md";
export var FilterOptionsDisplay = function (_a) {
    var filters = _a.filters, columns = _a.columns, setFilters = _a.setFilters;
    var classes = useStyles();
    var handleRemoveFilter = function (index) {
        var filtered = filters.filter(function (_, i) { return i !== index; });
        setFilters === null || setFilters === void 0 ? void 0 : setFilters(filtered);
    };
    var handleClearFilters = function () {
        setFilters === null || setFilters === void 0 ? void 0 : setFilters([]);
    };
    var renderFilter = function (filter, index) {
        var _a, _b;
        var column = columns.find(function (c) { return c.key === filter.column; });
        var operatorLabel = (_b = (_a = column === null || column === void 0 ? void 0 : column.filterOperators) === null || _a === void 0 ? void 0 : _a.find(function (o) { return o.value === filter.operator; })) === null || _b === void 0 ? void 0 : _b.label;
        return (_jsxs("div", { className: classes.filter, children: [(column === null || column === void 0 ? void 0 : column.icon) && _jsx("span", { className: classes.filterIcon, children: column === null || column === void 0 ? void 0 : column.icon }), _jsx("span", { className: classes.filterText, children: column === null || column === void 0 ? void 0 : column.name }), _jsx("span", { className: clx(classes.filterText, "label"), children: operatorLabel }), _jsx("span", { className: classes.filterText, children: filter.value }), _jsx("button", { className: classes.filterRemove, onClick: function () { return handleRemoveFilter(index); }, title: "close", children: _jsx(MdClose, {}) })] }, index));
    };
    return (_jsxs("div", { className: classes.root, children: [_jsx("p", { className: classes.title, children: "Result:" }), filters.slice(0, 3).map(renderFilter), filters.length > 3 && _jsxs("p", { className: classes.moreFilters, children: ["+", filters.length - 3, " more"] }), _jsxs("button", { className: classes.clearFilters, title: "clear", onClick: handleClearFilters, children: ["Clear all filters", _jsx(MdClose, {})] })] }));
};
