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
import { CircularProgress } from "@material-ui/core";
import useStyles from "./styles";
export var Spinner = function (props) {
    var classes = useStyles(props);
    return (_jsx("div", __assign({ className: classes.spinner }, { children: _jsx(CircularProgress, { color: "inherit", size: "25px" }, void 0) }), void 0));
};
