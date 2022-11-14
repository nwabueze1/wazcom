export var renderStyle = function (style, classes) {
    return classes[style];
};
export var parseHtml = function (html) {
    var p = typeof window !== "undefined" ? window.document.createElement("p") : null;
    p.innerHTML = html;
    return p.innerHTML;
};
