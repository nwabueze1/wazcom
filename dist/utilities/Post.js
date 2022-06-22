export var stripHtml = function (html) {
    var div = document.createElement("div");
    div.innerHTML = html;
    return String(div.textContent);
};
