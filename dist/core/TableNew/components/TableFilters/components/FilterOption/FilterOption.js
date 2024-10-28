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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { SelectInput, TextInput } from "../../../../../../io";
import { useFilterOptionStyles } from "./useStyles";
import { PiTrashLight } from "react-icons/pi";
import clx from "classnames";
export var FilterOption = function (_a) {
    var _b;
    var _c, _d, _e;
    var columns = _a.columns, value = _a.value, onChange = _a.onChange, onDelete = _a.onDelete, _f = _a.isSubmitting, isSubmitting = _f === void 0 ? false : _f, classNames = _a.classNames;
    var classes = useFilterOptionStyles();
    var operators = (_c = columns === null || columns === void 0 ? void 0 : columns.find(function (column) { return column.key === (value === null || value === void 0 ? void 0 : value.column); })) === null || _c === void 0 ? void 0 : _c.filterOperators;
    var _g = __read(useState({}), 2), touched = _g[0], setTouched = _g[1];
    var _h = __read(useState(isSubmitting), 2), submitting = _h[0], setSubmitting = _h[1];
    var getIsError = function (name) {
        return submitting ? (value === null || value === void 0 ? void 0 : value.column) && !(value === null || value === void 0 ? void 0 : value[name]) : touched[name] && !(value === null || value === void 0 ? void 0 : value[name]);
    };
    var handleChange = function (e) {
        var _a;
        onChange(__assign(__assign({}, value), (_a = {}, _a[e.name] = e.value, _a)));
    };
    var handleBlur = function (e) {
        var _a;
        setTouched(__assign(__assign({}, touched), (_a = {}, _a[e.name] = true, _a)));
    };
    useEffect(function () {
        setSubmitting(isSubmitting);
    }, [isSubmitting]);
    return (_jsxs("div", { className: classes.base, children: [_jsxs("div", { className: clx(classes.root, (_b = {},
                    _b[classes.rootSelectInput] = ((_d = value === null || value === void 0 ? void 0 : value.column) === null || _d === void 0 ? void 0 : _d.length) > 0,
                    _b)), children: [_jsx("div", { children: _jsx(SelectInput, { value: value === null || value === void 0 ? void 0 : value.column, options: (columns === null || columns === void 0 ? void 0 : columns.map(function (column) {
                                var _a;
                                return ({
                                    label: column === null || column === void 0 ? void 0 : column.name,
                                    value: (_a = column === null || column === void 0 ? void 0 : column.key) !== null && _a !== void 0 ? _a : "",
                                    icon: column === null || column === void 0 ? void 0 : column.icon,
                                });
                            })) || [], classNames: {
                                control: clx(classes.control, classNames === null || classNames === void 0 ? void 0 : classNames.select),
                                option: classes.option,
                            }, name: "column", onChange: handleChange, placeholder: "Select column", isError: (touched === null || touched === void 0 ? void 0 : touched.column) && !(value === null || value === void 0 ? void 0 : value.column), helperText: (touched === null || touched === void 0 ? void 0 : touched.column) && !(value === null || value === void 0 ? void 0 : value.column) ? "Please select a column" : "", onBlur: function () { return handleBlur({ name: "column" }); } }) }), !(value === null || value === void 0 ? void 0 : value.column) ? (_jsx(TextInput, { value: value === null || value === void 0 ? void 0 : value.operator, placeholder: "Select operator", disabled: true, classNames: {
                            input: clx(classes.textInput, classNames === null || classNames === void 0 ? void 0 : classNames.textInput),
                        }, onBlur: function () { return handleBlur({ name: "value" }); } })) : (_jsx(SelectInput, { value: value === null || value === void 0 ? void 0 : value.operator, options: (_e = (operators !== null && operators !== void 0 ? operators : [])) === null || _e === void 0 ? void 0 : _e.map(function (operator) {
                            var _a, _b;
                            return ({
                                label: (_a = operator === null || operator === void 0 ? void 0 : operator.label) !== null && _a !== void 0 ? _a : "",
                                value: (_b = operator === null || operator === void 0 ? void 0 : operator.value) !== null && _b !== void 0 ? _b : "",
                            });
                        }), name: "operator", onChange: handleChange, classNames: {
                            control: clx(classes.control, classNames === null || classNames === void 0 ? void 0 : classNames.select),
                            option: classes.option,
                        }, onBlur: function () { return handleBlur({ name: "operator" }); }, isError: getIsError("operator"), helperText: getIsError("operator") ? "Please select an operator" : "" })), _jsx(TextInput, { placeholder: "Type your filter value...", classNames: {
                            input: clx(classes.textInput, classNames === null || classNames === void 0 ? void 0 : classNames.textInput),
                        }, name: "value", value: value === null || value === void 0 ? void 0 : value.value, onChange: handleChange, onBlur: function () { return handleBlur({ name: "value" }); }, isError: getIsError("value"), helperText: getIsError("value") ? "Please enter a filter value" : "" })] }), _jsx("button", { title: "delete", className: classes.trashButton, onClick: onDelete, disabled: !(value === null || value === void 0 ? void 0 : value.column) || !(value === null || value === void 0 ? void 0 : value.operator) || !(value === null || value === void 0 ? void 0 : value.value), children: _jsx(PiTrashLight, {}) })] }));
};
