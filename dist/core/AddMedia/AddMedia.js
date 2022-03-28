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
import { CloseSharp } from "@mui/icons-material";
import { Button } from "../Button";
import { Box } from "@mui/material";
import { ModalUnstyled } from "@mui/base";
export var AddMedia = function (_a) {
    var handleFilesSelection = _a.handleFilesSelection, handleOpenMedia = _a.handleOpenMedia, handleCloseMedia = _a.handleCloseMedia;
    var classes = useAddMediaStyles();
    var handleOpen = function () { return handleCloseMedia(true); };
    var handleClose = function () { return handleCloseMedia(false); };
    return (_jsxs("div", { children: [_jsx(Button, __assign({ color: "primary", onClick: handleOpen }, { children: "Add New" }), void 0), _jsx(ModalUnstyled, __assign({ className: classes.modalBox, open: handleOpenMedia, onClose: handleClose }, { children: _jsxs(Box, __assign({ className: classes.box }, { children: [_jsxs("div", __assign({ className: classes.dialogueHeader }, { children: [_jsx("p", { children: "Upload your files" }, void 0), _jsx(CloseSharp, { onClick: handleClose, className: classes.close }, void 0)] }), void 0), _jsx("hr", {}, void 0), _jsxs("div", __assign({ className: classes.content }, { children: [_jsx("p", __assign({ className: classes.text }, { children: "Drop file to add to media library" }), void 0), _jsx("p", __assign({ className: classes.or }, { children: "or" }), void 0), _jsx("div", __assign({ className: classes.btn }, { children: _jsx(Button, __assign({ color: "primary", onClick: handleFilesSelection }, { children: "choose file" }), void 0) }), void 0)] }), void 0)] }), void 0) }), void 0)] }, void 0));
};
