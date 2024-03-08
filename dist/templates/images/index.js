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
var calculateCropCoordinates = function (imageWidth, coordinates) {
    if (!coordinates)
        return "";
    var left = Math.round(imageWidth * coordinates["left"]);
    var top = Math.round(imageWidth * coordinates["top"]);
    var right = Math.round(imageWidth * coordinates["right"]);
    var bottom = Math.round(imageWidth * coordinates["bottom"]);
    return ",cr-".concat(left, ".").concat(top, ".").concat(right, ".").concat(bottom);
};
var getImagesBasedOnScreenSizes = function (image, imageCropper) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var dolosUrl = "https://img.wazobia.tech";
    var isAmpersand = (_a = image === null || image === void 0 ? void 0 : image.src) === null || _a === void 0 ? void 0 : _a.includes("?");
    var _l = __read([
        (_c = (_b = imageCropper === null || imageCropper === void 0 ? void 0 : imageCropper.desktop) === null || _b === void 0 ? void 0 : _b.width) !== null && _c !== void 0 ? _c : 1100,
        (_e = (_d = imageCropper === null || imageCropper === void 0 ? void 0 : imageCropper.tablet) === null || _d === void 0 ? void 0 : _d.width) !== null && _e !== void 0 ? _e : 750,
        (_g = (_f = imageCropper === null || imageCropper === void 0 ? void 0 : imageCropper.mobile) === null || _f === void 0 ? void 0 : _f.width) !== null && _g !== void 0 ? _g : 450,
    ], 3), desktopWidth = _l[0], tabletWidth = _l[1], mobileWidth = _l[2];
    var desktopImage = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-").concat(desktopWidth).concat(calculateCropCoordinates(desktopWidth, (_h = image === null || image === void 0 ? void 0 : image.coordinates) === null || _h === void 0 ? void 0 : _h.desktop));
    var tabletImage = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-").concat(tabletWidth).concat(calculateCropCoordinates(tabletWidth, (_j = image === null || image === void 0 ? void 0 : image.coordinates) === null || _j === void 0 ? void 0 : _j.tablet));
    var mobileImage = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-").concat(mobileWidth).concat(calculateCropCoordinates(mobileWidth, (_k = image === null || image === void 0 ? void 0 : image.coordinates) === null || _k === void 0 ? void 0 : _k.mobile));
    return {
        desktop: desktopImage,
        tablet: tabletImage,
        mobile: mobileImage,
    };
};
export var createResponsiveImage = function (image, options) {
    if (!image || !(image === null || image === void 0 ? void 0 : image.src))
        return _jsx("img", { src: "", alt: "empty image", className: options === null || options === void 0 ? void 0 : options.className });
    var _a = getImagesBasedOnScreenSizes(image, options === null || options === void 0 ? void 0 : options.imageCropper), desktop = _a.desktop, tablet = _a.tablet, mobile = _a.mobile;
    return (_jsxs("picture", __assign({ className: options === null || options === void 0 ? void 0 : options.className }, { children: [_jsx("source", { srcSet: mobile, className: options === null || options === void 0 ? void 0 : options.className, media: "(max-width:769px)" }), _jsx("source", { srcSet: tablet, media: "(max-width: 1025px)", className: options === null || options === void 0 ? void 0 : options.className }), _jsx("source", { srcSet: desktop, media: "(min-width: 1025px)", className: options === null || options === void 0 ? void 0 : options.className }), _jsx("img", __assign({ src: image === null || image === void 0 ? void 0 : image.src, className: options === null || options === void 0 ? void 0 : options.className, alt: image.alternative_text }, options === null || options === void 0 ? void 0 : options.imageProps))] })));
};
