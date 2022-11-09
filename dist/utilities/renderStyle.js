export var renderStyle = function (style, classes) {
    return classes[style];
};
export var parseHtml = function (html) {
    var p = window.document.createElement("p");
    p.innerHTML = html;
    return p.innerHTML;
};
