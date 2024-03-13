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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var dolosUrl = "https://img.wazobia.tech";
    var isAmpersand = (_a = image === null || image === void 0 ? void 0 : image.src) === null || _a === void 0 ? void 0 : _a.includes("?");
    var _q = __read([
        (_c = (_b = imageCropper === null || imageCropper === void 0 ? void 0 : imageCropper.extraLargeScreens) === null || _b === void 0 ? void 0 : _b.width) !== null && _c !== void 0 ? _c : 1200,
        (_e = (_d = imageCropper === null || imageCropper === void 0 ? void 0 : imageCropper.desktop) === null || _d === void 0 ? void 0 : _d.width) !== null && _e !== void 0 ? _e : 1100,
        (_g = (_f = imageCropper === null || imageCropper === void 0 ? void 0 : imageCropper.tablet) === null || _f === void 0 ? void 0 : _f.width) !== null && _g !== void 0 ? _g : 750,
        (_j = (_h = imageCropper === null || imageCropper === void 0 ? void 0 : imageCropper.mobile) === null || _h === void 0 ? void 0 : _h.width) !== null && _j !== void 0 ? _j : 450,
    ], 4), xtraLargeScreen = _q[0], desktopWidth = _q[1], tabletWidth = _q[2], mobileWidth = _q[3];
    var x1DesktopScreens = calculateNewWidthOfLargeScreens(xtraLargeScreen, 1770);
    var x2DesktopScreens = calculateNewWidthOfLargeScreens(desktopWidth, 1990);
    var desktop2xImage = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-").concat(x2DesktopScreens).concat(calculateCropCoordinates(x2DesktopScreens, (_k = image === null || image === void 0 ? void 0 : image.coordinates) === null || _k === void 0 ? void 0 : _k.desktop));
    var desktop1xImage = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-").concat(x1DesktopScreens).concat(calculateCropCoordinates(x1DesktopScreens, (_l = image === null || image === void 0 ? void 0 : image.coordinates) === null || _l === void 0 ? void 0 : _l.desktop));
    var desktopImage = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-").concat(desktopWidth).concat(calculateCropCoordinates(desktopWidth, (_m = image === null || image === void 0 ? void 0 : image.coordinates) === null || _m === void 0 ? void 0 : _m.desktop));
    var tabletImage = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-").concat(tabletWidth).concat(calculateCropCoordinates(tabletWidth, (_o = image === null || image === void 0 ? void 0 : image.coordinates) === null || _o === void 0 ? void 0 : _o.tablet));
    var mobileImage = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-").concat(mobileWidth).concat(calculateCropCoordinates(mobileWidth, (_p = image === null || image === void 0 ? void 0 : image.coordinates) === null || _p === void 0 ? void 0 : _p.mobile));
    return {
        desktop2x: desktop2xImage,
        desktop1x: desktop1xImage,
        desktop: desktopImage,
        tablet: tabletImage,
        mobile: mobileImage,
    };
};
export var createResponsiveImage = function (image, options) {
    if (!image || !(image === null || image === void 0 ? void 0 : image.src))
        return (_jsx("img", __assign({ src: "", alt: "empty image", className: options === null || options === void 0 ? void 0 : options.className }, options === null || options === void 0 ? void 0 : options.imageProps)));
    var _a = getImagesBasedOnScreenSizes(image, options === null || options === void 0 ? void 0 : options.imageCropper), desktop = _a.desktop, tablet = _a.tablet, mobile = _a.mobile;
    return (_jsxs("picture", __assign({ className: options === null || options === void 0 ? void 0 : options.className }, options === null || options === void 0 ? void 0 : options.imageProps, { children: [_jsx("source", { srcSet: mobile, className: options === null || options === void 0 ? void 0 : options.className, media: "(max-width:769px)" }), _jsx("source", { srcSet: tablet, media: "(max-width: 1025px)", className: options === null || options === void 0 ? void 0 : options.className }), _jsx("source", { srcSet: desktop, media: "(min-width: 1025px)", className: options === null || options === void 0 ? void 0 : options.className }), _jsx("img", __assign({ src: image === null || image === void 0 ? void 0 : image.src, className: options === null || options === void 0 ? void 0 : options.className, alt: image.alternative_text }, options === null || options === void 0 ? void 0 : options.imageProps))] })));
};
var calculateNewWidthOfLargeScreens = function (originalWidth, screenSize) {
    return Math.floor((screenSize / 1440) * originalWidth);
};
