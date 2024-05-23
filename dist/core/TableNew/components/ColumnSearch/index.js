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
import { useColumnSearchStyles } from "./styles";
import { SelectInput, TextInput } from "../../../../io";
import { Button } from "../../../Button";
import { useTheme } from "@mui/material";
export var ColumnSearch = function (_a) {
    var columns = _a.columns, search = _a.search, loading = _a.loading, onChange = _a.onChange, onSearchBtnClick = _a.onSearchBtnClick;
    var classes = useColumnSearchStyles();
    var theme = useTheme();
    var isColumnSearchParamsValid = (search === null || search === void 0 ? void 0 : search.column) && (search === null || search === void 0 ? void 0 : search.value);
    var options = columns === null || columns === void 0 ? void 0 : columns.map(function (column) {
        var _a, _b;
        return ({
            label: column.name,
            value: (_b = (_a = column === null || column === void 0 ? void 0 : column.unique_identifier) !== null && _a !== void 0 ? _a : column === null || column === void 0 ? void 0 : column.name) !== null && _b !== void 0 ? _b : "",
        });
    });
    return (_jsxs("div", __assign({ className: classes.searchByColumnContainer }, { children: [_jsx(SelectInput, { value: search === null || search === void 0 ? void 0 : search.column, options: options || [], name: "column", className: classes.searchColumnSelect, onChange: onChange, backgroundColor: theme.design.colors.waz_white, height: 40, label: "select search column", required: true }), _jsx(TextInput, { name: "value", className: classes.searchColumnText, classNames: {
                    input: classes.baseInput,
                }, placeholder: "Enter search text", value: search === null || search === void 0 ? void 0 : search.value, onChange: onChange }), _jsx(Button, __assign({ className: classes.searchBtn, isDisabled: !isColumnSearchParamsValid || loading, onClick: onSearchBtnClick }, { children: "Search" }))] })));
};
