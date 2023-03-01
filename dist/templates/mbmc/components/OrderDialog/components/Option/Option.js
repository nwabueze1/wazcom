var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useContext, useCallback, useEffect } from "react";
import { parseSelectedChoices } from "./helpers";
import { RestaurantContext } from "../../../../contexts";
import { getCurrency } from "../../../../../../utilities";
import { RadioButtonInput, CheckBoxInput } from "../../../../../../io";
import { useOptionStyles } from "./styles";
export var Option = function (_a) {
    var _b, _c, _d;
    var name = _a.name, type = _a.type, options = _a.options, selectedOptions = _a.selectedOptions, handleUpdateSelectedOptions = _a.handleUpdateSelectedOptions;
    var classes = useOptionStyles();
    var menu = useContext(RestaurantContext).menu;
    var _e = __read(useState(parseSelectedChoices(selectedOptions, name)), 2), selectedChoices = _e[0], setSelectedChoices = _e[1];
    var currency = (_d = (_c = (_b = menu === null || menu === void 0 ? void 0 : menu.restaurant) === null || _b === void 0 ? void 0 : _b.bank_info) === null || _c === void 0 ? void 0 : _c.currency) !== null && _d !== void 0 ? _d : "";
    currency = getCurrency(currency);
    useEffect(function () {
        setSelectedChoices(parseSelectedChoices(selectedOptions, name));
    }, [selectedOptions]);
    var updateSelectedOptions = useCallback(function (add, choice) {
        var newSelectedChoices = __spreadArray([], __read(selectedChoices), false);
        if (type === "selection")
            newSelectedChoices = [];
        if (add) {
            newSelectedChoices.push(choice);
        }
        else {
            var idx = newSelectedChoices.findIndex(function (selectedChoice) {
                return selectedChoice.amount === choice.amount && selectedChoice.name === choice.name;
            });
            newSelectedChoices.splice(idx, 1);
        }
        setSelectedChoices(newSelectedChoices);
        handleUpdateSelectedOptions({
            name: name,
            type: type,
            selectedChoices: newSelectedChoices,
        });
    }, [handleUpdateSelectedOptions, selectedChoices]);
    var displayConfig = useCallback(function () {
        var configOptions;
        switch (type) {
            case "selection":
                configOptions = options.selection;
                break;
            case "deselection":
                configOptions = options.deselection;
                break;
            case "extras":
                configOptions = options.extras;
                break;
        }
        return configOptions === null || configOptions === void 0 ? void 0 : configOptions.map(function (config, index) {
            var amount = (type === "deselection" ? "-" : "+") + currency + (config === null || config === void 0 ? void 0 : config.amount);
            var name = config === null || config === void 0 ? void 0 : config.name;
            var isChecked = Boolean(selectedChoices.find(function (choice) { return choice.name === name && choice.amount === amount.slice(2); }));
            var picker = type === "selection" ? (_jsx(RadioButtonInput, { value: isChecked, classNames: { radioButtonInput: classes.optionPicker } })) : (_jsx(CheckBoxInput, { value: isChecked, classNames: { checkBoxInput: classes.optionPicker } }));
            return (_jsxs("div", __assign({ onClick: function () {
                    updateSelectedOptions(!isChecked, {
                        name: name,
                        amount: amount.slice(2),
                    });
                }, className: classes.option }, { children: [_jsxs("div", __assign({ className: classes.optionPickerParent }, { children: [picker, _jsx("p", __assign({ className: classes.optionText }, { children: name }))] })), _jsxs("p", __assign({ className: classes.optionAmount }, { children: [(type === "deselection" ? "-" : (config === null || config === void 0 ? void 0 : config.amount) == 0 ? "" : "+") +
                                ((config === null || config === void 0 ? void 0 : config.amount) !== 0 ? currency : ""), config === null || config === void 0 ? void 0 : config.amount] }))] }), index));
        });
    }, [selectedChoices, handleUpdateSelectedOptions]);
    var displayOption = function () {
        switch (type) {
            case "selection":
                return "Please select a variant. You can only pick one option";
            default:
                return "You can pick multiple options";
        }
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.optionDescription }, { children: [_jsxs("div", { children: [_jsx("p", __assign({ className: classes.optionName }, { children: name })), _jsx("p", __assign({ className: classes.optionHelperText }, { children: displayOption() }))] }), type === "selection" && _jsx("span", __assign({ className: classes.optionRequired }, { children: "REQUIRED" }))] })), displayConfig()] })));
};
