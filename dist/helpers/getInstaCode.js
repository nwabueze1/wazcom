export var getCodeFromUrl = function () {
    var url = location.search;
    var newUrl = new URLSearchParams(url);
    return newUrl.get("code");
};
