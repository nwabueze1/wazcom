import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useCopyrightStyles } from "./styles";
export var Copyright = function () {
    var classes = useCopyrightStyles();
    return (_jsx("div", { className: classes.root, children: _jsxs("p", { children: [new Date().getFullYear(), " \u00A9 All rights reserved"] }) }));
};
