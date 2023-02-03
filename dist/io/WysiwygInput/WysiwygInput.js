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
import { useState, useEffect } from "react";
import { useCreatePostInputStyles } from "./styles";
import clx from "classnames";
import { PosTitleInput } from "./PostTitleInput/PostTitleInput";
import { Editor } from "./Editor";
export var WysiwygInput = function (_a) {
    var name = _a.name, className = _a.className, classNames = _a.classNames, helperText = _a.helperText, label = _a.label, value = _a.value, onChange = _a.onChange, error = _a.error, feedback = _a.feedback, Loader = _a.Loader, client = _a.client, props = __rest(_a, ["name", "className", "classNames", "helperText", "label", "value", "onChange", "error", "feedback", "Loader", "client"]);
    var classes = useCreatePostInputStyles();
    var _b = __read(useState(''), 2), editorContent = _b[0], setEditorContent = _b[1];
    var _c = __read(useState(''), 2), postTitle = _c[0], setPostTitle = _c[1];
    var handleContent = function (content) {
        setEditorContent(content);
    };
    var handlePostTitle = function (title) {
        setPostTitle(title);
    };
    useEffect(function () {
        console.log(editorContent);
    }, [editorContent]);
    var handleChange = function (e) {
        if (onChange) {
            onChange === null || onChange === void 0 ? void 0 : onChange({ name: name !== null && name !== void 0 ? name : "", value: { title: postTitle, content: editorContent } });
        }
    };
    return (_jsxs("div", { children: [_jsxs("div", __assign({ className: clx(className, classes.root) }, { children: [_jsx("div", { className: classes.header }), _jsx(PosTitleInput, { handlePostTitle: handlePostTitle, placeHolder: "This is the title" }), _jsx("div", __assign({ className: clx(classNames === null || classNames === void 0 ? void 0 : classNames.createPostInput, error && classes.editorError) }, { children: _jsx(Editor, { handleContent: handleContent }) }))] })), _jsx("div", __assign({ className: classes.postButtonContainer }, { children: _jsx("button", __assign({ onClick: function () { return handleChange(); }, className: classes.postButton }, { children: "Post" })) }))] }));
};
