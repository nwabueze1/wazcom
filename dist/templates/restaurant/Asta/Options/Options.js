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
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useMemo } from "react";
import { useOptionsStyles } from "./styles";
import { Option } from "../Option/Option";
export var Options = function (_a) {
    var initialOptions = _a.options, selectedOptions = _a.selectedOptions, itemId = _a.itemId, updateSelectedOptions = _a.updateSelectedOptions, restaurant = _a.restaurant;
    var classes = useOptionsStyles();
    if (!restaurant) {
        return _jsx("div", {}, void 0);
    }
    var menu = useMemo(function () {
        var menus = restaurant.restaurant.activeMenus;
        return menus.find(function (menu) { var _a; return (_a = menu === null || menu === void 0 ? void 0 : menu.activeMenuItems) === null || _a === void 0 ? void 0 : _a.map(function (item) { return item.id; }).includes(itemId.toString()); });
    }, [itemId]);
    var displayOptions = useCallback(function () {
        var options = initialOptions.filter(function (option) { var _a; return (_a = menu === null || menu === void 0 ? void 0 : menu.options_config) === null || _a === void 0 ? void 0 : _a.map(function (config) { return config === null || config === void 0 ? void 0 : config.uuid; }).includes(option); });
        return options.map(function (option, index) {
            var _a;
            var config = (_a = menu === null || menu === void 0 ? void 0 : menu.options_config) === null || _a === void 0 ? void 0 : _a.find(function (config) { return (config === null || config === void 0 ? void 0 : config.uuid.toString()) === option; });
            return (_jsx(Option, __assign({}, config, { selectedOptions: selectedOptions, updateSelectedOptions: updateSelectedOptions, restaurant: restaurant }), index));
        });
    }, [updateSelectedOptions]);
    return _jsx("div", __assign({ className: classes.root }, { children: displayOptions() }), void 0);
};
