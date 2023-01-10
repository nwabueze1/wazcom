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
import { useLoaderStyles } from "./styles";
import { CircularProgress } from "@mui/material";
export var Loader = function () {
    var classes = useLoaderStyles();
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsx(CircularProgress, { size: "20px", color: "success" }) })));
};
