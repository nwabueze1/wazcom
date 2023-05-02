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
import { useEffect, useRef, useState } from "react";
import { modules, formats } from "../EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useEditorStyles } from "./styles";
export var Editor = function (_a) {
    var content = _a.content, handleChange = _a.handleChange, embed = _a.embed;
    var quillRef = useRef(null);
    var _b = __read(useState(), 2), reactQuill = _b[0], setReactQuill = _b[1];
    var classes = useEditorStyles();
    useEffect(function () {
        if (typeof window !== "undefined") {
            import("react-quill").then(function (mod) {
                setReactQuill(mod);
            });
        }
    }, []);
    useEffect(function () {
        if (!embed)
            return;
        handleEmbed(embed);
    }, [embed]);
    var handleEmbed = function (embed) {
        var _a, _b;
        var quillObj = (_a = quillRef === null || quillRef === void 0 ? void 0 : quillRef.current) === null || _a === void 0 ? void 0 : _a.getEditor();
        var range = (_b = quillObj === null || quillObj === void 0 ? void 0 : quillObj.selection) === null || _b === void 0 ? void 0 : _b.savedRange;
        var type = embed.type, value = embed.value;
        if (type === "link") {
            var _c = __read(value.split("||>>"), 2), text = _c[0], url = _c[1];
            quillObj.insertText(range.index, text, "user");
            quillObj.setSelection(range.index, text.length);
            quillObj.theme.tooltip.edit("link", url);
            quillObj.theme.tooltip.save();
        }
        else
            quillObj.editor.insertEmbed(range.index, type, value);
        handleChange(quillObj.root.innerHTML);
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx("div", __assign({ className: classes.editor }, { children: reactQuill && (_jsx(reactQuill.default, { id: "editor", ref: quillRef, theme: "snow", value: content, onChange: handleChange, placeholder: "Add content", modules: modules, formats: formats, className: classes.quillEditor })) })), _jsxs("div", __assign({ className: classes.wordCount }, { children: [content.trim().length === 0 ? 0 : content.split(" ").length, " words"] }))] })));
};
export default Editor;
