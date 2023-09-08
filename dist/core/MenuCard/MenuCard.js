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
import { MdMoreVert as MoreVertIcon } from "react-icons/md";
import { ToggleInput } from "../../io/ToggleInput/ToggleInput";
export var MenuCard = function (_a) {
    var className = _a.className, amount = _a.amount, description = _a.description, title = _a.title, src = _a.image.src;
    var classes = useMenuCardStyles();
    return (_jsx(Card, __assign({ className: clx(classes.root, className, classes.disableState), variant: "outlined" }, { children: _jsxs(CardContent, __assign({ className: classes.cardContents }, { children: [_jsx("div", __assign({ className: classes.outerBar }, { children: _jsx("div", { className: classes.imgField, style: {
                            backgroundImage: "url(".concat(src, ")"),
                        } }) })), _jsxs("div", __assign({ className: classes.mealDetail }, { children: [_jsx(Typography, __assign({ className: classes.mealName, variant: "h5" }, { children: title })), _jsx(Typography, __assign({ className: classes.details }, { children: description })), _jsx(Typography, __assign({ className: classes.price }, { children: amount }))] })), _jsxs("div", __assign({ className: classes.icons }, { children: [_jsx(MoreVertIcon, { className: classes.vert }), _jsx(ToggleInput, { name: "" })] }))] })) })));
};
