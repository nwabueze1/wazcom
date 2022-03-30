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
import * as React from "react";
import { InputLabel } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import { useRichInputStyles } from "./styles";
import { displayFeedback } from "../../helpers/io";
import clx from "classnames";
var plugins = [
    "advlist autolink lists link image code",
    "charmap print preview anchor help",
    "searchreplace visualblocks code",
    "insertdatetime media table paste wordcount",
];
var toolbar = [
    "undo redo | formatselect | link image | bold italic | \
    alignleft aligncenter alignright | \
    bullist numlist outdent indent | help",
];
export var RichTextInput = function (_a) {
    var name = _a.name, className = _a.className, classNames = _a.classNames, label = _a.label, apiKey = _a.apiKey, value = _a.value, upload = _a.upload, onChange = _a.onChange, error = _a.error, feedback = _a.feedback, Loader = _a.Loader;
    var classes = useRichInputStyles();
    var _b = __read(React.useState(false), 2), loading = _b[0], setLoading = _b[1];
    var handleContentChange = function (content) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: content });
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [label && (_jsx(InputLabel, __assign({ className: clx(classes.label, classNames === null || classNames === void 0 ? void 0 : classNames.label), htmlFor: name }, { children: label }), void 0)), _jsx("div", __assign({ className: clx(classes.editor, (classNames === null || classNames === void 0 ? void 0 : classNames.richTextInput) ? classNames.richTextInput : "", error && classes.editorError) }, { children: _jsx(Editor, { value: value, apiKey: apiKey, init: {
                        height: 500,
                        menubar: true,
                        image_title: true,
                        automatic_uploads: true,
                        file_picker_types: "image",
                        paste_data_images: true,
                        file_picker_callback: function (cb) {
                            upload === null || upload === void 0 ? void 0 : upload(cb, setLoading);
                        },
                        plugins: plugins,
                        toolbar: toolbar,
                    }, onEditorChange: handleContentChange }, void 0) }), void 0), feedback && displayFeedback(feedback), loading && Loader] }), void 0));
};
