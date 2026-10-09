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
    return (_jsxs(CropperFade, { className: cx(classes.wrapper, className), visible: state, children: [children, _jsx(Navigator, { className: classes.wrapperNavigation, zoom: absoluteZoom, onZoom: onZoom, onDragZoom: onDragZoom })] }));
};
