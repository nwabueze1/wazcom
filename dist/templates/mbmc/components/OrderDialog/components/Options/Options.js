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
import { useContext } from "react";
import { useOptionsStyles } from "./styles";
import { Option } from "../Option";
import { RestaurantContext } from "../../../../contexts";
export var Options = function (_a) {
    var itemOptions = _a.itemOptions, selectedOptions = _a.selectedOptions, handleUpdateSelectedOptions = _a.handleUpdateSelectedOptions;
    var menu = useContext(RestaurantContext).menu;
    var classes = useOptionsStyles();
    var displayOptions = function () {
        var options = itemOptions.filter(function (option) { var _a; return (_a = menu === null || menu === void 0 ? void 0 : menu.options_config) === null || _a === void 0 ? void 0 : _a.map(function (config) { return config === null || config === void 0 ? void 0 : config.uuid; }).includes(option); });
        return options.map(function (option, index) {
            var _a;
            var config = (_a = menu === null || menu === void 0 ? void 0 : menu.options_config) === null || _a === void 0 ? void 0 : _a.find(function (config) { return (config === null || config === void 0 ? void 0 : config.uuid.toString()) === option; });
            return (_jsx(Option, __assign({}, config, { selectedOptions: selectedOptions, handleUpdateSelectedOptions: handleUpdateSelectedOptions }), index));
        });
    };
    return _jsx("div", __assign({ className: classes.root }, { children: displayOptions() }));
};
