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
import { useDisplayCardStyles } from "./styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import clx from "classnames";
import { IoIosCloseCircle } from "react-icons/io";
import { Typography } from "@mui/material";
export var DisplayCard = function (_a) {
    var className = _a.className, total = _a.total, title = _a.title, color = _a.color, close = _a.close;
    var classes = useDisplayCardStyles();
    return (_jsx(Card, __assign({ className: clx(className, classes.root), variant: "outlined" }, { children: _jsxs(CardContent, __assign({ className: classes.content }, { children: [_jsxs("div", { children: [_jsx(Typography, __assign({ variant: "h3", color: color !== null && color !== void 0 ? color : "inherit" }, { children: total })), _jsx(Typography, __assign({ className: classes.pend, color: color !== null && color !== void 0 ? color : "inherit" }, { children: title }))] }), _jsx(IoIosCloseCircle, { className: classes.icon, onClick: close })] })) })));
};
