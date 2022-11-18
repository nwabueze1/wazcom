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
import { useMbmcBlock10Styles } from "./styles";
import clx from "classnames";
import { handleElementClick } from "../../utilities";
export var MbmcBlock10 = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, handleClick = _a.handleClick, activeElement = _a.activeElement, index = _a.index, tags = _a.tags;
    var classes = useMbmcBlock10Styles();
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsx("div", __assign({ className: classes.tagsContainer }, { children: tags.map(function (tag, tagIndex) {
                return (_jsxs("div", __assign({ className: clx(classes.tag, tags.length - 1 !== tagIndex && classes.border) }, { children: [_jsx("img", { src: tag.image, alt: tag.text, className: clx(classes.tagImage, activeElement ===
                                "".concat(String(index), ".tags.").concat(String(tagIndex), ".image") &&
                                classes.block10ActiveElement), onClick: function () {
                                return handleElementClick(mode, "".concat(String(index), ".tags.").concat(String(tagIndex), ".image"), handleClick);
                            } }, void 0), " ", _jsx("p", __assign({ className: clx(classes.tagText, activeElement ===
                                "".concat(String(index), ".tags.").concat(String(tagIndex), ".text") &&
                                classes.block10ActiveElement), onClick: function () {
                                return handleElementClick(mode, "".concat(String(index), ".tags.").concat(String(tagIndex), ".text"), handleClick);
                            } }, { children: tag.text }), void 0)] }), tagIndex));
            }) }), void 0) }), void 0));
};
