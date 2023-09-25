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
import { useAddMediaStyles } from "./styles";
import { Button } from "../../../../core";
import { Modal } from "@mui/material";
import { UploadDialogue } from "./UploadDialogue";
export var AddMedia = function (_a) {
    var handleFilesSelection = _a.handleFilesSelection, handleOpenMedia = _a.handleOpenMedia, handleCloseMedia = _a.handleCloseMedia, viewOnly = _a.viewOnly;
    var classes = useAddMediaStyles();
    var handleOpen = function () { return handleCloseMedia(true); };
    var handleClose = function () { return handleCloseMedia(false); };
    return (_jsxs("div", { children: [!viewOnly && _jsx(Button, __assign({ onClick: handleOpen }, { children: "Add New" })), _jsx(Modal, __assign({ className: classes.modalBox, open: handleOpenMedia, onClose: handleClose }, { children: _jsx(UploadDialogue, { handleCloseMedia: handleCloseMedia, handleFilesSelection: handleFilesSelection }) }))] }));
};
