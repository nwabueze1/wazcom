import { jsx as _jsx } from "react/jsx-runtime";
import { useLayoutStyles } from "./styles";
import clx from "classnames";
import _ from "lodash";
export var Layout = function (_a) {
    var className = _a.className, count = _a.count, onclick = _a.onclick, active = _a.active;
    var classes = useLayoutStyles();
    return (_jsx("div", { className: clx(classes.root, className), onClick: onclick, children: _.times(count, function () { return (_jsx("div", { className: clx(classes.innerBox, active && classes.active) })); }) }));
};
