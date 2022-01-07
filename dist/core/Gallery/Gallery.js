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
import { useState } from "react";
import { useGalleryStyles } from "./styles";
import { CheckBoxInput } from "../../io";
export var Gallery = function (_a) {
    var image = _a.image;
    var classes = useGalleryStyles({ image: image });
    var onclick = function () { return setChecked(!checked); };
    var _b = useState(false), checked = _b[0], setChecked = _b[1];
    var handleCheckChange = function (event) {
        setChecked(!event.target.checked);
    };
    return (_jsxs("div", __assign({ onClick: onclick, className: "".concat(classes.galleryBox, " ").concat(checked ? classes.border : null) }, { children: [_jsx("div", { children: checked ? (_jsx("div", __assign({ className: classes.checker }, { children: _jsx(CheckBoxInput, { checked: true, handleCheckChange: handleCheckChange }, void 0) }), void 0)) : null }, void 0), _jsx("div", __assign({ className: classes.galleryHover }, { children: _jsx("p", { children: "Select post" }, void 0) }), void 0)] }), void 0));
};
