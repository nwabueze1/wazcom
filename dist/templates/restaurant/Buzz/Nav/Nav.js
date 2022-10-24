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
import { InputAdornment } from "@mui/material";
import { TextInput } from "io";
import { useNavStyles } from "./styles";
import { Search } from "@mui/icons-material";
import clx from "classnames";
export var Nav = function (_a) {
    var className = _a.className;
    var classes = useNavStyles();
    return (_jsx("div", __assign({ className: clx(classes.root, className) }, { children: _jsxs("div", __assign({ className: classes.header }, { children: [_jsx("div", __assign({ className: classes.logoContainer }, { children: _jsx("img", { className: classes.headerLogo, src: "https://s3.eu-west-2.amazonaws.com/medusa.com/Restaurant/hivedecklogo.svg" }, void 0) }), void 0), _jsx(TextInput, { className: classes.searchField, type: "text", placeholder: "Search menus, dishes etc", InputProps: {
                        startAdornment: (_jsx(InputAdornment, __assign({ position: "start" }, { children: _jsx(Search, {}, void 0) }), void 0)),
                    } }, void 0)] }), void 0) }), void 0));
};
