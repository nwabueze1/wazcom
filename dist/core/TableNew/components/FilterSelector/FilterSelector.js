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
import { useState } from "react";
import { RadioButtonInput, TextInput, SelectInput } from "../../../../io";
import { Button } from "../../../../core";
import { useFilterSelectorStyles } from "./styles";
import { filters, getInitialFilter, getSelectOptions } from "./helpers";
import clx from "classnames";
export var FilterSelector = function (_a) {
    var className = _a.className, column = _a.column, handleClose = _a.handleClose, handleSelectFilter = _a.handleSelectFilter;
    var classes = useFilterSelectorStyles();
    var _b = __read(useState(getInitialFilter(column)), 2), activeFilter = _b[0], setActiveFilter = _b[1];
    var handleChange = function (_a) {
        var value = _a.value;
        if (column.type !== "date") {
            setActiveFilter(__assign(__assign({}, activeFilter), { value: value }));
            return;
        }
        var valueSplits = activeFilter.value.toString().split(" ");
        var newValue;
        if (isNaN(value))
            newValue = valueSplits[0] + " " + value;
        else
            newValue = value + " " + valueSplits[1];
        setActiveFilter(__assign(__assign({}, activeFilter), { value: newValue }));
    };
    var renderInput = function (type) {
        var _a;
        var valueSplits = ((_a = activeFilter.value) !== null && _a !== void 0 ? _a : "").toString().split(" ");
        switch (type) {
            case "text":
                return (_jsx(TextInput, { classNames: { input: classes.filterInput }, value: activeFilter.value, onChange: handleChange }));
            case "number":
                return (_jsx(TextInput, { classNames: { input: classes.filterInput }, type: "number", value: column.type === "number" ? activeFilter.value : Number(valueSplits[0]), onChange: handleChange }));
            default:
                return (_jsx(SelectInput, { className: clx(classes.filterInput, classes.filterSelectInputElement), classNames: {
                        classes: {
                            select: classes.filterSelectInput,
                        },
                        optionLabel: classes.filterSelectInputLabel,
                    }, options: getSelectOptions(), value: valueSplits[1], onChange: handleChange }));
        }
    };
    var renderFilter = function () {
        var filter = filters.find(function (filter) { return filter.type === column.type; });
        return filter.operators.map(function (_a, index) {
            var name = _a.name, symbol = _a.symbol;
            var isActive = activeFilter.symbol === symbol;
            return (_jsxs("div", __assign({ className: clx(classes.filterOperator) }, { children: [_jsxs("div", __assign({ className: clx(classes.filterOperatorHeading, isActive && classes.filterOperatorActive) }, { children: [_jsx(RadioButtonInput, { value: isActive, classNames: { classes: { root: classes.filterOperatorCheck } }, onChange: function (_a) {
                                    var checked = _a.value;
                                    if (!checked)
                                        return;
                                    setActiveFilter(__assign(__assign({}, activeFilter), { symbol: symbol }));
                                } }), name] })), isActive && (_jsx("div", __assign({ style: { display: "flex", gap: "8px", padding: '0 12px', marginTop: '8px' } }, { children: filter.inputs.map(function (input) { return renderInput(input); }) })))] }), index));
        });
    };
    var applyFilter = function () {
        handleSelectFilter({
            column: column.key,
            operator: activeFilter.symbol,
            value: activeFilter.value,
        });
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className), onClick: function (e) { return e.stopPropagation(); } }, { children: [renderFilter(), _jsxs("div", __assign({ className: classes.filterButtons }, { children: [_jsx(Button, __assign({ className: classes.filterButtonSecondary, onClick: function () { handleClose === null || handleClose === void 0 ? void 0 : handleClose(); } }, { children: "Cancel" })), _jsx(Button, __assign({ className: classes.filterButtonPrimary, onClick: applyFilter }, { children: "Apply filter" }))] }))] })));
};
