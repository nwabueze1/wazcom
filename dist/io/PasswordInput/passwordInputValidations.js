export var passwordIsValid = function (_a) {
    var value = _a.value;
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return {
        status: re.test(value),
        errorText: "Password is not strong",
    };
};
export var passwordIsRepeated = function () { return ({ status: true }); };
export var isRequired = function (_a) {
    var name = _a.name, value = _a.value;
    return ({
        status: !!value,
        errorText: "The ".concat(name, " field is required!!"),
    });
};
