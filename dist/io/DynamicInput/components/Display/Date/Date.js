import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDateStyles } from "./styles";
import { BsCalendarDate } from "react-icons/bs";
export var Date = function () {
    var classes = useDateStyles();
    return (_jsxs("div", { className: classes.root, children: [_jsx("p", { className: classes.dateText, children: "Month, day, year" }), _jsx(BsCalendarDate, { className: classes.dateIcon })] }));
};
