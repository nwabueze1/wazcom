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
import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
import { useState } from "react";
import { useTableControlsStyles } from "./styles";
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
    return (_jsx(Box, __assign({ className: classes.controls }, { children: _jsx(SearchInput, { name: "search", type: "text", placeholder: "Search", value: controlsFormData.search, onChange: function (e) { return handleControlsChange(e); }, className: classes.controlsInput }) })));
};
