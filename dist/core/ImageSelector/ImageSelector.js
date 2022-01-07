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
import { useImageSelectorStyles } from "./styles";
import clx from "classnames";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
export var ImageSelector = function (_a) {
    var variant = _a.variant, className = _a.className;
    var classes = useImageSelectorStyles();
    return (_jsx("div", __assign({ className: clx(className, classes.root, variant === "circle" && classes.circle) }, { children: _jsx(CameraAltIcon, { className: classes.cameraIcon }, void 0) }), void 0));
};
