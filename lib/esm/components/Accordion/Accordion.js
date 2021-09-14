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
import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary, } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clx from "classnames";
import { useCallback } from "react";
import Table from "../Table/Table";
import { useAccordionStyles } from "./styles";
export var Accordion = function (_a) {
    var className = _a.className, _b = _a.title, title = _b === void 0 ? "Opened Group 1" : _b;
    var classes = useAccordionStyles();
    var handleChange = useCallback(function () {
        // onChange && onChange();
        // TODO: Handle onChange properly;
    }, []);
    return (_jsxs(MuiAccordion, __assign({ className: clx(className, classes.root) }, { children: [_jsx(AccordionSummary, __assign({ className: classes.headerDesc, expandIcon: _jsx(ExpandMoreIcon, { className: classes.expandIcon }, void 0), "aria-controls": "panel1a-content", id: "panel1a-header" }, { children: _jsx(Typography, __assign({ className: classes.heading }, { children: title }), void 0) }), void 0), _jsx(AccordionDetails, { children: _jsx(Table, { handleChangeInput: handleChange }, void 0) }, void 0)] }), void 0));
};
