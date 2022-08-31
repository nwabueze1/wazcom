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
import { useRef, useState } from "react";
import { InputLabel } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import { useRichInputStyles } from "./styles";
import { displayFeedback } from "../../helpers/io";
import clx from "classnames";
import { EditImageDialog } from "./EditImageDialog/EditMediaDialog";
import { EditorMediaLibrary } from "./EditorMediaLibrary/EditorMediaLibrary";
var plugins = [
    "advlist autolink lists link code",
    "charmap print preview anchor help",
    "searchreplace visualblocks code",
    "insertdatetime media table paste wordcount",
];
var toolbar = [
    "undo redo | formatselect | link image | bold italic | \
    alignleft aligncenter alignright | \
    bullist numlist outdent indent | help | imageSelector",
];
export var RichTextInput = function (_a) {
    var _b;
    var name = _a.name, className = _a.className, classNames = _a.classNames, helperText = _a.helperText, label = _a.label, apiKey = _a.apiKey, value = _a.value, onChange = _a.onChange, error = _a.error, feedback = _a.feedback, Loader = _a.Loader, client = _a.client, props = __rest(_a, ["name", "className", "classNames", "helperText", "label", "apiKey", "value", "onChange", "error", "feedback", "Loader", "client"]);
    var classes = useRichInputStyles();
    var _c = __read(useState(false), 2), mediaOpen = _c[0], setMediaOpen = _c[1];
    var _d = __read(useState({
        url: "",
        width: "100",
        height: "100",
        title: "",
    }), 2), image = _d[0], setImage = _d[1];
    var editorRef = useRef();
    var handleContentChange = function (content) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: content });
    };
    var handleSelectImage = function (value) {
        setMediaOpen(false);
        setImage(__assign(__assign({}, image), { url: value === null || value === void 0 ? void 0 : value.url, title: value === null || value === void 0 ? void 0 : value.title }));
    };
    var handleMediaLibraryClose = function () {
        setMediaOpen(false);
    };
    var handleDialogClose = function () {
        setImage(__assign(__assign({}, image), { url: "" }));
    };
    var insertImage = function () {
        if (image.url)
            editorRef.current.insertContent("<img src=".concat(image === null || image === void 0 ? void 0 : image.url, " width=").concat(image === null || image === void 0 ? void 0 : image.width, " height=").concat(image === null || image === void 0 ? void 0 : image.height, " />"));
        setImage({
            url: "",
            title: "",
            width: "100",
            height: "100",
        });
    };
    var updateImage = function (name, value) {
        var _a;
        setImage(__assign(__assign({}, image), (_a = {}, _a[name] = value, _a)));
    };
    return (_jsxs("div", __assign({ className: clx(className, classes.root) }, { children: [label && (_jsxs(InputLabel, __assign({ className: (_b = classNames === null || classNames === void 0 ? void 0 : classNames.label) !== null && _b !== void 0 ? _b : "", htmlFor: name }, { children: [label, " ", _jsx("p", __assign({ className: classes.required }, { children: props.required ? " *" : "" }), void 0)] }), void 0)), _jsxs("div", __assign({ className: clx(classNames === null || classNames === void 0 ? void 0 : classNames.richTextInput, classes.editor, error && classes.editorError) }, { children: [_jsx(Editor, { value: value, apiKey: apiKey, onInit: function (event, editor) {
                            (editorRef.current = editor), event;
                        }, init: {
                            height: 500,
                            menubar: true,
                            image_title: true,
                            automatic_uploads: true,
                            file_picker_types: "image",
                            paste_data_images: true,
                            setup: function (editor) {
                                editor.ui.registry.addButton("imageSelector", {
                                    icon: "image",
                                    onAction: function () { return setMediaOpen(true); },
                                });
                            },
                            plugins: plugins,
                            toolbar: toolbar,
                        }, onEditorChange: handleContentChange }, void 0), client &&
                        _jsx(EditorMediaLibrary, { mediaOpen: mediaOpen, handleClose: handleMediaLibraryClose, handleSelect: handleSelectImage, name: name, client: client }, void 0)] }), void 0), image.url && (_jsx(EditImageDialog, { image: image, handleEditImage: updateImage, handleDialogClose: handleDialogClose, handleInsertImage: insertImage }, void 0)), helperText, feedback && displayFeedback(feedback), Loader] }), void 0));
};
