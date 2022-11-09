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
import { renderStyle, parseHtml } from "utilities/renderStyle";
export var MbmcBlock1 = function (_a) {
    var _b = _a.style, style = _b === void 0 ? "mbmc" : _b, heading = _a.heading, description = _a.description, ctas = _a.ctas, _c = _a.fullHeight, fullHeight = _c === void 0 ? true : _c;
    var classes = useMbmcBlock1Styles({ fullHeight: fullHeight });
    var displayCtas = function () {
        return (ctas !== null && ctas !== void 0 ? ctas : []).map(function (_a, index) {
            var text = _a.text, rIcon = _a.rIcon, lIcon = _a.lIcon, props = __rest(_a, ["text", "rIcon", "lIcon"]);
            return (_jsxs(MbmcButton, __assign({}, props, { children: [lIcon, " ", text, " ", rIcon] }), index));
        });
    };
    return (_jsx("div", __assign({ className: renderStyle(style, { mbmc: classes.root }) }, { children: _jsxs("div", __assign({ className: classes.block1Container }, { children: [_jsxs("div", __assign({ className: classes.block1Content }, { children: [_jsx("h1", { className: classes.block1Heading, dangerouslySetInnerHTML: { __html: parseHtml(heading) } }, void 0), _jsx("p", __assign({ className: classes.block1Description }, { children: description }), void 0), _jsx("div", __assign({ className: classes.block1BtnContainer }, { children: displayCtas() }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.block1ImgContainerMobile }, { children: [_jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/heroFood.png", alt: "food images", className: classes.block1ImageMobile }, void 0), _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/hero1mobile.svg", alt: "Image Overlay", className: classes.block1MobileOverlay }, void 0)] }), void 0), _jsxs("div", __assign({ className: classes.block1ImgContainer }, { children: [_jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/heroFood.png", alt: "food images", className: classes.block1Image }, void 0), _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/clipped1.svg", alt: "Image Overlay", className: classes.block1Overlay }, void 0)] }), void 0)] }), void 0) }), void 0));
};
