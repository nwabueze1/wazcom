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
import { TimeInput, ToggleInput } from "..";
import { MultiSelect } from "../../core";
import { useScheduleStyles } from "./styles";
import { useState } from "react";
import clx from "classnames";
export var DateTimeScheduler = function (_a) {
    var className = _a.className, onChange = _a.onChange;
    var classes = useScheduleStyles();
    var _b = __read(useState({
        multiDays: {},
        from: "",
        to: "",
        repeat: false,
    }), 2), scheduleValue = _b[0], setScheduleValue = _b[1];
    var handleChange = function (_a) {
        var _b, _c;
        var name = _a.name, value = _a.value;
        setScheduleValue(__assign(__assign({}, scheduleValue), (_b = {}, _b[name] = value, _b)));
        if (!onChange)
            return;
        onChange(__assign(__assign({}, scheduleValue), (_c = {}, _c[name] = value, _c)));
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsx(MultiSelect, { className: classes.multiSelect, name: "multiDays", onChange: function (_a) {
                    var name = _a.name, value = _a.value;
                    handleChange({ name: name, value: value });
                } }), _jsx("div", __assign({ className: classes.time }, { children: _jsx(TimeInput, { name: "from", onChange: function (_a) {
                        var name = _a.name, value = _a.value;
                        handleChange({ name: name, value: value });
                    } }) })), _jsx("div", __assign({ className: classes.to }, { children: "To" })), _jsx("div", __assign({ className: classes.time }, { children: _jsx(TimeInput, { name: "to", onChange: function (_a) {
                        var name = _a.name, value = _a.value;
                        handleChange({ name: name, value: value });
                    } }) })), _jsxs("div", __assign({ className: classes.toggle }, { children: [_jsx("p", { children: "Repeat" }), _jsx(ToggleInput, { name: "repeat", onChange: function (_a) {
                            var name = _a.name, value = _a.value;
                            handleChange({ name: name, value: value });
                        } })] }))] })));
};
