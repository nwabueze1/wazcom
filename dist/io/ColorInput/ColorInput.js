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
import { ChromePicker } from "react-color";
import { useColorInputStyles } from "./styles";
import { ClickAwayListener } from "@mui/base";
export var ColorInput = function (_a) {
    var name = _a.name, value = _a.value, onChange = _a.onChange;
    var classes = useColorInputStyles();
    var _b = __read(useState(false), 2), displayPicker = _b[0], setDisplayPicker = _b[1];
    var togglePicker = function () {
        setDisplayPicker(!displayPicker);
    };
    var handleClosePicker = function () {
        setDisplayPicker(false);
    };
    var handleChange = function (color) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: color.hex });
    };
    return (_jsx(ClickAwayListener, __assign({ onClickAway: handleClosePicker }, { children: _jsxs("div", __assign({ className: classes.root }, { children: [_jsx("div", { className: classes.colorInput, style: { background: value }, onClick: togglePicker }), displayPicker && (_jsx(ChromePicker, { onChangeComplete: handleChange, className: classes.colorPicker, color: value }))] })) })));
};
