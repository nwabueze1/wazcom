import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cx from "classnames";
import { isNumber } from "advanced-cropper";
import { Slider } from "./Slider";
import { useCropImageStyles } from "./styles";
export var Navigator = function (_a) {
    var className = _a.className, onZoom = _a.onZoom, onDragZoom = _a.onDragZoom, zoom = _a.zoom;
    var classes = useCropImageStyles();
    var onZoomIn = function () {
        if (onZoom && isNumber(zoom)) {
            onZoom(Math.min(1, zoom + 0.25), true);
        }
    };
    var onZoomOut = function () {
        if (onZoom && isNumber(zoom)) {
            onZoom(Math.max(0, zoom - 0.25), true);
        }
    };
    return (_jsxs("div", { className: cx(classes.navigation, className), children: [_jsx("button", { className: classes.navigationButton, onClick: onZoomOut, children: _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/minus.svg", alt: "zoom out" }) }), _jsx(Slider, { value: zoom, onChange: onDragZoom }), _jsx("button", { className: classes.navigationButton, onClick: onZoomIn, children: _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/plus.svg", alt: "zoom in" }) })] }));
};
