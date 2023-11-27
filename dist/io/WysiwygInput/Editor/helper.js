export var createImageSrcset = function (value, isBackground) {
    var _a, _b, _c, _d;
    if (isBackground === void 0) { isBackground = false; }
    if (!value)
        return "";
    var dolosUrl = "https://img.wazobia.tech";
    var isAmpersand = (_a = value === null || value === void 0 ? void 0 : value.src) === null || _a === void 0 ? void 0 : _a.includes("?");
    var image3x = "".concat(dolosUrl, "/").concat(value === null || value === void 0 ? void 0 : value.src).concat(isAmpersand ? "&tr" : "?tr", "=w-1100").concat(calculateCropCoordinates(1100, (_b = value === null || value === void 0 ? void 0 : value.coordinates) === null || _b === void 0 ? void 0 : _b.desktop));
    var image2x = "".concat(dolosUrl, "/").concat(value === null || value === void 0 ? void 0 : value.src).concat(isAmpersand ? "&tr" : "?tr", "=w-750").concat(calculateCropCoordinates(750, (_c = value === null || value === void 0 ? void 0 : value.coordinates) === null || _c === void 0 ? void 0 : _c.tablet));
    var image1x = "".concat(dolosUrl, "/").concat(value === null || value === void 0 ? void 0 : value.src).concat(isAmpersand ? "&tr" : "?tr", "=w-450").concat(calculateCropCoordinates(450, (_d = value === null || value === void 0 ? void 0 : value.coordinates) === null || _d === void 0 ? void 0 : _d.mobile));
    if (!isBackground)
        return "".concat(image3x, " 1100w, ").concat(image2x, " 750w, ").concat(image1x, " 450w");
    return "url(\"".concat(image1x, "\") 1x, url(\"").concat(image2x, "\") 2x, url(\"").concat(image3x, "\") 3x");
};
export var calculateCropCoordinates = function (imageWidth, coordinates) {
    if (!coordinates)
        return "";
    var left = Math.round(imageWidth * coordinates["left"]);
    var top = Math.round(imageWidth * coordinates["top"]);
    var right = Math.round(imageWidth * coordinates["right"]);
    var bottom = Math.round(imageWidth * coordinates["bottom"]);
    return ",cr-".concat(left, ".").concat(top, ".").concat(right, ".").concat(bottom);
};
export var imageSizes = '(min-width: 1024px) 1100px, (min-width: 500px) 750px, 450px';
