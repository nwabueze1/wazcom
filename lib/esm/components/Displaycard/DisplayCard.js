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
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import clx from "classnames";
import { IoIosCloseCircle } from "react-icons/io";
import { Typography } from "@material-ui/core";
export var DisplayCard = function (_a) {
    var className = _a.className, total = _a.total, title = _a.title;
    var classes = useDisplayCardStyles();
    return (_jsx(Card, __assign({ className: clx(className, classes.root), variant: "outlined" }, { children: _jsxs(CardContent, __assign({ className: classes.content }, { children: [_jsxs("div", { children: [_jsx(Typography, __assign({ variant: "h3" }, { children: total }), void 0), _jsx("div", __assign({ className: classes.pend }, { children: title }), void 0)] }, void 0), _jsx(IoIosCloseCircle, { className: classes.icon }, void 0)] }), void 0) }), void 0));
};
