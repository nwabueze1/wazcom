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
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import clx from "classnames";
import { useImageStyles } from "./styles";
export var LazyImage = function (_a) {
    var _b;
    var _c = _a.mode, mode = _c === void 0 ? "view" : _c, blurDataurl = _a.blurDataurl, _d = _a.placeholder, placeholder = _d === void 0 ? "empty" : _d, src = _a.src, className = _a.className, classNames = _a.classNames, props = __rest(_a, ["mode", "blurDataurl", "placeholder", "src", "className", "classNames"]);
    var imageRef = useRef(null);
    var classes = useImageStyles();
    var _e = __read(useState(false), 2), isVisible = _e[0], setIsVisible = _e[1];
    var _f = __read(useState({
        width: 1,
        height: 1,
    }), 2), imageDimensions = _f[0], setImageDimensions = _f[1];
    var checkImageVisbilitiy = function () {
        if (!imageRef.current)
            return;
        var scrollTop = window.pageYOffset;
        var imageScrollPosition = imageRef.current.getBoundingClientRect().top - 150;
        var pageBottomScrollPosition = window.innerHeight + scrollTop;
        setIsVisible(imageScrollPosition < pageBottomScrollPosition);
    };
    var getImageDimensions = function (src) {
        if (!src)
            return;
        var img = new Image();
        img.addEventListener("load", function () {
            setImageDimensions({
                width: this.width,
                height: this.height,
            });
        });
        img.src = src;
    };
    var generatePlaceholderSrcUrl = function (placeholder, src) {
        var baseImageUrl = "https://img.wazobia.tech/";
        return "".concat(baseImageUrl).concat(placeholder !== null && placeholder !== void 0 ? placeholder : src, "?tr=w-").concat(imageDimensions.width / 2, ",h-").concat(imageDimensions.height / 2);
    };
    useEffect(function () {
        checkImageVisbilitiy();
        getImageDimensions(src);
        window.addEventListener("scroll", checkImageVisbilitiy);
        return function () { return window.removeEventListener("scroll", checkImageVisbilitiy); };
    }, []);
    return placeholder === "blur" ? (_jsx("img", __assign({}, props, { src: isVisible ? src : generatePlaceholderSrcUrl(blurDataurl, src), ref: imageRef, className: clx((_b = {},
            _b[classes.blur] = !isVisible,
            _b), className, !isVisible && (classNames === null || classNames === void 0 ? void 0 : classNames.loadingPlaceholder)) }), void 0)) : (_jsx("img", __assign({}, props, { src: mode === "edit" || isVisible ? src : undefined, ref: imageRef, className: className }), void 0));
};
