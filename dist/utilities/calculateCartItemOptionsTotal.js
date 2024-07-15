import { convertNumberTo2DecimalPlace } from "./convertNumberTo2DecimalPlace";
export var calculateCartItemOptionsTotal = function (options) {
    var _a;
    if (!options || typeof options !== "string")
        return 0.0;
    var optionsArray = (_a = JSON.parse(options || "[]")) !== null && _a !== void 0 ? _a : [];
    if (!Array.isArray(optionsArray))
        return 0.0;
    var result = optionsArray.reduce(function (a, option) {
        return a +
            option.selectedChoices.reduce(function (a, b) { return a + (option.type === "deselection" ? -Number(b.amount) : Number(b.amount)); }, 0);
    }, 0);
    return convertNumberTo2DecimalPlace(result);
};
