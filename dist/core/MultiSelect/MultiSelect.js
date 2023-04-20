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
import { CheckBoxInput } from "../../io";
import { useMultiSelectStyles } from "./styles";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { defaultMultiSelect, multiSelectPositive } from "./helper";
import clx from "classnames";
export var MultiSelect = function (_a) {
    var onChange = _a.onChange, name = _a.name, label = _a.label, className = _a.className;
    var classes = useMultiSelectStyles();
    var _b = __read(useState(defaultMultiSelect), 2), selectedValue = _b[0], setSelectedValue = _b[1];
    var handleChange = function (_a) {
        var _b, _c, _d, _e;
        var input_name = _a.input_name, value = _a.value;
        var _value = defaultMultiSelect;
        if (input_name === "everyday") {
            if (selectedValue.everyday === false) {
                setSelectedValue(__assign({}, multiSelectPositive));
                _value = __assign({}, multiSelectPositive);
            }
            else {
                setSelectedValue(__assign({}, defaultMultiSelect));
                _value = __assign({}, defaultMultiSelect);
            }
        }
        else {
            if (selectedValue.everyday) {
                setSelectedValue(__assign(__assign({}, defaultMultiSelect), (_b = { everyday: false }, _b[input_name] = true, _b)));
                _value = __assign(__assign({}, defaultMultiSelect), (_c = { everyday: false }, _c[input_name] = true, _c));
            }
            else {
                setSelectedValue(__assign(__assign({}, selectedValue), (_d = {}, _d[input_name] = value, _d)));
                _value = __assign(__assign({}, selectedValue), (_e = {}, _e[input_name] = value, _e));
            }
        }
        onChange && onChange({ name: name, value: _value });
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsxs("label", __assign({ htmlFor: "multi-select", className: classes.dropdown }, { children: [label ? label : "Multi-days", _jsx("span", {}), _jsx(IoMdArrowDropdown, { className: classes.iconButton })] })), _jsx("input", { type: "checkbox", id: "multi-select", className: "multi-select" }), _jsxs("div", __assign({ className: clx(classes.dropdownList, "dropdown__list") }, { children: [_jsxs("div", __assign({ className: classes.listItem }, { children: [_jsx("label", __assign({ htmlFor: "everyday", className: classes.listItem }, { children: "Everyday" })), _jsx(CheckBoxInput, { name: "everyday", id: "everyday", className: classes.dropdownCheckbox, value: selectedValue.everyday, onChange: function (_a) {
                                    var name = _a.name, value = _a.value;
                                    handleChange({ input_name: name, value: value });
                                } })] })), _jsxs("div", __assign({ className: clx(classes.listItem, "dropdown__listItem") }, { children: [_jsx("label", __assign({ htmlFor: "sunday", className: classes.listItem }, { children: "Sunday" })), _jsx(CheckBoxInput, { name: "sunday", id: "sunday", className: classes.dropdownCheckbox, value: selectedValue.sunday, onChange: function (_a) {
                                    var name = _a.name, value = _a.value;
                                    handleChange({ input_name: name, value: value });
                                } })] })), _jsxs("div", __assign({ className: classes.listItem }, { children: [_jsx("label", __assign({ htmlFor: "monday", className: classes.listItem }, { children: "Monday" })), _jsx(CheckBoxInput, { name: "monday", id: "monday", className: classes.dropdownCheckbox, value: selectedValue.monday, onChange: function (_a) {
                                    var name = _a.name, value = _a.value;
                                    handleChange({ input_name: name, value: value });
                                } })] })), _jsxs("div", __assign({ className: classes.listItem }, { children: [_jsx("label", __assign({ htmlFor: "tuesday", className: classes.listItem }, { children: "Tuesday" })), _jsx(CheckBoxInput, { name: "tuesday", id: "tuesday", className: classes.dropdownCheckbox, value: selectedValue.tuesday, onChange: function (_a) {
                                    var name = _a.name, value = _a.value;
                                    handleChange({ input_name: name, value: value });
                                } })] })), _jsxs("div", __assign({ className: classes.listItem }, { children: [_jsx("label", __assign({ htmlFor: "wednesday", className: classes.listItem }, { children: "Wednesday" })), _jsx(CheckBoxInput, { name: "wednesday", id: "wednesday", className: classes.dropdownCheckbox, value: selectedValue.wednesday, onChange: function (_a) {
                                    var name = _a.name, value = _a.value;
                                    handleChange({ input_name: name, value: value });
                                } })] })), _jsxs("div", __assign({ className: classes.listItem }, { children: [_jsx("label", __assign({ htmlFor: "thursday", className: classes.listItem }, { children: "Thursday" })), _jsx(CheckBoxInput, { name: "thursday", id: "thursday", className: classes.dropdownCheckbox, value: selectedValue.thursday, onChange: function (_a) {
                                    var name = _a.name, value = _a.value;
                                    handleChange({ input_name: name, value: value });
                                } })] })), _jsxs("div", __assign({ className: classes.listItem }, { children: [_jsx("label", __assign({ htmlFor: "friday", className: classes.listItem }, { children: "Friday" })), _jsx(CheckBoxInput, { name: "friday", id: "friday", className: classes.dropdownCheckbox, value: selectedValue.friday, onChange: function (_a) {
                                    var name = _a.name, value = _a.value;
                                    handleChange({ input_name: name, value: value });
                                } })] })), _jsxs("div", __assign({ className: classes.listItem }, { children: [_jsx("label", __assign({ htmlFor: "saturday", className: classes.listItem }, { children: "Saturday" })), _jsx(CheckBoxInput, { name: "saturday", id: "saturday", className: classes.dropdownCheckbox, value: selectedValue.saturday, onChange: function (_a) {
                                    var name = _a.name, value = _a.value;
                                    handleChange({ input_name: name, value: value });
                                } })] }))] }))] })));
};
