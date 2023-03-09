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
import { CloseSharp } from "@mui/icons-material";
import { Button } from "../../../../core";
import { Box } from "@mui/material";
import clx from "classnames";
export var UploadDialogue = function (_a) {
    var className = _a.className, handleCloseMedia = _a.handleCloseMedia, handleFilesSelection = _a.handleFilesSelection, _b = _a.showHeader, showHeader = _b === void 0 ? true : _b, handleMediaAction = _a.handleMediaAction, setActiveTab = _a.setActiveTab;
    var classes = useAddMediaStyles();
    var handleFileChange = function (event) {
        if (!event.target.files || event.target.files === 0)
            return;
        var file = event.target.files[0];
        handleMediaAction === null || handleMediaAction === void 0 ? void 0 : handleMediaAction("add", file);
        setActiveTab === null || setActiveTab === void 0 ? void 0 : setActiveTab(1);
    };
    return (_jsxs(Box, __assign({ className: clx(className, classes.box) }, { children: [showHeader && (_jsxs(_Fragment, { children: [_jsxs("div", __assign({ className: classes.dialogueHeader }, { children: [_jsx("p", { children: "Upload your files" }), _jsx(CloseSharp, { onClick: function () { return handleCloseMedia; }, className: classes.close })] })), _jsx("hr", {})] })), _jsxs("div", __assign({ className: classes.content }, { children: [_jsx("p", __assign({ className: classes.text }, { children: "Drop file to add to media library" })), _jsx("p", __assign({ className: classes.or }, { children: "or" })), _jsx("div", __assign({ className: classes.btn }, { children: _jsx(Button, __assign({ onClick: handleFilesSelection }, { children: "choose file" })) })), _jsx("input", { type: "file", accept: "image/*", className: classes.uploader, onChange: handleFileChange })] }))] })));
};
