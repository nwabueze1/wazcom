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
import { useMenuCardStyles } from "./styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import clx from "classnames";
import { Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Toggle } from "../Toggle/Toggle";
export var MenuCard = function (_a) {
    var className = _a.className, amount = _a.amount, details = _a.details, meal = _a.meal, image = _a.image;
    var classes = useMenuCardStyles();
    return (_jsx(Card, __assign({ className: clx(className, classes.root, classes.disableState), variant: "outlined" }, { children: _jsxs(CardContent, __assign({ className: classes.cardContents }, { children: [_jsx("div", __assign({ className: classes.outerBar }, { children: _jsx("div", { className: classes.imgField, style: {
                            backgroundImage: "url(" + image + ")",
                        } }, void 0) }), void 0), _jsxs("div", __assign({ className: classes.mealDetail }, { children: [_jsx(Typography, __assign({ className: classes.mealName, variant: "h5" }, { children: meal }), void 0), _jsx(Typography, __assign({ className: classes.details }, { children: details }), void 0), _jsx(Typography, __assign({ className: classes.price }, { children: amount }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.icons }, { children: [_jsx(MoreVertIcon, {}, void 0), _jsx(Toggle, { name: "" }, void 0)] }), void 0)] }), void 0) }), void 0));
};
