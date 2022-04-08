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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Modal, Fade, Backdrop, InputLabel } from "@mui/material";
import clx from "classnames";
import { useImageSelectorStyles } from "./styles";
import { GqlMediaLibrary } from "../GqlMediaLibrary";
import { getSizeVariants } from "../../helpers/size";
import { displayFeedback } from "../../helpers/io";
import { Button } from "../../core";
import CameraAlt from "@mui/icons-material/CameraAlt";
export var GqlMediaLibrarySelector = function (_a) {
    var _b;
    var _c = _a.displayLibrary, displayLibrary = _c === void 0 ? false : _c, _d = _a.variant, variant = _d === void 0 ? "square" : _d, _e = _a.size, size = _e === void 0 ? "full" : _e, verbose = _a.verbose, iconType = _a.iconType, width = _a.width, height = _a.height, className = _a.className, classNames = _a.classNames, onChange = _a.onChange, name = _a.name, label = _a.label, value = _a.value, feedback = _a.feedback, error = _a.error, props = __rest(_a, ["displayLibrary", "variant", "size", "verbose", "iconType", "width", "height", "className", "classNames", "onChange", "name", "label", "value", "feedback", "error"]);
    var classes = useImageSelectorStyles();
    var _f = __read(useState(false), 2), setShowIcon = _f[1];
    var _g = __read(useState(value || ""), 2), placeholder = _g[0], setPlaceholder = _g[1];
    var _h = __read(useState(false), 2), open = _h[0], setOpen = _h[1];
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
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name !== null && name !== void 0 ? name : "image", value: verbose ? value : value.url });
    };
    var variants = getSizeVariants(classes, size);
    return (_jsxs("div", __assign({ className: clx(className, classes.root) }, { children: [label && (_jsx(InputLabel, __assign({ className: (_b = classNames === null || classNames === void 0 ? void 0 : classNames.label) !== null && _b !== void 0 ? _b : "", htmlFor: name }, { children: label }), void 0)), _jsxs("div", __assign({ className: clx(classes.container, variant === "circle" && classes.circle, variants[0], error && classes.error), style: { backgroundImage: "url(".concat(placeholder, ")"), width: width, height: height }, onMouseEnter: function () { return setShowIcon(true); }, onMouseLeave: function () { return setShowIcon(false); }, onClick: function () {
                    if (displayLibrary)
                        return;
                    handleOpen();
                } }, { children: [_jsx(Modal, __assign({ open: open, BackdropProps: {
                            timeout: 500,
                        }, closeAfterTransition: true, onClose: handleClose, onBackdropClick: function (e) { return e.stopPropagation(); }, className: classes.modal, BackdropComponent: Backdrop, "aria-labelledby": "transition-modal-title", "aria-describedby": "transition-modal-description" }, { children: _jsx(Fade, __assign({ in: open }, { children: _jsx("div", __assign({ className: classes.wrapper }, { children: _jsx(GqlMediaLibrary, { config: __assign({}, props.config), onChange: handleSelectImage, name: name }, void 0) }), void 0) }), void 0) }), void 0), iconType === "button" ? (_jsx(Button, __assign({ className: clx(classes.icon), variant: "outlined", onClick: handleOpen }, { children: "Upload Image" }), void 0)) : (_jsx(CameraAlt, { className: clx(classes.cameraIcon, variants[1]), onClick: handleOpen }, void 0))] }), void 0), feedback && displayFeedback(feedback)] }), void 0));
};
