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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Modal, Fade, Backdrop, InputLabel } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import clx from "classnames";
import { useImageSelectorStyles } from "./styles";
import { GqlMediaLibrary } from "../GqlMediaLibrary";
import { getSizeVariants } from "../../helpers/size";
export var GqlMediaLibrarySelector = function (_a) {
    var _b = _a.displayLibrary, displayLibrary = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? "circle" : _c, _d = _a.size, size = _d === void 0 ? "sm" : _d, width = _a.width, height = _a.height, className = _a.className, onChange = _a.onChange, name = _a.name, label = _a.label, props = __rest(_a, ["displayLibrary", "variant", "size", "width", "height", "className", "onChange", "name", "label"]);
    var classes = useImageSelectorStyles();
    var _e = useState(false), showIcon = _e[0], setShowIcon = _e[1];
    var _f = useState(), placeholder = _f[0], setPlaceholder = _f[1];
    var _g = useState(false), open = _g[0], setOpen = _g[1];
    var handleOpen = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    var handleSelectImage = function (_a) {
        var name = _a.name, value = _a.value;
        setOpen(false);
        setPlaceholder(value.url);
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name !== null && name !== void 0 ? name : "image", value: value });
    };
    var variants = getSizeVariants(classes, size);
    return (_jsxs(_Fragment, { children: [label && (_jsx(InputLabel, __assign({ className: classes.label, htmlFor: name }, { children: label }), void 0)), _jsxs("div", __assign({ className: clx(classes.container, className, variant === "circle" && classes.circle, variants[0]), style: { backgroundImage: "url(".concat(placeholder, ")"), width: width, height: height }, onMouseEnter: function () { return setShowIcon(true); }, onMouseLeave: function () { return setShowIcon(false); }, onClick: function () {
                    if (displayLibrary)
                        return;
                    handleOpen();
                } }, { children: [_jsx(Modal, __assign({ open: open, BackdropProps: {
                            timeout: 500,
                        }, closeAfterTransition: true, onClose: handleClose, onBackdropClick: function (e) { return e.stopPropagation(); }, className: classes.modal, BackdropComponent: Backdrop, "aria-labelledby": "transition-modal-title", "aria-describedby": "transition-modal-description" }, { children: _jsx(Fade, __assign({ in: open }, { children: _jsx("div", __assign({ className: classes.wrapper }, { children: _jsx(GqlMediaLibrary, { config: __assign({}, props.config), onChange: handleSelectImage, name: name }, void 0) }), void 0) }), void 0) }), void 0), _jsx(Fade, __assign({ in: showIcon }, { children: _jsx(CameraAltIcon, { className: classes.icon, onClick: handleOpen }, void 0) }), void 0)] }), void 0)] }, void 0));
};
