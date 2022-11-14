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
import { useMbmcBlock1Styles } from "./styles";
import { parseHtml, renderStyle } from "../../../../utilities/renderStyle";
import clx from "classnames";
import { renderCtas, handleElementClick } from "../../utilities";
export var MbmcBlock1 = function (_a) {
    var _b = _a.style, style = _b === void 0 ? "mbmc" : _b, _c = _a.mode, mode = _c === void 0 ? "view" : _c, _d = _a.activeElement, activeElement = _d === void 0 ? "" : _d, handleClick = _a.handleClick, image = _a.image, heading = _a.heading, description = _a.description, ctas = _a.ctas, _e = _a.fullHeight, fullHeight = _e === void 0 ? true : _e;
    var classes = useMbmcBlock1Styles({ fullHeight: fullHeight });
    return (_jsx("div", __assign({ className: renderStyle(style, { mbmc: classes.root }) }, { children: _jsxs("div", __assign({ className: classes.block1Container }, { children: [_jsxs("div", __assign({ className: classes.block1Content }, { children: [_jsx("h1", { className: clx(classes.block1Heading, activeElement === "MbmcBlock1.heading" && classes.block1ActiveElement), dangerouslySetInnerHTML: {
                                __html: typeof window !== "undefined" ? parseHtml(heading) : "",
                            }, onClick: function () { return handleElementClick(mode, "MbmcBlock1.heading", handleClick); } }, void 0), _jsx("p", __assign({ className: clx(classes.block1Description, activeElement === "MbmcBlock1.description" &&
                                classes.block1ActiveElement), onClick: function () { return handleElementClick(mode, "MbmcBlock1.description", handleClick); } }, { children: description }), void 0), _jsx("div", __assign({ className: classes.block1BtnContainer }, { children: renderCtas(ctas !== null && ctas !== void 0 ? ctas : [], mode, "MbmcBlock1", handleClick, activeElement) }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.block1ImgContainerMobile }, { children: [_jsx("img", { src: image, onClick: function () { return handleElementClick(mode, "MbmcBlock1.image", handleClick); }, alt: "food images", className: clx(classes.block1ImageMobile, activeElement === "MbmcBlock1.image" && classes.block1ActiveElement) }, void 0), _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/hero1mobile.svg", alt: "Image Overlay", className: classes.block1MobileOverlay }, void 0)] }), void 0), _jsxs("div", __assign({ className: classes.block1ImgContainer }, { children: [_jsx("img", { src: image, onClick: function () { return handleElementClick(mode, "MbmcBlock1.image", handleClick); }, alt: "food images", className: clx(classes.block1Image, activeElement === "MbmcBlock1.image" && classes.block1ActiveElement) }, void 0), _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/clipped1.svg", alt: "Image Overlay", className: classes.block1Overlay }, void 0)] }), void 0)] }), void 0) }), void 0));
};
