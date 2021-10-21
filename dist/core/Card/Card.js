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
import { Card as MuiCard, CardActions, CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "core";
export var Card = function (_a) {
    var title = _a.title, content = _a.content, _b = _a.image, src = _b.src, alt = _b.alt;
    return (_jsxs(MuiCard, { children: [_jsx(CardMedia, { component: "img", height: "140", image: src, alt: alt }, void 0), (title || content) && (_jsxs(CardContent, { children: [title && (_jsx(Typography, __assign({ gutterBottom: true, variant: "h5", component: "div" }, { children: title }), void 0)), content && _jsx(Typography, __assign({ variant: "body2" }, { children: content }), void 0)] }, void 0)), _jsxs(CardActions, { children: [_jsx(Button, __assign({ size: "small" }, { children: "Share" }), void 0), _jsx(Button, __assign({ size: "small" }, { children: "Learn More" }), void 0)] }, void 0)] }, void 0));
};
