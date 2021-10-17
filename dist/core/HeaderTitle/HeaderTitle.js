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
import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from "@material-ui/core";
import { useHeaderTitleStyles } from "./styles";
import clx from "classnames";
export var HeaderTitle = function (_a) {
    var className = _a.className, children = _a.children;
    var classes = useHeaderTitleStyles();
    return (_jsx(Typography, __assign({ className: clx(classes.root, className), variant: "h1" }, { children: children }), void 0));
};
