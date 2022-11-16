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
import { useMbmcBlock1Styles } from "./styles";
import { useEffect, useState } from "react";
import { parseHtml } from "../../../../utilities/renderStyle";
import clx from "classnames";
import { renderCtas, handleElementClick } from "../../utilities";
export var MbmcBlock1 = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, index = _a.index, _c = _a.activeElement, activeElement = _c === void 0 ? "" : _c, handleClick = _a.handleClick, image = _a.image, heading = _a.heading, description = _a.description, ctas = _a.ctas, _d = _a.fullHeight, fullHeight = _d === void 0 ? true : _d;
    var classes = useMbmcBlock1Styles({ fullHeight: fullHeight });
    var _e = __read(useState(false), 2), isClient = _e[0], setIsClient = _e[1];
    useEffect(function () {
        setIsClient(true);
    }, []);
    return (_jsx("div", __assign({ className: clx(classes.root, activeElement === String(index) && classes.block1ActiveElement) }, { children: _jsxs("div", __assign({ className: classes.block1Container }, { children: [_jsxs("div", __assign({ className: classes.block1Content }, { children: [isClient && (_jsx("h1", { className: clx(classes.block1Heading, activeElement === "".concat(String(index), ".heading") &&
                                classes.block1ActiveElement), dangerouslySetInnerHTML: {
                                __html: parseHtml(heading),
                            }, onClick: function () {
                                return handleElementClick(mode, "".concat(String(index), ".heading"), handleClick);
                            } }, void 0)), _jsx("p", __assign({ className: clx(classes.block1Description, activeElement === "".concat(String(index), ".description") &&
                                classes.block1ActiveElement), onClick: function () {
                                return handleElementClick(mode, "".concat(String(index), ".description"), handleClick);
                            } }, { children: description }), void 0), _jsx("div", __assign({ className: classes.block1BtnContainer }, { children: renderCtas(ctas !== null && ctas !== void 0 ? ctas : [], mode, String(index !== null && index !== void 0 ? index : 0), handleClick, activeElement) }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.block1ImgContainerMobile }, { children: [_jsx("img", { src: image, onClick: function () {
                                return handleElementClick(mode, "".concat(String(index), ".image"), handleClick);
                            }, alt: "food images", className: clx(classes.block1ImageMobile, activeElement === "".concat(String(index), ".image") &&
                                classes.block1ActiveElement) }, void 0), _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/hero1mobile.svg", alt: "Image Overlay", className: classes.block1MobileOverlay }, void 0)] }), void 0), _jsxs("div", __assign({ className: classes.block1ImgContainer }, { children: [_jsx("img", { src: image, onClick: function () {
                                return handleElementClick(mode, "".concat(String(index), ".image"), handleClick);
                            }, alt: "food images", className: clx(classes.block1Image, activeElement === "".concat(String(index), ".image") &&
                                classes.block1ActiveElement) }, void 0), _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/clipped1.svg", alt: "Image Overlay", className: classes.block1Overlay }, void 0)] }), void 0)] }), void 0) }), void 0));
};
