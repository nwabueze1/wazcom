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
export var ImageComponent = function (_a) {
    var _b;
    var loadingPlaceholder = _a.loadingPlaceholder, loadingPlaceholderClassName = _a.loadingPlaceholderClassName, src = _a.src, className = _a.className, props = __rest(_a, ["loadingPlaceholder", "loadingPlaceholderClassName", "src", "className"]);
    var imageRef = useRef(null);
    var classes = useImageStyles();
    var _c = __read(useState(false), 2), isVisible = _c[0], setIsVisible = _c[1];
    var _d = __read(useState({
        width: 1,
        height: 1,
    }), 2), imageDimensions = _d[0], setImageDimensions = _d[1];
    var checkImageVisbilitiy = function () {
        if (!imageRef.current)
            return;
        var scrollTop = window.pageYOffset;
        var imageScrollPosition = imageRef.current.offsetTop;
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
    var generatePlaceholderSrcUrl = function (placeholder) {
        var baseImageUrl = "https://img.wazobia.tech/";
        var defaultPlaceholderUrl = "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/placeholder-light-gray.webp";
        return "".concat(baseImageUrl).concat(placeholder !== null && placeholder !== void 0 ? placeholder : defaultPlaceholderUrl, "?tr=w-").concat(imageDimensions.width / 2, ",h-").concat(imageDimensions.height / 2);
    };
    useEffect(function () {
        checkImageVisbilitiy();
        getImageDimensions(src);
        window.addEventListener("scroll", checkImageVisbilitiy);
        return function () { return window.removeEventListener("scroll", checkImageVisbilitiy); };
    }, []);
    return (_jsx("img", __assign({}, props, { src: isVisible ? src : generatePlaceholderSrcUrl(loadingPlaceholder), ref: imageRef, className: clx((_b = {},
            _b[classes.blur] = !isVisible,
            _b), className, !isVisible && loadingPlaceholderClassName) }), void 0));
};
