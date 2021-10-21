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
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import { Toggle } from "../Toggle/Toggle";
import { MenuTableStyles } from "./styles";
var StyledTableCell = withStyles(function (theme) {
    return createStyles({
        head: {
            backgroundColor: theme.design.colors.gray30,
            color: theme.design.colors.black,
            fontSize: "18px",
            fontWeight: "bold",
        },
        body: {
            fontSize: 18,
        },
    });
})(TableCell);
var StyledTableRow = withStyles(function (theme) {
    return createStyles({
        root: {
            "&:nth-of-type(odd)": {
                backgroundColor: theme.design.colors.white,
            },
        },
    });
})(TableRow);
export var MenuTable = function (_a) {
    var rows = _a.rows, editHandler = _a.editHandler, deleteHandler = _a.deleteHandler;
    var classes = MenuTableStyles();
    return (_jsx(TableContainer, __assign({ component: Paper }, { children: _jsxs(Table, __assign({ className: classes.table, "aria-label": "customized table" }, { children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(StyledTableCell, __assign({ align: "center" }, { children: "Menu" }), void 0), _jsx(StyledTableCell, __assign({ align: "center" }, { children: "Todays Schedule" }), void 0), _jsx(StyledTableCell, __assign({ align: "center" }, { children: "Last modified" }), void 0), _jsx(StyledTableCell, __assign({ align: "center" }, { children: "Active" }), void 0), _jsx(StyledTableCell, __assign({ align: "center" }, { children: "Actions" }), void 0)] }, void 0) }, void 0), _jsx(TableBody, { children: rows.map(function (row, id) { return (_jsxs(StyledTableRow, { children: [_jsx(StyledTableCell, __assign({ component: "th", scope: "row", align: "center" }, { children: row.Menu }), void 0), _jsx(StyledTableCell, __assign({ align: "center" }, { children: row.Schedule }), void 0), _jsx(StyledTableCell, __assign({ align: "center" }, { children: row.day }), void 0), _jsx(StyledTableCell, __assign({ align: "center" }, { children: _jsx("div", __assign({ className: classes.active }, { children: _jsx(Toggle, { name: "" }, void 0) }), void 0) }), void 0), _jsxs(StyledTableCell, __assign({ align: "center" }, { children: [_jsx(CreateIcon, { onClick: function () { return editHandler(id); } }, void 0), _jsx(DeleteIcon, { onClick: function () { return deleteHandler(id); }, className: classes.deleteIcon }, void 0)] }), void 0)] }, id)); }) }, void 0)] }), void 0) }), void 0));
};
