export var calculateOptionsTotal = function (options, quantity) {
    if (!options || options.length === 0)
        return 0;
    var additions = options
        .filter(function (option) { return option.type !== "deselection"; })
        .map(function (option) { return option.selectedChoices.map(function (choice) { return Number(choice.amount); }); });
    var subtractions = options
        .filter(function (option) { return option.type === "deselection"; })
        .map(function (option) { return option.selectedChoices.map(function (choice) { return Number(choice.amount); }); });
    additions = [].concat.apply([], additions);
    subtractions = [].concat.apply([], subtractions);
    additions = additions.reduce(function (sum, num) { return sum + num; }, 0);
    subtractions = subtractions.reduce(function (sum, num) { return sum - num; }, 0);
    return quantity * (additions + subtractions);
};
