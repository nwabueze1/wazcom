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
import { useRef, useState } from "react";
import { useImageSelectorStyles } from "./styles";
import clx from "classnames";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { getSizeVariants } from "../../helpers/size";
export var ImageSelector = function (_a) {
    var variant = _a.variant, src = _a.src, className = _a.className, _b = _a.size, size = _b === void 0 ? "md" : _b, _c = _a.maxImageSize, maxImageSize = _c === void 0 ? 2000000 : _c, _d = _a.formats, formats = _d === void 0 ? ["jpg", "jpeg", "png"] : _d, onSelect = _a.onSelect;
    var classes = useImageSelectorStyles();
    var _e = __read(useState(false), 2), selected = _e[0], setSelected = _e[1];
    var inputRef = useRef();
    var imgRef = useRef();
    var fileInputClick = function () {
        inputRef === null || inputRef === void 0 ? void 0 : inputRef.current.click();
    };
    var validate = function (file) {
        var type = file.type.toLowerCase().split("/")[1];
        if (!formats.includes(type))
            return false;
        if (file.size > maxImageSize)
            return false;
        return true;
    };
    var handleSelect = function (e) {
        if (!e.target.files)
            return;
        var file = e.target.files[0];
        if (validate(file)) {
            var reader = new FileReader();
            reader.onload = function (e) {
                setSelected(true);
                imgRef.current.setAttribute("src", e.target.result);
            };
            reader.readAsDataURL(file);
            onSelect === null || onSelect === void 0 ? void 0 : onSelect(file);
        }
    };
    var variants = getSizeVariants(classes, size);
    return (_jsxs("div", __assign({ className: clx(classes.root, className, variant === "circle" && classes.circle, variants[0]), onClick: fileInputClick }, { children: [_jsx(CameraAltIcon, { className: clx(classes.cameraIcon, variants[1]) }), _jsx("input", { type: "file", ref: inputRef, onChange: handleSelect, hidden: true }), selected ||
                (src && (_jsx("img", { ref: imgRef, src: src, className: clx(classes.image, variant === "circle" && classes.circle) })))] })));
};
