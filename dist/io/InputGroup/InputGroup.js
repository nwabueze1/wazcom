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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useInputGroupStyles } from "./styles";
import { InputLabel } from "@mui/material";
import { TextInput } from "../TextInput";
import { displayFeedback } from "../../helpers/io";
import clx from "classnames";
import { truncate } from "../../utilities/Post";
export var InputGroup = function (_a) {
    var className = _a.className, classNames = _a.classNames, text = _a.text, feedback = _a.feedback, label = _a.label, icon = _a.icon, props = __rest(_a, ["className", "classNames", "text", "feedback", "label", "icon"]);
    var classes = useInputGroupStyles();
    var _b = __read(useState(""), 2), inputText = _b[0], setInputText = _b[1];
    useEffect(function () {
        setInputText(text !== null && text !== void 0 ? text : "");
    }, [text]);
    return (_jsxs("div", { className: clx(classes.root, className), children: [label && (_jsxs(InputLabel, { className: (classNames === null || classNames === void 0 ? void 0 : classNames.label) ? classNames === null || classNames === void 0 ? void 0 : classNames.label : undefined, htmlFor: props.name, children: [label, _jsx("p", { className: classes.required, children: props.required ? "*" : "" })] })), _jsxs("div", { className: clx(classes.inputGroup, classNames === null || classNames === void 0 ? void 0 : classNames.inputGroup), children: [_jsx(TextInput
                    // {...props}
                    , { 
                        // {...props}
                        value: "", className: clx(classes.textInput, classNames === null || classNames === void 0 ? void 0 : classNames.textInput) }), _jsxs("div", { className: clx(classes.text, classNames === null || classNames === void 0 ? void 0 : classNames.text, !icon && classes.textPosition), children: [icon && _jsx("div", { className: clx(classes.icon, classNames === null || classNames === void 0 ? void 0 : classNames.groupIcon), children: icon }), _jsx("p", { children: truncate(inputText) })] })] }), feedback && displayFeedback(feedback)] }));
};
