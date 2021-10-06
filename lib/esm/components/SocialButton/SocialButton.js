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
import { Button } from "@material-ui/core";
import { useStyles } from "./styles";
export var SocialButton = function (_a) {
    var image = _a.image, title = _a.title;
    var classes = useStyles();
    return (_jsx(Button, __assign({ variant: "contained", color: "inherit", className: classes.button, startIcon: _jsx("img", { src: image.src, className: "icon", alt: image.alt }, void 0) }, { children: title }), void 0));
};
