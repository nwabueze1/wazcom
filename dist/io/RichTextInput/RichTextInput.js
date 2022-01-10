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
import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useRichInputStyles } from "./styles";
export var plugins = [
    "advlist autolink lists link image code",
    "charmap print preview anchor help",
    "searchreplace visualblocks code",
    "insertdatetime media table paste wordcount",
];
export var toolbar = [
    "undo redo | formatselect | link image | bold italic | \
    alignleft aligncenter alignright | \
    bullist numlist outdent indent | help",
];
export var RichTextInput = function (_a) {
    var apiKey = _a.apiKey, value = _a.value, handleContentChange = _a.handleContentChange, upload = _a.upload, Loader = _a.Loader;
    var classes = useRichInputStyles();
    var _b = React.useState(false), loading = _b[0], setLoading = _b[1];
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx(Editor, { value: value, apiKey: apiKey, init: {
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
                }, onEditorChange: handleContentChange }, void 0), loading && Loader] }), void 0));
};
