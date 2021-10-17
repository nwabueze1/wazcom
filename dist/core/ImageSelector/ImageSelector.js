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
import { useImageSelectorStyles } from "./styles";
import clx from "classnames";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
export var ImageSelector = function (_a) {
    var variant = _a.variant, className = _a.className, height = _a.height, width = _a.width, placeholder = _a.placeholder, onClick = _a.onClick;
    var classes = useImageSelectorStyles();
    return (_jsxs("div", __assign({ className: clx(className, classes.container, variant === 'circle' && classes.circle), style: { height: height, width: width, backgroundImage: "url(" + placeholder + ")", } }, { children: [_jsx("div", { className: "selectHover " + (variant === 'circle' && "circle") }, void 0), _jsx("div", __assign({ className: "cameraIcon" }, { children: _jsx(CameraAltIcon, { style: { fontSize: "64px" }, onClick: onClick }, void 0) }), void 0)] }), void 0));
};
