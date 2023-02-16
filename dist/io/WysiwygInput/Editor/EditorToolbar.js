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
export var modules = {
    toolbar: {
        container: "#toolbar"
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
// Quill Toolbar component
export var EditorToolbar = function () {
    var classes = useEditorToolbarStyles();
    return (_jsxs("div", __assign({ id: "toolbar", className: classes.toolbar }, { children: [_jsx("span", __assign({ className: clx("ql-formats") }, { children: _jsxs("select", __assign({ className: "ql-size", defaultValue: "medium" }, { children: [_jsx("option", __assign({ value: "extra-small" }, { children: "1" })), _jsx("option", __assign({ value: "small" }, { children: "2" })), _jsx("option", __assign({ value: "medium" }, { children: "3" })), _jsx("option", __assign({ value: "large" }, { children: "4" }))] })) })), _jsx("span", __assign({ className: clx("ql-formats", classes.toolbarItem) }, { children: _jsxs("select", __assign({ className: clx("ql-header", classes.toolbarItem), defaultValue: "3" }, { children: [_jsx("option", __assign({ value: "1" }, { children: "H1" })), _jsx("option", __assign({ value: "2" }, { children: "H2" })), _jsx("option", __assign({ value: "3" }, { children: "H3" }))] })) })), _jsxs("span", __assign({ className: clx("ql-formats", classes.toolbarItem) }, { children: [_jsx("button", { className: "ql-bold" }), _jsx("button", { className: "ql-italic" }), _jsx("button", { className: "ql-underline" }), _jsx("button", { className: "ql-strike" })] })), _jsxs("span", __assign({ className: clx("ql-formats", classes.toolbarItem) }, { children: [_jsx("button", { className: "ql-list", value: "ordered" }), _jsx("button", { className: "ql-list", value: "bullet" }), _jsx("button", { className: "ql-indent", value: "-1" }), _jsx("button", { className: "ql-indent", value: "+1" })] })), _jsxs("span", __assign({ className: clx("ql-formats", classes.toolbarItem) }, { children: [_jsx("button", { className: "ql-link" }), _jsx("button", { className: "ql-image" }), _jsx("button", { className: "ql-video" })] }))] })));
};
