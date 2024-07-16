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
        handleMediaAction === null || handleMediaAction === void 0 ? void 0 : handleMediaAction("add", Array.from(event.target.files));
        handleCloseMedia(false);
    };
    return (_jsx(_Fragment, { children: _jsxs(Box, { className: clx(className, classes.box), children: [showHeader && (_jsxs(_Fragment, { children: [_jsxs("div", { className: classes.dialogueHeader, children: [_jsx("p", { children: "Upload your files" }), _jsx(MdClose, { onClick: function () { return handleCloseMedia(false); }, className: classes.close })] }), _jsx("hr", {})] })), _jsx("div", { className: classes.dropBox, children: _jsxs("div", { className: classes.outline, children: [_jsxs("div", { className: classes.content, children: [_jsx("p", { className: classes.text, children: "Drop file to add to media library" }), _jsx("p", { className: classes.or, children: "or" }), _jsx(Button, { className: clx(classes.btn, classes.uploadBtn), onClick: handleFilesSelection, children: "Choose file" })] }), _jsx("input", { type: "file", accept: "image/*", className: classes.uploader, onChange: handleFileChange, multiple: true })] }) })] }) }));
};
