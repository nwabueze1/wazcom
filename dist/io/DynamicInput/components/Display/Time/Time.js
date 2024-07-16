import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTimeStyles } from "./styles";
import { BiTime } from "react-icons/bi";
export var Time = function () {
    var classes = useTimeStyles();
    return (_jsxs("div", { className: classes.root, children: [_jsx("p", { className: classes.timeText, children: "Time" }), _jsx(BiTime, { className: classes.timeIcon })] }));
};
