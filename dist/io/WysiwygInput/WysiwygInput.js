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
import { useMemo } from "react";
import { useCreatePostInputStyles } from "./styles";
import { Editor } from "./Editor";
import { EmbedButton } from "./EmbedButton";
import clx from "classnames";
export var WysiwygInput = function (_a) {
    var _b, _c;
    var className = _a.className, onChange = _a.onChange, value = _a.value, embed = _a.embed, initiateEmbed = _a.initiateEmbed;
    var classes = useCreatePostInputStyles();
    var insertButtonTop = useMemo(function () {
        var _a;
        var editor = document.getElementById("editor");
        return 98 + ((_a = editor === null || editor === void 0 ? void 0 : editor.clientHeight) !== null && _a !== void 0 ? _a : 42);
    }, [value === null || value === void 0 ? void 0 : value.content]);
    var handleTitleChange = function (event) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: "title", value: event.target.value });
    };
    var handleContentChange = function (content) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: "content", value: content });
    };
    return (_jsxs("div", __assign({ className: clx(className, classes.root) }, { children: [_jsx("div", __assign({ className: classes.postTitleInputParent }, { children: _jsx("input", { placeholder: "Add post title", className: classes.postTitleInput, value: (_b = value === null || value === void 0 ? void 0 : value.title) !== null && _b !== void 0 ? _b : "", onChange: handleTitleChange }) })), _jsx(Editor, { content: (_c = value === null || value === void 0 ? void 0 : value.content) !== null && _c !== void 0 ? _c : "", handleChange: handleContentChange, embed: embed }), _jsx("div", __assign({ style: { position: "absolute", top: insertButtonTop } }, { children: _jsx(EmbedButton, { initiateEmbed: initiateEmbed }) }))] })));
};
