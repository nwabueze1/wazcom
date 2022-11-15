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
import { useMbmcBlock11Styles } from "./styles";
import { renderCtas, handleElementClick } from "../../utilities";
import clx from "classnames";
export var MbmcBlock11 = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, index = _a.index, _c = _a.activeElement, activeElement = _c === void 0 ? "" : _c, handleClick = _a.handleClick, image = _a.image, heading = _a.heading, description = _a.description, ctas = _a.ctas;
    var classes = useMbmcBlock11Styles({ flexDirection: "row-reverse" });
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: classes.block11Container }, { children: [_jsxs("div", __assign({ className: classes.block11Content }, { children: [_jsx("h3", __assign({ className: clx(classes.block11Heading, activeElement === "".concat(String(index), ".heading") &&
                                classes.block11ActiveElement), onClick: function () {
                                return handleElementClick(mode, "".concat(String(index), ".heading"), handleClick);
                            } }, { children: heading }), void 0), _jsx("div", __assign({ className: classes.heroContainerMobile }, { children: _jsx("img", { src: image, alt: "food images", className: clx(classes.heroImageMobile, activeElement === "".concat(String(index), ".image") &&
                                    classes.block11ActiveElement), onClick: function () {
                                    return handleElementClick(mode, "".concat(String(index), ".image"), handleClick);
                                } }, void 0) }), void 0), _jsx("div", __assign({ className: classes.block11Paragraph }, { children: _jsx("p", __assign({ className: clx(classes.block11Description, activeElement === "".concat(String(index), ".description") &&
                                    classes.block11ActiveElement), onClick: function () {
                                    return handleElementClick(mode, "".concat(String(index), ".description"), handleClick);
                                } }, { children: description }), void 0) }), void 0), _jsx("div", __assign({ className: classes.block11BtnContainer }, { children: renderCtas(ctas !== null && ctas !== void 0 ? ctas : [], mode, String(index), handleClick, activeElement) }), void 0)] }), void 0), _jsx("div", __assign({ className: classes.heroContainer }, { children: _jsx("img", { src: image, alt: "food images", className: clx(classes.heroImage, activeElement === "".concat(String(index), ".image") &&
                            classes.block11ActiveElement), onClick: function () {
                            return handleElementClick(mode, "".concat(String(index), ".image"), handleClick);
                        } }, void 0) }), void 0)] }), void 0) }), void 0));
};
