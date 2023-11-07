export function generateUniqueId(prefix) {
    var timestamp = Date.now().toString(36);
    var randomNum = Math.random().toString(36).substring(2, 5);
    var uniqueId = timestamp + randomNum;
    return prefix ? "".concat(prefix).concat(uniqueId) : "_" + uniqueId;
}
