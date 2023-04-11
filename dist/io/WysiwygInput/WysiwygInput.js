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
// import React, { useMemo } from "react";
import { useCreatePostInputStyles } from "./styles";
import { Editor } from "./Editor";
import { EditorToolbar } from "./EditorToolbar";
import clx from "classnames";
export var WysiwygInput = function (_a) {
    var _b, _c;
    var className = _a.className, onChange = _a.onChange, value = _a.value, embed = _a.embed, initiateEmbed = _a.initiateEmbed;
    var classes = useCreatePostInputStyles();
    // const insertButtonTop = useMemo(() => {
    //   const editor = document.getElementById("editor");
    //   const scrollOffset = ((editor?.offsetHeight as number) / window.innerHeight) * 100;
    //   return scrollOffset > 70 ? 400 : 98 + (editor?.clientHeight ?? 42);
    // }, [value?.content]);
    var handleTitleChange = function (event) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: "title", value: event.target.value });
    };
    var handleContentChange = function (content) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: "content", value: content });
    };
    return (_jsxs("div", __assign({ className: clx(className, classes.root) }, { children: [_jsxs("div", __assign({ className: classes.postTitleInputParent }, { children: [_jsx(EditorToolbar, { initiateEmbed: initiateEmbed }), _jsx("input", { placeholder: "Add post title", className: classes.postTitleInput, value: (_b = value === null || value === void 0 ? void 0 : value.title) !== null && _b !== void 0 ? _b : "", onChange: handleTitleChange })] })), _jsx(Editor, { content: (_c = value === null || value === void 0 ? void 0 : value.content) !== null && _c !== void 0 ? _c : "", handleChange: handleContentChange, embed: embed })] })));
};
