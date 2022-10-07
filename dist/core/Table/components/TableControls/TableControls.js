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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, ListItemIcon, MenuItem } from "@mui/material";
import { useState } from "react";
import { useTableControlsStyles } from "./styles";
import { Logout, Print, SendToMobileOutlined, Settings } from "@mui/icons-material";
import { Button } from "../../../Button";
import { exportToCSV, exportToXlsx } from "../../helpers";
import Menu from "@mui/material/Menu";
import { TableFilter } from "../TableFilter";
import { SearchInput } from "./SearchInput";
export var TableControls = function (_a) {
    var controls = _a.controls, handleControlsChange = _a.handleControlsChange, showFilter = _a.showFilter, setShowFilter = _a.setShowFilter, fields = _a.fields, values = _a.values, filters = _a.filters, setFilters = _a.setFilters, tableValues = _a.tableValues, controlsFormData = _a.controlsFormData;
    var classes = useTableControlsStyles();
    var _b = __read(useState(null), 2), anchorEl = _b[0], setAnchorEl = _b[1];
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    return (_jsxs(Box, __assign({ className: classes.controls }, { children: [(controls === null || controls === void 0 ? void 0 : controls.filter) && (_jsx(Box, __assign({ className: classes.filterControls }, { children: _jsx(TableFilter, { showFilter: showFilter, setShowFilter: setShowFilter, fields: fields, values: values, filters: filters, setFilters: setFilters }, void 0) }), void 0)), _jsx(SearchInput, { name: "search", type: "text", placeholder: "Search", value: controlsFormData.search, onChange: function (e) { return handleControlsChange(e); }, className: classes.controlsInput }, void 0), _jsxs(Box, __assign({ className: classes.rightControls }, { children: [(controls === null || controls === void 0 ? void 0 : controls.canPrint) && (_jsxs(Button, __assign({ className: classes.printButton, variant: "outlined", onClick: function () { return window.print(); } }, { children: [_jsx(Print, { fontSize: "small" }, void 0), _jsx("span", __assign({ className: classes.controlButtonText }, { children: "Print" }), void 0)] }), void 0)), (controls === null || controls === void 0 ? void 0 : controls.canExport) && (_jsxs(_Fragment, { children: [_jsxs(Button, __assign({ className: classes.exportButton, variant: "outlined", onClick: handleClick, "aria-controls": open ? "account-menu" : undefined, "aria-haspopup": "true", "aria-expanded": open ? "true" : undefined }, { children: [_jsx(SendToMobileOutlined, { fontSize: "small" }, void 0), _jsx("span", __assign({ className: classes.controlButtonText }, { children: "Export" }), void 0)] }), void 0), _jsxs(Menu, __assign({ anchorEl: anchorEl, id: "account-menu", open: open, onClose: handleClose, onClick: handleClose, PaperProps: {
                                    elevation: 0,
                                    sx: {
                                        overflow: "visible",
                                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                        mt: 1.5,
                                        "& .MuiAvatar-root": {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        "&:before": {
                                            content: '""',
                                            display: "block",
                                            position: "absolute",
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: "background.paper",
                                            transform: "translateY(-50%) rotate(45deg)",
                                            zIndex: 0,
                                        },
                                    },
                                }, transformOrigin: { horizontal: "right", vertical: "top" }, anchorOrigin: { horizontal: "right", vertical: "bottom" } }, { children: [_jsxs(MenuItem, __assign({ onClick: function () { return exportToCSV("all_data", tableValues); } }, { children: [_jsx(ListItemIcon, { children: _jsx(Settings, { fontSize: "small" }, void 0) }, void 0), "Export as .csv"] }), void 0), _jsxs(MenuItem, __assign({ onClick: function () { return exportToXlsx("all_data", tableValues); } }, { children: [_jsx(ListItemIcon, { children: _jsx(Logout, { fontSize: "small" }, void 0) }, void 0), "Export as .xlsx"] }), void 0)] }), void 0)] }, void 0))] }), void 0)] }), void 0));
};
