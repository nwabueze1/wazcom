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
import { useCallback, useState, useEffect } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography, Checkbox, Radio, } from "@mui/material";
import { useOptionStyles } from "./styles";
import { ExpandMore } from "@mui/icons-material";
import { parseSelectedChoices } from "./helper";
import { getCurrency, getFloatOrIntAmount } from "utilities/restaurant";
export var Option = function (_a) {
    var _b;
    var name = _a.name, type = _a.type, options = _a.options, selectedOptions = _a.selectedOptions, updateSelectedOptions = _a.updateSelectedOptions, restaurant = _a.restaurant;
    var classes = useOptionStyles();
    var _c = __read(useState(parseSelectedChoices(selectedOptions, name)), 2), selectedChoices = _c[0], setSelectedChoices = _c[1];
    useEffect(function () {
        setSelectedChoices(parseSelectedChoices(selectedOptions, name));
    }, [selectedOptions]);
    var currency = (_b = restaurant.restaurant.bank_info) === null || _b === void 0 ? void 0 : _b.currency;
    currency = getCurrency(currency);
    var handleUpdateSelectedOptions = useCallback(function (add, choice) {
        var newSelectedChoices = __spreadArray([], __read(selectedChoices), false);
        if (type === "selection")
            newSelectedChoices = [];
        if (add) {
            newSelectedChoices.push(choice);
        }
        else {
            var idx = newSelectedChoices.findIndex(function (selectedChoice) {
                return selectedChoice.amount === choice.amount &&
                    selectedChoice.name === choice.name;
            });
            newSelectedChoices.splice(idx, 1);
        }
        setSelectedChoices(newSelectedChoices);
        updateSelectedOptions({
            name: name,
            type: type,
            selectedChoices: newSelectedChoices,
        });
    }, [updateSelectedOptions, selectedChoices]);
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
            var picker = type === "selection" ? (_jsx(Radio, { checked: isChecked, className: classes.optionPicker }, void 0)) : (_jsx(Checkbox, { checked: isChecked, className: classes.optionPicker }, void 0));
            return (_jsxs("div", __assign({ onClick: function () {
                    handleUpdateSelectedOptions(!isChecked, {
                        name: name,
                        amount: amount.slice(2),
                    });
                }, className: classes.option }, { children: [_jsxs("div", __assign({ className: classes.optionPickerParent }, { children: [picker, _jsx(Typography, { children: name }, void 0)] }), void 0), _jsxs(Typography, __assign({ className: classes.optionAmount }, { children: [(type === "deselection" ? "-" : (config === null || config === void 0 ? void 0 : config.amount) == 0 ? "" : "+") +
                                ((config === null || config === void 0 ? void 0 : config.amount) !== 0 ? currency : ""), getFloatOrIntAmount(config === null || config === void 0 ? void 0 : config.amount)] }), void 0)] }), index));
        });
    }, [selectedChoices, updateSelectedOptions]);
    return (_jsxs(Accordion, __assign({ className: classes.root, defaultExpanded: true }, { children: [_jsx(AccordionSummary, __assign({ id: name, "aria-controls": name, className: classes.summary, expandIcon: _jsx(ExpandMore, {}, void 0) }, { children: _jsx(Typography, __assign({ variant: "body1" }, { children: name }), void 0) }), void 0), _jsxs(AccordionDetails, __assign({ className: classes.details }, { children: [_jsx(Typography, __assign({ className: classes.optionType }, { children: type }), void 0), _jsx("div", { children: displayConfig() }, void 0)] }), void 0)] }), void 0));
};
