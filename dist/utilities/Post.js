export var stripHtml = function (html) {
    var div = document.createElement("div");
    div.innerHTML = html;
    return String(div.textContent);
};
export var truncate = function (fullStr, strLen, separator, frontChars, backChars) {
    if (strLen === void 0) { strLen = 25; }
    if (separator === void 0) { separator = "...."; }
    if (frontChars === void 0) { frontChars = 7; }
    if (backChars === void 0) { backChars = 9; }
    if (fullStr.length <= strLen)
        return fullStr;
    return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
};
