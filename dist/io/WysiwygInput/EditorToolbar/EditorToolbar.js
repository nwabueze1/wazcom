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
import { useEditorToolbarStyles } from "./styles";
import clx from "classnames";
import { EmbedButton } from "../EmbedButton";
export var EditorToolbar = function (_a) {
    var initiateEmbed = _a.initiateEmbed;
    var classes = useEditorToolbarStyles();
    return (_jsxs("div", __assign({ id: "toolbar", className: classes.toolbar }, { children: [_jsx("span", __assign({ className: clx("ql-formats", classes.toolbarItem) }, { children: _jsx(EmbedButton, { initiateEmbed: initiateEmbed }) })), _jsx("span", __assign({ className: clx("ql-formats", classes.toolbarItem) }, { children: _jsxs("select", __assign({ className: "ql-header" }, { children: [_jsx("option", __assign({ value: "1" }, { children: "Heading 1" })), _jsx("option", __assign({ value: "2" }, { children: "Heading 2" })), _jsx("option", __assign({ value: "3" }, { children: "Heading 3" })), _jsx("option", __assign({ value: "4" }, { children: "Heading 4" })), _jsx("option", __assign({ value: "5" }, { children: "Heading 5" })), _jsx("option", __assign({ value: "6" }, { children: "Heading 6" })), _jsx("option", __assign({ value: "" }, { children: "Normal" }))] })) })), _jsxs("span", __assign({ className: clx("ql-formats", classes.toolbarItem) }, { children: [_jsx("button", { className: "ql-bold" }), _jsx("button", { className: "ql-italic" }), _jsx("button", { className: "ql-underline" }), _jsx("button", { className: "ql-strike" })] })), _jsxs("span", __assign({ className: clx("ql-formats", classes.toolbarItem) }, { children: [_jsx("button", { className: "ql-list", value: "ordered" }), _jsx("button", { className: "ql-list", value: "bullet" }), _jsx("select", { className: "ql-align" })] }))] })));
};
