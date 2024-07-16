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
    return (_jsx(Card, { className: clx(classes.root, className, classes.disableState), variant: "outlined", children: _jsxs(CardContent, { className: classes.cardContents, children: [_jsx("div", { className: classes.outerBar, children: _jsx("div", { className: classes.imgField, style: {
                            backgroundImage: "url(".concat(src, ")"),
                        } }) }), _jsxs("div", { className: classes.mealDetail, children: [_jsx(Typography, { className: classes.mealName, variant: "h5", children: title }), _jsx(Typography, { className: classes.details, children: description }), _jsx(Typography, { className: classes.price, children: amount })] }), _jsxs("div", { className: classes.icons, children: [_jsx(MoreVertIcon, { className: classes.vert }), _jsx(ToggleInput, { name: "" })] })] }) }));
};
