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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useMbmcBlock1Styles } from "./styles";
import { MbmcButton } from "../../components/MbmcButton/MbmcButton";
import { parseHtml, renderStyle } from "../../../../utilities/renderStyle";
import clx from "classnames";
export var MbmcBlock1 = function (_a) {
    var _b = _a.style, style = _b === void 0 ? "mbmc" : _b, _c = _a.mode, mode = _c === void 0 ? "view" : _c, _d = _a.activeElement, activeElement = _d === void 0 ? "" : _d, handleClick = _a.handleClick, image = _a.image, heading = _a.heading, description = _a.description, ctas = _a.ctas, _e = _a.fullHeight, fullHeight = _e === void 0 ? true : _e;
    var classes = useMbmcBlock1Styles({ fullHeight: fullHeight });
    var displayCtas = function () {
        return (ctas !== null && ctas !== void 0 ? ctas : []).map(function (_a, index) {
            var text = _a.text, rIcon = _a.rIcon, url = _a.url, lIcon = _a.lIcon, props = __rest(_a, ["text", "rIcon", "url", "lIcon"]);
            var name = "MbmcBlock1." + "ctas." + String(index);
            return (_jsxs(MbmcButton, __assign({ name: name }, props, { handleClick: function () {
                    mode === "view"
                        ? handleClick === null || handleClick === void 0 ? void 0 : handleClick(url !== null && url !== void 0 ? url : "")
                        : handleElementClick("ctas." + String(index));
                }, activeElement: activeElement }, { children: [lIcon, " ", text, " ", rIcon] }), index));
        });
    };
    var handleElementClick = function (element) {
        if (mode === "view")
            return;
        var updatedElement = "MbmcBlock1." + element;
        handleClick === null || handleClick === void 0 ? void 0 : handleClick(updatedElement);
    };
    return (_jsx("div", __assign({ className: renderStyle(style, { mbmc: classes.root }) }, { children: _jsxs("div", __assign({ className: classes.block1Container }, { children: [_jsxs("div", __assign({ className: classes.block1Content }, { children: [_jsx("h1", { className: clx(classes.block1Heading, activeElement === "MbmcBlock1.heading" && classes.block1ActiveElement), dangerouslySetInnerHTML: {
                                __html: typeof window !== "undefined" ? parseHtml(heading) : "",
                            }, onClick: function () { return handleElementClick("heading"); } }, void 0), _jsx("p", __assign({ className: clx(classes.block1Description, activeElement === "MbmcBlock1.description" && classes.block1ActiveElement), onClick: function () { return handleElementClick("description"); } }, { children: description }), void 0), _jsx("div", __assign({ className: classes.block1BtnContainer }, { children: displayCtas() }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.block1ImgContainerMobile }, { children: [_jsx("img", { src: image, onClick: function () { return handleElementClick("image"); }, alt: "food images", className: clx(classes.block1ImageMobile, activeElement === "MbmcBlock1.image" && classes.block1ActiveElement) }, void 0), _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/hero1mobile.svg", alt: "Image Overlay", className: classes.block1MobileOverlay }, void 0)] }), void 0), _jsxs("div", __assign({ className: classes.block1ImgContainer }, { children: [_jsx("img", { src: image, onClick: function () { return handleElementClick("image"); }, alt: "food images", className: clx(classes.block1Image, activeElement === "MbmcBlock1.image" && classes.block1ActiveElement) }, void 0), _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/clipped1.svg", alt: "Image Overlay", className: classes.block1Overlay }, void 0)] }), void 0)] }), void 0) }), void 0));
};
