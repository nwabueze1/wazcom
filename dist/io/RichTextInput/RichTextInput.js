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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { InputLabel } from "@mui/material";
// import { Editor } from "@tinymce/tinymce-react";
import { useRichInputStyles } from "./styles";
import { displayFeedback } from "../../helpers/io";
import clx from "classnames";
// const plugins = [
//   "advlist autolink lists link image code",
//   "charmap print preview anchor help",
//   "searchreplace visualblocks code",
//   "insertdatetime media table paste wordcount",
// ];
// const toolbar = [
//   "undo redo | formatselect | link image | bold italic | \
//     alignleft aligncenter alignright | \
//     bullist numlist outdent indent | help",
// ];
export var RichTextInput = function (_a) {
    var _b;
    var name = _a.name, className = _a.className, classNames = _a.classNames, helperText = _a.helperText, label = _a.label, 
    // apiKey,
    // value,
    // upload,
    // onChange,
    error = _a.error, feedback = _a.feedback, Loader = _a.Loader, props = __rest(_a, ["name", "className", "classNames", "helperText", "label", "error", "feedback", "Loader"]);
    var classes = useRichInputStyles();
    var _c = __read(React.useState(false), 1), loading = _c[0];
    // const handleContentChange = (content: string) => {
    //   onChange?.({ name: name as string, value: content });
    // };
    return (_jsxs("div", __assign({ className: clx(className, classes.root) }, { children: [label && (_jsxs(InputLabel, __assign({ className: (_b = classNames === null || classNames === void 0 ? void 0 : classNames.label) !== null && _b !== void 0 ? _b : "", htmlFor: name }, { children: [label, " ", _jsx("p", __assign({ className: classes.required }, { children: props.required ? " *" : "" }))] }))), _jsx("div", { className: clx(classNames === null || classNames === void 0 ? void 0 : classNames.richTextInput, classes.editor, error && classes.editorError) }), helperText, feedback && displayFeedback(feedback), loading && Loader] })));
};
