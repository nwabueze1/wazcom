export var parseOptionString = function (options) {
    var parsedOptions = options
        .map(function (option) { return option.selectedChoices.map(function (choice) { return choice.name; }).join(", "); })
        .join(", ");
    return parsedOptions.length > 150 ? parsedOptions.slice(0, 145) + "..." : parsedOptions;
};
