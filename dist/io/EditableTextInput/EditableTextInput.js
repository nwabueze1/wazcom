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
import { Collapse } from "@mui/material";
import { useState } from "react";
import ContentEditable from "react-contenteditable";
import { EditTag } from "./components/EditTag/EditTag";
import { contols } from "./data";
import { useEditableTextStyles } from "./styles";
export var EditableTextInput = function (_a) {
    var _b;
    var html = _a.html, setHtml = _a.setHtml, placeholder = _a.placeholder, heading = _a.heading;
    var _c = __read(useState({
        html: !html && html === "" ? placeholder : html,
        editable: true,
    }), 2), fieldState = _c[0], setFieldState = _c[1];
    var _d = __read(useState(false), 2), collapse = _d[0], setCollapse = _d[1];
    var classes = useEditableTextStyles();
    var handleChange = function (evt) {
        setFieldState({ html: evt.target.value });
        if (setHtml)
            setHtml(evt.target.value);
    };
    var handleFocus = function () {
        var _a;
        if (((_a = fieldState.html) === null || _a === void 0 ? void 0 : _a.trim()) === placeholder) {
            setFieldState({ html: "" });
        }
        setCollapse(true);
    };
    var handleBlur = function () {
        setCollapse(false);
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx(ContentEditable, { className: classes.editableTextInput, tagName: "pre", html: (_b = fieldState === null || fieldState === void 0 ? void 0 : fieldState.html) !== null && _b !== void 0 ? _b : "<p></p>", onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, style: heading ? { fontSize: 30, fontweight: 600, height: 60 } : {} }), _jsx(Collapse, __assign({ in: collapse }, { children: _jsx("div", __assign({ className: classes.editTagContainer }, { children: contols.map(function (control, idx) { return (_jsx(EditTag, __assign({}, control), idx)); }) })) }))] })));
};
