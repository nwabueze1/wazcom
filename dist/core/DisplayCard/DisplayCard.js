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
    return (_jsx(Card, { className: clx(className, classes.root), variant: "outlined", children: _jsxs(CardContent, { className: classes.content, children: [_jsxs("div", { children: [_jsx(Typography, { variant: "h3", color: color !== null && color !== void 0 ? color : "inherit", children: total }), _jsx(Typography, { className: classes.pend, color: color !== null && color !== void 0 ? color : "inherit", children: title })] }), _jsx(IoIosCloseCircle, { className: classes.icon, onClick: close })] }) }));
};
