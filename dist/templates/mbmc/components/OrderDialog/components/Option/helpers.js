export var parseSelectedChoices = function (selectedOptions, name) {
    var selectedOption = selectedOptions.find(function (option) { return option.name === name; });
    if (selectedOption)
        return selectedOption.selectedChoices;
    return [];
};
