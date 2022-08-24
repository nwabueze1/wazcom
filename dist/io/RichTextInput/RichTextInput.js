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
import React, { useRef, useState } from "react";
import { InputLabel, Modal, TextField, Button } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import { useRichInputStyles } from "./styles";
import { displayFeedback } from "../../helpers/io";
import clx from "classnames";
import { GqlMediaLibrary } from "../../gql/GqlMediaLibrary";
import { createApolloClient, GET_IMAGES, UPLOAD_IMAGE, } from "../../helpers/graphQL";
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
    var name = _a.name, className = _a.className, classNames = _a.classNames, helperText = _a.helperText, label = _a.label, apiKey = _a.apiKey, value = _a.value, onChange = _a.onChange, error = _a.error, feedback = _a.feedback, Loader = _a.Loader, props = __rest(_a, ["name", "className", "classNames", "helperText", "label", "apiKey", "value", "onChange", "error", "feedback", "Loader"]);
    var classes = useRichInputStyles();
    var _c = __read(React.useState(false), 1), loading = _c[0];
    var _d = __read(useState(false), 2), mediaOpen = _d[0], setMediaOpen = _d[1];
    var _e = __read(useState(""), 2), imgUrl = _e[0], setImgUrl = _e[1];
    var _f = __read(useState("100"), 2), imgWidth = _f[0], setImgWidth = _f[1];
    var _g = __read(useState("100"), 2), imgHeight = _g[0], setImgHeight = _g[1];
    var _h = __read(useState(""), 2), imgTitle = _h[0], setImgTitle = _h[1];
    var _j = __read(useState(), 2), setEvent = _j[1];
    var editorRef = useRef();
    var handleContentChange = function (content) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: content });
    };
    var handleSelectImage = function (_a) {
        var value = _a.value;
        setMediaOpen(false);
        setImgUrl(value === null || value === void 0 ? void 0 : value.url);
        setImgTitle(value === null || value === void 0 ? void 0 : value.title);
    };
    var handleClose = function () {
        setMediaOpen(false);
    };
    var handleDialogClose = function () {
        setImgUrl("");
    };
    var insertImage = function () {
        if (imgUrl)
            editorRef.current.insertContent("<img src=".concat(imgUrl, " width=").concat(imgWidth, " height=").concat(imgHeight, " />"));
        setImgUrl("");
    };
    var onEditorInit = function (event, editor) {
        setEvent(event);
        editorRef.current = editor;
    };
    var editImageDialog = function () {
        return (_jsx(Modal, __assign({ open: true }, { children: _jsxs("div", __assign({ className: classes.editMediaModal }, { children: [_jsx("p", __assign({ className: classes.editImageHeader }, { children: "Edit Image" }), void 0), _jsxs("div", __assign({ className: classes.inputContainer }, { children: [_jsx(TextField, { label: "Title", variant: "outlined", size: "small", className: classes.editMediaInput, value: imgTitle, type: "text", placeholder: "Image Title", onChange: function (event) { return setImgTitle(event.target.value); } }, void 0), _jsx(TextField, { label: "Url", variant: "outlined", size: "small", className: classes.editMediaInput, value: imgUrl, type: "text", placeholder: "Image URL", onChange: function (event) { return setImgUrl(event.target.value); } }, void 0), _jsxs("div", __assign({ className: classes.editMediaSizeContainer }, { children: [_jsx(TextField, { label: "Width", variant: "outlined", size: "small", className: classes.editMediaSizeInput, value: imgWidth, type: "number", placeholder: "Image Width", onChange: function (event) { return setImgWidth(event.target.value); } }, void 0), _jsx(TextField, { label: "Height", variant: "outlined", size: "small", className: classes.editMediaSizeInput, value: imgHeight, type: "number", placeholder: "Image Height", onChange: function (event) { return setImgHeight(event.target.value); } }, void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.editButtonContainer }, { children: [_jsx(Button, __assign({ onClick: handleDialogClose, className: classes.editMediaCancelBtn }, { children: "Cancel" }), void 0), _jsx(Button, __assign({ onClick: insertImage, className: classes.editMediaSubmitBtn }, { children: "Submit" }), void 0)] }), void 0)] }), void 0) }), void 0));
    };
    return (_jsxs("div", __assign({ className: clx(className, classes.root) }, { children: [label && (_jsxs(InputLabel, __assign({ className: (_b = classNames === null || classNames === void 0 ? void 0 : classNames.label) !== null && _b !== void 0 ? _b : "", htmlFor: name }, { children: [label, " ", _jsx("p", __assign({ className: classes.required }, { children: props.required ? " *" : "" }), void 0)] }), void 0)), _jsxs("div", __assign({ className: clx(classNames === null || classNames === void 0 ? void 0 : classNames.richTextInput, classes.editor, error && classes.editorError) }, { children: [_jsx(Editor, { value: value, apiKey: apiKey, onInit: onEditorInit, init: {
                            height: 500,
                            menubar: true,
                            image_title: true,
                            automatic_uploads: true,
                            file_picker_types: "image",
                            paste_data_images: true,
                            setup: function (editor) {
                                editor.ui.registry.addButton('imageSelector', {
                                    icon: "image",
                                    onAction: function () { return setMediaOpen(true); }
                                });
                            },
                            plugins: plugins,
                            toolbar: toolbar,
                        }, onEditorChange: handleContentChange }, void 0), _jsx(Modal, __assign({ open: mediaOpen }, { children: _jsx("div", __assign({ className: classes.wrapper }, { children: _jsx(GqlMediaLibrary, { config: {
                                    client: createApolloClient("https://nicodemus.sytbuilder.com/graphql"),
                                    query: {
                                        name: GET_IMAGES,
                                        variables: {
                                            page: 1,
                                            count: 7,
                                        },
                                    },
                                    upload: {
                                        name: UPLOAD_IMAGE,
                                        variables: {},
                                    },
                                    viewOnly: true,
                                }, onChange: handleSelectImage, name: name, handleClose: handleClose }, void 0) }), void 0) }), void 0)] }), void 0), imgUrl &&
                editImageDialog(), helperText, feedback && displayFeedback(feedback), loading && Loader] }), void 0));
};
