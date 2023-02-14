export var capitalize = function (param) {
    var formattedParam = param === null || param === void 0 ? void 0 : param.replace(/\//g, "").replace(/-/g, " ");
    var pathSplits = formattedParam
        .split(" ")
        .map(function (slice) { return slice.charAt(0).toUpperCase() + slice.slice(1).toLowerCase(); });
    return pathSplits.join(" ");
};
