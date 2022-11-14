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
import { useMbmcBlock3Styles } from "./styles";
import { renderCtas, handleElementClick } from "../../utilities";
import clx from "classnames";
export var MbmcBlock3 = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, handleClick = _a.handleClick, activeElement = _a.activeElement, heading = _a.heading, description = _a.description, ctas = _a.ctas;
    var classes = useMbmcBlock3Styles();
    return (_jsxs("div", __assign({ className: clx(classes.root, activeElement === "MbmcBlock3" && classes.block3ActiveElement) }, { children: [_jsxs("div", __assign({ className: classes.block3Container }, { children: [_jsx("div", __assign({ className: classes.block3ImageContainer }, { children: _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/heroFoodLabel.png", className: classes.block3Image }, void 0) }), void 0), _jsxs("div", __assign({ className: classes.block3Content }, { children: [_jsx("h3", __assign({ className: clx(classes.block3Heading, activeElement === "MbmcBlock3.heading" && classes.block3ActiveElement), onClick: function () { return handleElementClick(mode, "MbmcBlock3.heading", handleClick); } }, { children: heading }), void 0), _jsxs("div", __assign({ className: classes.block3ContentImageContainer }, { children: [_jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/heroFood.png", alt: "", className: "hero" }, void 0), _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/clippedbackground2.svg", alt: "Overlay", className: "overlay" }, void 0)] }), void 0), _jsx("p", __assign({ className: clx(classes.block3Description, activeElement === "MbmcBlock3.description" &&
                                    classes.block3ActiveElement), onClick: function () {
                                    return handleElementClick(mode, "MbmcBlock3.description", handleClick);
                                } }, { children: description }), void 0), _jsx("div", __assign({ className: classes.block3Ctas }, { children: renderCtas(ctas !== null && ctas !== void 0 ? ctas : [], mode, "MbmcBlock3", handleClick, activeElement) }), void 0)] }), void 0)] }), void 0), _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/clippedbackground2.svg", alt: "Overlay", className: classes.block3ImageOverlay }, void 0)] }), void 0));
};
