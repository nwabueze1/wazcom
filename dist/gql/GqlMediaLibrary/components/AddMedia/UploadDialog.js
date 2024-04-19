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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useAddMediaStyles } from "./styles";
import { Button } from "../../../../core";
import { Box } from "@mui/material";
import clx from "classnames";
import { MdClose } from "react-icons/md";
export var UploadDialog = function (_a) {
    var className = _a.className, handleFilesSelection = _a.handleFilesSelection, _b = _a.showHeader, showHeader = _b === void 0 ? true : _b, handleMediaAction = _a.handleMediaAction, handleCloseMedia = _a.handleCloseMedia;
    var classes = useAddMediaStyles();
    var handleFileChange = function (event) {
        if (!event.target.files || event.target.files === 0)
            return;
        var file = event.target.files[0];
        handleMediaAction === null || handleMediaAction === void 0 ? void 0 : handleMediaAction("add", file);
        handleCloseMedia(false);
    };
    return (_jsx(_Fragment, { children: _jsxs(Box, __assign({ className: clx(className, classes.box) }, { children: [showHeader && (_jsxs(_Fragment, { children: [_jsxs("div", __assign({ className: classes.dialogueHeader }, { children: [_jsx("p", { children: "Upload your files" }), _jsx(MdClose, { onClick: function () { return handleCloseMedia(false); }, className: classes.close })] })), _jsx("hr", {})] })), _jsx("div", __assign({ className: classes.dropBox }, { children: _jsxs("div", __assign({ className: classes.outline }, { children: [_jsxs("div", __assign({ className: classes.content }, { children: [_jsx("p", __assign({ className: classes.text }, { children: "Drop file to add to media library" })), _jsx("p", __assign({ className: classes.or }, { children: "or" })), _jsx(Button, __assign({ className: clx(classes.btn, classes.uploadBtn), onClick: handleFilesSelection }, { children: "Choose file" }))] })), _jsx("input", { type: "file", accept: "image/*", className: classes.uploader, onChange: handleFileChange })] })) }))] })) }));
};
