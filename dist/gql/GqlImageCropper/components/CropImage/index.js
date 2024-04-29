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
import Box from "@mui/material/Box";
import { Cropper, ImageRestriction, FixedCropper, } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import "react-advanced-cropper/dist/themes/corners.css";
import { useRef, forwardRef, useEffect } from "react";
import { useCropImageStyles } from "./styles";
import cx from "classnames";
export var CropImage = forwardRef(function (_a, ref) {
    var coordinates = _a.coordinates, setCoordinates = _a.setCoordinates, src = _a.src, _b = _a.isEdit, isEdit = _b === void 0 ? false : _b, screenType = _a.screenType, setDimensions = _a.setDimensions, activeScreenConfig = _a.activeScreenConfig;
    var classes = useCropImageStyles();
    var cropperRef = useRef(null);
    useEffect(function () {
        var _a, _b, _c, _d;
        var defaultCoordinates = (isEdit
            ? (_a = cropperRef.current) === null || _a === void 0 ? void 0 : _a.getVisibleArea()
            : (_c = (_b = cropperRef.current) === null || _b === void 0 ? void 0 : _b.getDefaultState()) === null || _c === void 0 ? void 0 : _c.coordinates);
        (_d = cropperRef.current) === null || _d === void 0 ? void 0 : _d.setCoordinates(Object.keys(coordinates).length > 0 ? coordinates : defaultCoordinates);
    }, [screenType]);
    var onChange = function (cropper) {
        var coordinates = cropper.getCoordinates();
        if (coordinates)
            setCoordinates(coordinates);
    };
    var defaultSize = function (_a) {
        var imageSize = _a.imageSize, visibleArea = _a.visibleArea;
        if (isEdit && coordinates["width"] && coordinates["height"])
            return { width: coordinates["width"], height: coordinates["height"] };
        var width = (visibleArea || imageSize).width;
        var height = (visibleArea || imageSize).height;
        setDimensions({ width: width, height: height });
        return {
            width: width,
            height: height,
        };
    };
    var isFixedCropper = typeof (activeScreenConfig === null || activeScreenConfig === void 0 ? void 0 : activeScreenConfig.height) === "number" &&
        typeof (activeScreenConfig === null || activeScreenConfig === void 0 ? void 0 : activeScreenConfig.width) === "number";
    var commonCropperProps = {
        ref: ref || cropperRef,
        src: src,
        onChange: onChange,
        defaultSize: defaultSize,
        defaultPosition: isEdit ? { left: coordinates["left"], top: coordinates["top"] } : undefined,
        imageRestriction: ImageRestriction.stencil,
        crossOrigin: false,
        className: cx("cropper", classes.cropper),
    };
    var renderFixedCropper = function () {
        var _a, _b;
        return (_jsx(FixedCropper, __assign({}, commonCropperProps, { ref: (ref || cropperRef), stencilSize: {
                height: (_a = activeScreenConfig === null || activeScreenConfig === void 0 ? void 0 : activeScreenConfig.height) !== null && _a !== void 0 ? _a : 0,
                width: (_b = activeScreenConfig === null || activeScreenConfig === void 0 ? void 0 : activeScreenConfig.width) !== null && _b !== void 0 ? _b : 0,
            }, stencilProps: {
                handlerClassNames: {
                    default: classes.handler,
                },
                movable: true,
                resizable: false,
                handlers: false,
            } })));
    };
    var renderCropper = function () { return (_jsx(Cropper, __assign({}, commonCropperProps, { stencilProps: {
            handlerClassNames: {
                default: classes.handler,
            },
            movable: true,
            resizable: true,
        } }))); };
    return (_jsx(Box, __assign({ className: classes.root }, { children: isFixedCropper ? renderFixedCropper() : renderCropper() })));
});
CropImage.displayName = "CropImage";
