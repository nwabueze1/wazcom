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
import { LazyImage } from "../../../../core";
import { useMediaQuery, useTheme } from "@mui/material";
export var MbmcBlock3 = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, index = _a.index, handleClick = _a.handleClick, activeElement = _a.activeElement, heading = _a.heading, description = _a.description, ctas = _a.ctas;
    var theme = useTheme();
    var classes = useMbmcBlock3Styles();
    var isMobile = useMediaQuery(theme.breakpoints.down("lg"));
    var isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
    return (_jsxs("div", __assign({ className: clx(classes.root, activeElement === String(index) && classes.block3ActiveElement) }, { children: [_jsxs("div", __assign({ className: classes.block3Container }, { children: [isDesktop && (_jsx("div", __assign({ className: classes.block3ImageContainer }, { children: _jsx(LazyImage, { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/heroFoodLabel.webp", className: classes.block3Image, mode: mode }) }))), _jsxs("div", __assign({ className: classes.block3Content }, { children: [_jsx("h3", __assign({ className: clx(classes.block3Heading, activeElement === "".concat(String(index), ".heading") &&
                                    classes.block3ActiveElement), onClick: function () {
                                    return handleElementClick(mode, "".concat(String(index), ".heading"), handleClick);
                                } }, { children: heading })), isMobile && (_jsxs("div", __assign({ className: classes.block3ContentImageContainer }, { children: [_jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/hero-food.webp", alt: "", className: "hero" }), _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/clippedbackground2.svg", alt: "Overlay", className: "overlay" })] }))), _jsx("p", { className: clx(classes.block3Description, activeElement === "".concat(String(index), ".description") &&
                                    classes.block3ActiveElement), onClick: function () {
                                    return handleElementClick(mode, "".concat(String(index), ".description"), handleClick);
                                }, dangerouslySetInnerHTML: { __html: description } }), _jsx("div", __assign({ className: classes.block3Ctas }, { children: renderCtas(ctas !== null && ctas !== void 0 ? ctas : [], mode, String(index !== null && index !== void 0 ? index : 0), handleClick, activeElement) }))] }))] })), _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/clippedbackground2.svg", alt: "Overlay", className: classes.block3ImageOverlay })] })));
};
