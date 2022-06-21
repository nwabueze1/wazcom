export var useDefaultAvatar = function (site) {
    var _a, _b, _c;
    return ((site === null || site === void 0 ? void 0 : site.user) &&
        ((_b = (_a = site === null || site === void 0 ? void 0 : site.user) === null || _a === void 0 ? void 0 : _a.firstname) === null || _b === void 0 ? void 0 : _b.charAt(0).toUpperCase()) +
            ((_c = site === null || site === void 0 ? void 0 : site.user) === null || _c === void 0 ? void 0 : _c.lastname.charAt(0).toUpperCase()));
};
