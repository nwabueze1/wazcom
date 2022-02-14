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
import { useAccordionStyles } from "./styles";
import { Accordion as MuiAccordion, AccordionSummary as MuiAccordionSummary, AccordionDetails as MuiAccordionDetails, Typography, } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { kebabCase } from "lodash";
import clx from "classnames";
export var Accordion = function (_a) {
    var title = _a.title, className = _a.className, square = _a.square, defaultExpanded = _a.defaultExpanded, children = _a.children;
    var classes = useAccordionStyles();
    return (_jsxs(MuiAccordion, __assign({ square: square, className: clx(classes.root, className), defaultExpanded: defaultExpanded }, { children: [_jsx(MuiAccordionSummary, __assign({ id: kebabCase(title), "aria-controls": kebabCase(title), className: classes.summary, expandIcon: _jsx(ExpandMoreIcon, { className: classes.icon }, void 0) }, { children: _jsx(Typography, __assign({ variant: "body1" }, { children: title }), void 0) }), void 0), _jsx(MuiAccordionDetails, __assign({ className: classes.details }, { children: children }), void 0)] }), void 0));
};
