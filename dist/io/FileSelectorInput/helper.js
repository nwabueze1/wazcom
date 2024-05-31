export var shortenFileName = function (filename) {
    var maxSize = 10;
    var concatSize = maxSize - 5;
    if (filename.length <= maxSize)
        return filename;
    var split = filename.split(".");
    var ext = "";
    var fInfo = "";
    if (split.length > 1) {
        var lastIndex = split.length - 1;
        ext = split[lastIndex];
        var copy = split.slice(0, lastIndex).join(".");
        fInfo = copy.substring(0, concatSize).concat("...");
    }
    if (fInfo)
        return fInfo.concat(ext);
    return filename.slice(maxSize);
};
