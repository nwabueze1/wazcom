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
import { Backdrop, Fade, IconButton, InputLabel, Modal } from "@mui/material";
import { Button } from "../../core";
import clx from "classnames";
import { useState } from "react";
import { GqlMediaLibrary } from "../GqlMediaLibrary/GqlMediaLibrary";
import { getSizeVariants } from "../../helpers/size";
import { useImageSelectorStyles } from "./styles";
import { GqlImageCropper } from "../GqlImageCropper";
import { FaPlus } from "react-icons/fa";
import { createImageSrcset, imageSizes } from "../../io/WysiwygInput/Editor/helpers";
import { useDownloadImage } from "./hooks/download";
export var GqlMediaLibrarySelector = function (_a) {
    var _b, _c, _d, _e;
    var _f = _a.variant, variant = _f === void 0 ? "square" : _f, _g = _a.size, size = _g === void 0 ? "full" : _g, iconType = _a.iconType, width = _a.width, height = _a.height, className = _a.className, classNames = _a.classNames, onChange = _a.onChange, name = _a.name, label = _a.label, _h = _a.showIcons, showIcons = _h === void 0 ? true : _h, _j = _a.showActionsButton, showActionsButton = _j === void 0 ? false : _j, value = _a.value, helperText = _a.helperText, isError = _a.isError, props = __rest(_a, ["variant", "size", "iconType", "width", "height", "className", "classNames", "onChange", "name", "label", "showIcons", "showActionsButton", "value", "helperText", "isError"]);
    var classes = useImageSelectorStyles();
    var _k = __read(useState(false), 2), setShowIcon = _k[1];
    var _l = __read(useState(), 2), cropImage = _l[0], setCropImage = _l[1];
    var _m = __read(useState({ library: false, cropper: false }), 2), tabs = _m[0], setTabs = _m[1];
    var isOpen = Object.values(tabs).includes(true);
    var downloadImage = useDownloadImage();
    var handleOpen = function (tab) {
        var _a;
        setTabs((_a = { library: false, cropper: false }, _a[tab] = true, _a));
    };
    var handleClose = function (tab) {
        var tabs = tab === "all" || tab === "library"
            ? { library: false, cropper: false }
            : { library: true, cropper: false };
        setTabs(__assign({}, tabs));
    };
    var handleSelectImage = function (_a) {
        var value = _a.value;
        setCropImage(value);
        handleOpen("cropper");
    };
    var handleGenerateImage = function (_a) {
        var _b;
        var value = _a.value;
        if ((_b = value === null || value === void 0 ? void 0 : value.src) === null || _b === void 0 ? void 0 : _b.includes("unsplash"))
            downloadImage(props.config.client, props.config.download.name, "unsplash", value === null || value === void 0 ? void 0 : value.download_url);
        value === null || value === void 0 ? true : delete value.download_url;
        setCropImage(undefined);
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name !== null && name !== void 0 ? name : "image", value: value });
        handleClose("all");
    };
    var handleEditImage = function () {
        setCropImage(undefined);
        handleOpen("cropper");
    };
    var handleRemoveImage = function () {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name !== null && name !== void 0 ? name : "image", value: null });
    };
    var variants = getSizeVariants(classes, size);
    return (_jsxs("div", __assign({ className: clx(className, classes.root) }, { children: [label && (_jsxs(InputLabel, __assign({ className: clx(classes.label, classNames === null || classNames === void 0 ? void 0 : classNames.label), htmlFor: name }, { children: [label, " ", (props === null || props === void 0 ? void 0 : props.required) && _jsx("span", __assign({ className: classes.requiredStar }, { children: "*" }))] }))), _jsxs("div", __assign({ className: clx(showActionsButton && classes.container) }, { children: [_jsxs("div", __assign({ className: clx(classes.imgUploadContainer, classNames === null || classNames === void 0 ? void 0 : classNames.mediaLibrary, classNames === null || classNames === void 0 ? void 0 : classNames.flexDirection, variants[0]) }, { children: [_jsxs("div", __assign({ className: clx(((_c = String((_b = value === null || value === void 0 ? void 0 : value.src) !== null && _b !== void 0 ? _b : "")) === null || _c === void 0 ? void 0 : _c.trim()) === ""
                                    ? classes.emptyContainer
                                    : classes.imageContainer, variant === "circle" && classes.circle, variants[0], classNames === null || classNames === void 0 ? void 0 : classNames.mediaLibrary, isError && classes.imgUploadContainerError), style: {
                                    width: width,
                                    height: height,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }, onMouseEnter: function () { return setShowIcon(true); }, onMouseLeave: function () { return setShowIcon(false); } }, { children: [(value === null || value === void 0 ? void 0 : value.src) && (_jsx("img", { className: "selector__".concat(variant), src: value === null || value === void 0 ? void 0 : value.src, srcSet: createImageSrcset(value), sizes: imageSizes, width: "100%" })), iconType === "button" && !(value === null || value === void 0 ? void 0 : value.src) ? (_jsx(Button, __assign({ className: clx(classes.icon, isError && classes.imgUploadContainerError), variant: "outlined", onClick: function () {
                                            handleOpen("library");
                                        } }, { children: "Select Image" }))) : (showIcons && (_jsxs("div", __assign({ className: classes.tools }, { children: [_jsx("div", __assign({ className: classes.optionIconContainer }, { children: _jsx(IconButton, __assign({ onClick: function () {
                                                        handleOpen("library");
                                                    } }, { children: _jsx(FaPlus, { className: classes.plusIcon }) })) })), (value === null || value === void 0 ? void 0 : value.src) && (_jsx("div", __assign({ className: classes.optionIconContainer }, { children: _jsx(IconButton, __assign({ onClick: handleEditImage }, { children: _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/edit-2.svg" }) })) }))), _jsx("div", __assign({ className: classes.optionIconContainer }, { children: _jsx(IconButton, __assign({ onClick: handleRemoveImage }, { children: _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/trash.svg" }) })) }))] }))))] })), helperText && _jsx("p", __assign({ className: classes.helperText }, { children: helperText }))] })), showActionsButton && (_jsxs("div", __assign({ className: classes.actionsButton }, { children: [_jsx(Button, __assign({ className: classes.changeBtn, onClick: handleOpen }, { children: value && ((_d = value.src) === null || _d === void 0 ? void 0 : _d.length) > 0 ? "Change" : "Upload" })), value && ((_e = value.src) === null || _e === void 0 ? void 0 : _e.length) > 0 && (_jsx(Button, __assign({ onClick: handleRemoveImage, className: classes.actionRemoveBtn }, { children: "Remove" })))] })))] })), _jsx(Modal, __assign({ open: isOpen, BackdropProps: {
                    timeout: 500,
                }, closeAfterTransition: true, onClose: function () {
                    handleClose("all");
                }, onBackdropClick: function (e) { return e.stopPropagation(); }, className: classes.modal, BackdropComponent: Backdrop, "aria-labelledby": "transition-modal-title", "aria-describedby": "transition-modal-description" }, { children: _jsx(Fade, __assign({ in: isOpen }, { children: _jsxs("div", __assign({ className: classes.wrapper }, { children: [_jsx(GqlMediaLibrary, { config: __assign({}, props.config), onChange: handleSelectImage, name: name, handleClose: function () {
                                    handleClose("all");
                                }, isSelector: true, library_uuid: props.library_uuid }), tabs.cropper && (_jsx(GqlImageCropper, { open: true, handleClose: function () {
                                    handleClose("cropper");
                                }, value: __assign(__assign({}, (cropImage !== null && cropImage !== void 0 ? cropImage : value)), { src: cropImage ? cropImage === null || cropImage === void 0 ? void 0 : cropImage.url : value === null || value === void 0 ? void 0 : value.src }), onChange: handleGenerateImage }))] })) })) }))] })));
};
