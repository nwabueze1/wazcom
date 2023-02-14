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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
import { useCallback, useEffect, useState } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Box, InputLabel, TextField } from "@mui/material";
import { useComboBoxStyles } from "./styles";
import clx from "classnames";
import { displayFeedback } from "../../helpers/io";
import { Tag } from "../../core/Tag";
import { CheckBoxInput } from "../CheckBoxInput/index";
var filter = createFilterOptions();
export var ComboBoxInput = function (_a) {
    var _b, _c, _d, _e;
    var name = _a.name, _f = _a.isAdd, isAdd = _f === void 0 ? true : _f, onChange = _a.onChange, initialOptions = _a.options, label = _a.label, classNames = _a.classNames, helperText = _a.helperText, value = _a.value, error = _a.error, placeholder = _a.placeholder, feedback = _a.feedback, className = _a.className, props = __rest(_a, ["name", "isAdd", "onChange", "options", "label", "classNames", "helperText", "value", "error", "placeholder", "feedback", "className"]);
    var classes = useComboBoxStyles();
    var _g = __read(useState(initialOptions), 2), options = _g[0], setOptions = _g[1];
    var _h = __read(useState([]), 2), selectedSubCat = _h[0], setSelectedSubCat = _h[1];
    useEffect(function () {
        setOptions(initialOptions);
    }, [initialOptions]);
    var handleChange = function (selectedOption) {
        var _a;
        var value = (_a = options.find(function (option) { var _a, _b; return ((_a = option === null || option === void 0 ? void 0 : option.label) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === ((_b = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) === null || _b === void 0 ? void 0 : _b.toLowerCase()); })) === null || _a === void 0 ? void 0 : _a.value;
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: String(name), value: value !== null && value !== void 0 ? value : selectedOption.label });
    };
    var handleFilterOptions = function (options, params) {
        var filtered = filter(options, params);
        var inputValue = params.inputValue;
        // Suggest the creation of a new value
        var isExisting = options.some(function (option) { return inputValue === option.label; });
        if (isAdd && inputValue !== "" && !isExisting) {
            filtered.push({
                value: inputValue,
                label: "Add ".concat(inputValue),
            });
        }
        return filtered;
    };
    var getValue = useCallback(function () {
        var _a;
        var label = (_a = options === null || options === void 0 ? void 0 : options.find(function (option) { var _a, _b, _c; return ((_b = (_a = option.value) === null || _a === void 0 ? void 0 : _a.category) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === ((_c = value === null || value === void 0 ? void 0 : value.toString()) === null || _c === void 0 ? void 0 : _c.toLowerCase()); })) === null || _a === void 0 ? void 0 : _a.label;
        if (label)
            return { label: label, value: value };
        return { label: "", value: { category: "" } };
    }, [options, value]);
    return (_jsxs("div", __assign({ className: clx(className, classes.root) }, { children: [label && (_jsx(InputLabel, __assign({ className: (_b = classNames === null || classNames === void 0 ? void 0 : classNames.label) !== null && _b !== void 0 ? _b : "", htmlFor: name }, { children: label }))), _jsx(Autocomplete, __assign({}, props, { freeSolo: true, options: options !== null && options !== void 0 ? options : [], getOptionLabel: function (option) {
                    var _a;
                    return typeof option == "string" ? option : (_a = option === null || option === void 0 ? void 0 : option.label) !== null && _a !== void 0 ? _a : "";
                }, value: getValue(), onChange: function (_, selectedOption) {
                    handleChange(selectedOption);
                }, filterOptions: handleFilterOptions, renderOption: function (props, option) {
                    return (_jsx(Box, __assign({ component: "li" }, props, { children: _jsxs("div", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.optionContainer }, { children: [_jsx("p", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.optionLabel }, { children: option === null || option === void 0 ? void 0 : option.label })), option.subText && (_jsx("p", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.optionSubText }, { children: option.subText })))] })) })));
                }, renderInput: function (params) { return (_jsx(TextField, __assign({}, params, { placeholder: placeholder, variant: "outlined", error: error, className: classes.renderInput }))); }, className: (classNames === null || classNames === void 0 ? void 0 : classNames.comboBoxInput) ? classNames.comboBoxInput : "", classes: (classNames === null || classNames === void 0 ? void 0 : classNames.classes) ? classNames.classes : {} })), _jsxs("div", __assign({ className: classes.tagsParent }, { children: [_jsx(Tag, { name: value === null || value === void 0 ? void 0 : value.label, classname: classes.tag, status: true, handleRemove: function () { } }), _jsxs("div", __assign({ className: classes.subCategoryBox }, { children: [_jsxs("div", __assign({ className: classes.subCategoryTagsParent }, { children: [_jsx("div", { className: classes.boxMargin }), _jsx("div", __assign({ className: classes.subCategoryTags }, { children: selectedSubCat.length > 0 &&
                                            selectedSubCat.map(function (tag, id) { return (_jsx(Tag, { name: tag }, id)); }) }))] })), _jsxs("div", { children: [((_c = value === null || value === void 0 ? void 0 : value.value) === null || _c === void 0 ? void 0 : _c.subCategory) && (_jsx("p", __assign({ className: classes.label }, { children: "PICK SUB CATEGORIES" }))), _jsx("div", __assign({ className: classes.inputContainer }, { children: ((_d = value === null || value === void 0 ? void 0 : value.value) === null || _d === void 0 ? void 0 : _d.subCategory) &&
                                            ((_e = value === null || value === void 0 ? void 0 : value.value) === null || _e === void 0 ? void 0 : _e.subCategory.map(function (name, id) { return (_jsxs("div", __assign({ className: classes.subCategoryInput }, { children: [_jsx(CheckBoxInput, { className: classes.checkbox, name: name, onChange: function (data) {
                                                            if (data.value) {
                                                                setSelectedSubCat(__spreadArray(__spreadArray([], __read(selectedSubCat), false), [name], false));
                                                            }
                                                            else {
                                                                setSelectedSubCat(selectedSubCat.filter(function (item) { return item !== name; }));
                                                            }
                                                        } }), _jsx("p", __assign({ className: classes.item }, { children: name }))] }), id)); })) }))] })] }))] })), helperText, feedback && displayFeedback(feedback)] })));
};
