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
var getImagesBasedOnScreenSizes2 = function (image, imageCropper) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
    var dolosUrl = "https://img.wazobia.tech";
    var isAmpersand = (_a = image === null || image === void 0 ? void 0 : image.src) === null || _a === void 0 ? void 0 : _a.includes("?");
    var _v = __read([
        calculateNewWidthOfLargeScreens((_c = (_b = imageCropper === null || imageCropper === void 0 ? void 0 : imageCropper.desktop) === null || _b === void 0 ? void 0 : _b.width) !== null && _c !== void 0 ? _c : 1100, 1992),
        calculateNewWidthOfLargeScreens((_e = (_d = imageCropper === null || imageCropper === void 0 ? void 0 : imageCropper.desktop) === null || _d === void 0 ? void 0 : _d.width) !== null && _e !== void 0 ? _e : 1100, 1772),
        calculateNewWidthOfLargeScreens((_g = (_f = imageCropper === null || imageCropper === void 0 ? void 0 : imageCropper.desktop) === null || _f === void 0 ? void 0 : _f.width) !== null && _g !== void 0 ? _g : 1100, 1442),
        (_j = (_h = imageCropper === null || imageCropper === void 0 ? void 0 : imageCropper.desktop) === null || _h === void 0 ? void 0 : _h.width) !== null && _j !== void 0 ? _j : 1100,
        (_l = (_k = imageCropper === null || imageCropper === void 0 ? void 0 : imageCropper.tablet) === null || _k === void 0 ? void 0 : _k.width) !== null && _l !== void 0 ? _l : 750,
        (_o = (_m = imageCropper === null || imageCropper === void 0 ? void 0 : imageCropper.mobile) === null || _m === void 0 ? void 0 : _m.width) !== null && _o !== void 0 ? _o : 450,
    ], 6), desktop1992 = _v[0], desktop1772 = _v[1], desktop1442 = _v[2], desktop1280 = _v[3], tabletWidth = _v[4], mobileWidth = _v[5];
    var desktop1992Image = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-").concat(desktop1992).concat(calculateCropCoordinates(desktop1992, (_p = image === null || image === void 0 ? void 0 : image.coordinates) === null || _p === void 0 ? void 0 : _p.desktop));
    var desktop1772Image = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-").concat(desktop1772).concat(calculateCropCoordinates(desktop1772, (_q = image === null || image === void 0 ? void 0 : image.coordinates) === null || _q === void 0 ? void 0 : _q.desktop));
    var desktop1442Image = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-").concat(desktop1442).concat(calculateCropCoordinates(desktop1442, (_r = image === null || image === void 0 ? void 0 : image.coordinates) === null || _r === void 0 ? void 0 : _r.desktop));
    var desktop1280Image = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-").concat(desktop1280).concat(calculateCropCoordinates(desktop1280, (_s = image === null || image === void 0 ? void 0 : image.coordinates) === null || _s === void 0 ? void 0 : _s.desktop));
    var tabletImage = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-").concat(tabletWidth).concat(calculateCropCoordinates(tabletWidth, (_t = image === null || image === void 0 ? void 0 : image.coordinates) === null || _t === void 0 ? void 0 : _t.tablet));
    var mobileImage = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-").concat(mobileWidth).concat(calculateCropCoordinates(mobileWidth, (_u = image === null || image === void 0 ? void 0 : image.coordinates) === null || _u === void 0 ? void 0 : _u.mobile));
    return {
        mobileImage: mobileImage,
        tabletImage: tabletImage,
        desktop1280Image: desktop1280Image,
        desktop1442Image: desktop1442Image,
        desktop1772Image: desktop1772Image,
        desktop1992Image: desktop1992Image,
    };
};
// const getImagesBasedOnScreenSizes = (image: MediaValue, imageCropper?: TImageCropper) => {
//   const dolosUrl = "https://img.wazobia.tech";
//   const isAmpersand = image?.src?.includes("?");
//   const [xtraLargeScreen, desktopWidth, tabletWidth, mobileWidth] = [
//     imageCropper?.extraLargeScreens?.width ?? 1200,
//     imageCropper?.desktop?.width ?? 1100,
//     imageCropper?.tablet?.width ?? 750,
//     imageCropper?.mobile?.width ?? 450,
//   ];
//   const x1DesktopScreens = calculateNewWidthOfLargeScreens(xtraLargeScreen, 1770);
//   const x2DesktopScreens = calculateNewWidthOfLargeScreens(desktopWidth, 1990);
//   const desktop2xImage = `${dolosUrl}/${image?.src}${
//     isAmpersand ? "&tr" : "?tr"
//   }=w-${x2DesktopScreens}${calculateCropCoordinates(
//     x2DesktopScreens,
//     image?.coordinates?.desktop,
//   )}`;
//   const desktop1xImage = `${dolosUrl}/${image?.src}${
//     isAmpersand ? "&tr" : "?tr"
//   }=w-${x1DesktopScreens}${calculateCropCoordinates(
//     x1DesktopScreens,
//     image?.coordinates?.desktop,
//   )}`;
//   const desktopImage = `${dolosUrl}/${image?.src}${
//     isAmpersand ? "&tr" : "?tr"
//   }=w-${desktopWidth}${calculateCropCoordinates(desktopWidth, image?.coordinates?.desktop)}`;
//   const smallLaptop = `${dolosUrl}/${image?.src}${
//     isAmpersand ? "&tr" : "?tr"
//   }=w-${desktopWidth}${calculateCropCoordinates(desktopWidth, image?.coordinates?.desktop)}`;
//   const tabletImage = `${dolosUrl}/${image?.src}${
//     isAmpersand ? "&tr" : "?tr"
//   }=w-${tabletWidth}${calculateCropCoordinates(tabletWidth, image?.coordinates?.tablet)}`;
//   const mobileImage = `${dolosUrl}/${image?.src}${
//     isAmpersand ? "&tr" : "?tr"
//   }=w-${mobileWidth}${calculateCropCoordinates(mobileWidth, image?.coordinates?.mobile)}`;
//   return {
//     desktop2x: desktop2xImage,
//     desktop1x: desktop1xImage,
//     desktop: 0,
//     tablet: 0,
//     mobile: 0,
//   };
// };
export var createResponsiveImage = function (image, options) {
    if (!image || !(image === null || image === void 0 ? void 0 : image.src))
        return (_jsx("img", __assign({ src: "", alt: "empty image", className: options === null || options === void 0 ? void 0 : options.className }, options === null || options === void 0 ? void 0 : options.imageProps)));
    var _a = getImagesBasedOnScreenSizes2(image, options === null || options === void 0 ? void 0 : options.imageCropper), desktop1772Image = _a.desktop1772Image, desktop1442Image = _a.desktop1442Image, desktop1280Image = _a.desktop1280Image, tabletImage = _a.tabletImage, mobileImage = _a.mobileImage;
    return (_jsxs("picture", __assign({ className: options === null || options === void 0 ? void 0 : options.className }, options === null || options === void 0 ? void 0 : options.imageProps, { children: [_jsx("source", { srcSet: mobileImage, media: "(max-width:769px)" }), _jsx("source", { srcSet: tabletImage, media: "(max-width: 1025px)" }), _jsx("source", { srcSet: desktop1280Image, media: "(max-width: 1440px)" }), _jsx("source", { srcSet: desktop1442Image, media: "(max-width: 1772px)" }), _jsx("source", { srcSet: desktop1772Image, media: "(max-width: 19920px)" }), _jsx("img", __assign({ src: image === null || image === void 0 ? void 0 : image.src, className: options === null || options === void 0 ? void 0 : options.className, alt: image.alternative_text }, options === null || options === void 0 ? void 0 : options.imageProps))] })));
};
var calculateNewWidthOfLargeScreens = function (originalWidth, screenSize) {
    return Math.floor((screenSize / 1280) * originalWidth);
};
