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
import { calculateCropCoordinates } from "../../io/WysiwygInput/Editor/helpers";
export var parseImageCropperValue = function (value) {
    var _a, _b, _c, _d, _e, _f;
    if (Object.keys(value).length === 1)
        return __assign(__assign({}, value), { name: "", description: "", alternative_text: "", caption: "", coordinates: {
                desktop: {},
                tablet: {},
                mobile: {},
            }, screenType: "desktop" });
    return __assign(__assign({}, value), { coordinates: {
            desktop: ((_a = value["coordinates"]) === null || _a === void 0 ? void 0 : _a.desktop)
                ? parseStoredCoordinates((_b = value["coordinates"]) === null || _b === void 0 ? void 0 : _b.desktop, value["width"])
                : {},
            tablet: ((_c = value["coordinates"]) === null || _c === void 0 ? void 0 : _c.tablet)
                ? parseStoredCoordinates((_d = value["coordinates"]) === null || _d === void 0 ? void 0 : _d.tablet, value["width"])
                : {},
            mobile: ((_e = value["coordinates"]) === null || _e === void 0 ? void 0 : _e.mobile)
                ? parseStoredCoordinates((_f = value["coordinates"]) === null || _f === void 0 ? void 0 : _f.mobile, value["width"])
                : {},
        }, screenType: "desktop" });
};
var parseStoredCoordinates = function (coordinates, imageWidth) {
    var left = Number((coordinates["left"] * imageWidth).toFixed(2));
    var top = Number((coordinates["top"] * imageWidth).toFixed(2));
    return {
        left: left,
        top: top,
        width: Number((coordinates["right"] * imageWidth).toFixed(2)) - left,
        height: Number((coordinates["bottom"] * imageWidth).toFixed(2)) - top,
    };
};
export var tabs = ["Image Properties", "Crop & Resize"];
export var hasImageServiceUrl = function (src) {
    if (src === void 0) { src = ''; }
    var domains = [
        'img.wazobia.tech',
        'images.twistedfood.co.uk',
        'images.vt.co',
        'dolos.hivedeck.com',
        'images.fournine.net',
        'images.craftfactory.com'
    ];
    return domains.some(function (domain) { return src.includes(domain); });
};
export var generateModifiedSrc = function (src, width, coordinates, imageServiceDomain) {
    var imageUrl = src;
    if (src && src.includes('unsplash')) {
        var indexOfQuestionMark = src.indexOf('?');
        if (indexOfQuestionMark !== -1) {
            imageUrl = src.substring(0, indexOfQuestionMark);
        }
    }
    var dolosUrl = hasImageServiceUrl(imageUrl) || (src && src.includes('unsplash'))
        ? ''
        : "https://".concat(imageServiceDomain, "/");
    var validWidth = width === 0 ? 1024 : width;
    var queryParams = "tr=w-".concat(Math.min(validWidth, 1024)).concat(calculateCropCoordinates(Math.min(validWidth, 1024), coordinates.desktop));
    var finalUrl = "".concat(dolosUrl).concat(imageUrl);
    if (!imageUrl.includes('tr=w-')) {
        finalUrl += imageUrl.includes('?') ? '&' : '?';
        finalUrl += queryParams;
    }
    return finalUrl;
};
