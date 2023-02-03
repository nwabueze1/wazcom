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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEditorToolbarStyles } from './styles';
import clx from "classnames";
// Undo and redo functions for Custom Toolbar
function undoChange() {
    this.quill.history.undo();
}
function redoChange() {
    this.quill.history.redo();
}
// Add sizes to whitelist and register them
// const Size = Quill.import("formats/size");
// Size.whitelist = ["extra-small", "small", "medium", "large"];
// Quill.register(Size, true);
// Add fonts to whitelist and register them
// const Font = Quill.import("formats/font");
// Font.whitelist = [
//   "arial",
//   "comic-sans",
//   "courier-new",
//   "georgia",
//   "helvetica",
//   "lucida"
// ];
// Quill.register(Font, true);
// Modules object for setting up the Quill editor
export var modules = {
    toolbar: {
        container: "#toolbar",
        handlers: {
            undo: undoChange,
            redo: redoChange
        }
    },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true
    }
};
// Formats objects for setting up the Quill editor
export var formats = [
    "header",
    "size",
    "bold",
    "italic",
    "underline",
    "align",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video"
];
// Custom Undo button icon component for Quill editor. You can import it directly
// from 'quill/assets/icons/undo.svg' but I found that a number of loaders do not
// handle them correctly
var CustomUndo = function () { return (_jsxs("svg", __assign({ viewBox: "0 0 18 18" }, { children: [_jsx("polygon", { className: "ql-fill ql-stroke", points: "6 10 4 12 2 10 6 10" }), _jsx("path", { className: "ql-stroke", d: "M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9" })] }))); };
// Redo button icon component for Quill editor
var CustomRedo = function () { return (_jsxs("svg", __assign({ viewBox: "0 0 18 18" }, { children: [_jsx("polygon", { className: "ql-fill ql-stroke", points: "12 10 14 12 16 10 12 10" }), _jsx("path", { className: "ql-stroke", d: "M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5" })] }))); };
// Quill Toolbar component
export var EditorToolbar = function () {
    var classes = useEditorToolbarStyles();
    return (_jsxs("div", __assign({ id: "toolbar", className: classes.toolbar }, { children: [_jsx("span", __assign({ className: clx("ql-formats") }, { children: _jsxs("select", __assign({ className: "ql-size", defaultValue: "medium" }, { children: [_jsx("option", __assign({ value: "extra-small" }, { children: "1" })), _jsx("option", __assign({ value: "small" }, { children: "2" })), _jsx("option", __assign({ value: "medium" }, { children: "3" })), _jsx("option", __assign({ value: "large" }, { children: "4" }))] })) })), _jsx("span", __assign({ className: clx("ql-formats", classes.toolbarItem) }, { children: _jsxs("select", __assign({ className: clx("ql-header", classes.toolbarItem), defaultValue: "3" }, { children: [_jsx("option", __assign({ value: "1" }, { children: "H1" })), _jsx("option", __assign({ value: "2" }, { children: "H2" })), _jsx("option", __assign({ value: "3" }, { children: "H3" }))] })) })), _jsxs("span", __assign({ className: clx("ql-formats", classes.toolbarItem) }, { children: [_jsx("button", { className: "ql-bold" }), _jsx("button", { className: "ql-italic" }), _jsx("button", { className: "ql-underline" }), _jsx("button", { className: "ql-strike" })] })), _jsxs("span", __assign({ className: clx("ql-formats", classes.toolbarItem) }, { children: [_jsx("button", { className: "ql-list", value: "ordered" }), _jsx("button", { className: "ql-list", value: "bullet" }), _jsx("button", { className: "ql-indent", value: "-1" }), _jsx("button", { className: "ql-indent", value: "+1" })] })), _jsxs("span", __assign({ className: clx("ql-formats", classes.toolbarItem) }, { children: [_jsx("button", { className: "ql-link" }), _jsx("button", { className: "ql-image" }), _jsx("button", { className: "ql-video" })] })), _jsxs("span", __assign({ className: clx("ql-formats", classes.toolbarItem) }, { children: [_jsx("button", __assign({ className: "ql-undo" }, { children: _jsx(CustomUndo, {}) })), _jsx("button", __assign({ className: "ql-redo" }, { children: _jsx(CustomRedo, {}) }))] }))] })));
};
