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
import { useCallback } from "react";
import { Card as MuiCard, CardActions, CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "..";
import { useCardStyles } from "./styles";
import clx from "classnames";
export var Card = function (_a) {
    var className = _a.className, title = _a.title, content = _a.content, _b = _a.image, src = _b.src, alt = _b.alt, buttons = _a.buttons, _c = _a.align, align = _c === void 0 ? "left" : _c;
    var classes = useCardStyles();
    var displayButtons = useCallback(function () {
        var _a;
        return (_a = buttons === null || buttons === void 0 ? void 0 : buttons.values) === null || _a === void 0 ? void 0 : _a.map(function (value, index) {
            var _a;
            return (_jsx(Button, __assign({ size: (_a = buttons === null || buttons === void 0 ? void 0 : buttons.size) !== null && _a !== void 0 ? _a : "small" }, { children: value }), index));
        });
    }, [buttons]);
    var getAlignVariant = useCallback(function () {
        var variantClass;
        switch (align) {
            case "left":
                variantClass = classes.leftAlign;
                break;
            case "center":
                variantClass = classes.centerAlign;
                break;
            case "right":
                variantClass = classes.rightAlign;
                break;
            default:
                variantClass = classes.leftAlign;
        }
        return variantClass;
    }, [align]);
    return (_jsxs(MuiCard, __assign({ className: clx(classes.root, className, getAlignVariant()) }, { children: [_jsx(CardMedia, { component: "img", height: "140", image: src, alt: alt }, void 0), _jsxs(CardContent, { children: [_jsx(Typography, __assign({ gutterBottom: true, variant: "h5", component: "div" }, { children: title }), void 0), _jsx(Typography, __assign({ variant: "body2" }, { children: content }), void 0)] }, void 0), _jsx(CardActions, { children: displayButtons() }, void 0)] }), void 0));
};
