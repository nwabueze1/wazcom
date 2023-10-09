export var getInitialFormValues = function (questions) {
    var initialAnswer = {};
    questions.forEach(function (_a) {
        var question = _a.question, type = _a.type, fields = _a.fields;
        if (type === "ADDRESS") {
            var addressFields_1 = {};
            Object.values(fields).forEach(function (value) {
                addressFields_1[value] = "";
            });
            initialAnswer[question] = addressFields_1;
        }
        else if (type === "OPINION" || type === "RATING") {
            initialAnswer[question] = 0;
        }
        else {
            initialAnswer[question] = type === "MULTI_CHOICE" ? [] : "";
        }
    });
    return initialAnswer;
};
