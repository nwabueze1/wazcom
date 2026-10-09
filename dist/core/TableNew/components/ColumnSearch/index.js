import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useColumnSearchStyles } from "./styles";
import { SelectInput, TextInput } from "../../../../io";
import { useTheme } from "@mui/material";
export var ColumnSearch = function (_a) {
    var columns = _a.columns, search = _a.search, onChange = _a.onChange;
    var classes = useColumnSearchStyles();
    var theme = useTheme();
    var options = columns === null || columns === void 0 ? void 0 : columns.map(function (column) {
        var _a, _b;
        return ({
            label: column.name,
            value: (_b = (_a = column === null || column === void 0 ? void 0 : column.key) !== null && _a !== void 0 ? _a : column === null || column === void 0 ? void 0 : column.name) !== null && _b !== void 0 ? _b : "",
        });
    });
    return (_jsxs("div", { className: classes.searchByColumnContainer, children: [_jsx(SelectInput, { value: search === null || search === void 0 ? void 0 : search.column, options: options || [], name: "column", className: classes.searchColumnSelect, onChange: onChange, backgroundColor: theme.design.colors.waz_white, height: 40, label: "select search column", required: true }), _jsx(TextInput, { name: "value", className: classes.searchColumnText, classNames: {
                    input: classes.baseInput,
                }, placeholder: "Enter search text", value: search === null || search === void 0 ? void 0 : search.value, onChange: onChange })] }));
};
