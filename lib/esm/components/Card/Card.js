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
import { useCardStyles } from "./styles";
import { Card as MuiCard } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
export var Card = function (_a) {
    var title = _a.title, content = _a.content, _b = _a.image, src = _b.src, alt = _b.alt;
    var classes = useCardStyles();
    return (_jsx(MuiCard, __assign({ className: classes.root, variant: "outlined" }, { children: _jsxs(CardContent, { children: [_jsx("div", { children: _jsx("img", { src: src, alt: alt !== null && alt !== void 0 ? alt : title }, void 0) }, void 0), _jsx(Typography, __assign({ className: classes.regtext }, { children: title }), void 0), _jsx("div", __assign({ className: classes.text }, { children: content }), void 0)] }, void 0) }), void 0));
};
