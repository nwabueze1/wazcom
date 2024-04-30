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
import cx from "classnames";
import { CropperFade } from "react-advanced-cropper";
import { getAbsoluteZoom, getZoomFactor } from "advanced-cropper/extensions/absolute-zoom";
import { useCropImageStyles } from "./styles";
import { Navigator } from "./Navigator";
export var CropImageWrapper = function (_a) {
    var cropper = _a.cropper, children = _a.children, className = _a.className;
    var classes = useCropImageStyles();
    var state = cropper.getState();
    var settings = cropper.getSettings();
    var absoluteZoom = getAbsoluteZoom(state, settings);
    var onZoom = function (value, transitions) {
        cropper.zoomImage(getZoomFactor(state, settings, value), {
            transitions: !!transitions,
        });
    };
    var onDragZoom = function (value, transitions) {
        onZoom(1 - value, transitions);
    };
    return (_jsxs(CropperFade, __assign({ className: cx(classes.wrapper, className), visible: state }, { children: [children, _jsx(Navigator, { className: classes.wrapperNavigation, zoom: absoluteZoom, onZoom: onZoom, onDragZoom: onDragZoom })] })));
};
