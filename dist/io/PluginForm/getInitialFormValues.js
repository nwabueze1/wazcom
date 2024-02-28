export var getInitialFormValues = function (questions) {
    var initialAnswer = {};
    questions.forEach(function (_a) {
        var uuid = _a.uuid, type = _a.type, fields = _a.fields;
        if (type === "ADDRESS") {
            var addressFields_1 = {};
            Object.values(fields).forEach(function (value) {
                addressFields_1[value] = "";
            });
            initialAnswer[uuid] = addressFields_1;
        }
        else if (type === "OPINION" || type === "RATING") {
            initialAnswer[uuid] = 0;
        }
        else {
            initialAnswer[uuid] = type === "MULTI_CHOICE" ? [] : "";
        }
    });
    return initialAnswer;
};
