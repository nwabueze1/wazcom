export var sliceIntoChunks = function (arr, chunkSize) {
    var res = [];
    for (var i = 0; i < arr.length; i += chunkSize) {
        var chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
};
