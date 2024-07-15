import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAddMediaStyles } from "./styles";
import { Button } from "../../../../core";
import { Modal } from "@mui/material";
import { UploadDialog } from "./UploadDialog";
import clx from "classnames";
export var AddMedia = function (_a) {
    var handleFilesSelection = _a.handleFilesSelection, handleOpenMedia = _a.handleOpenMedia, handleCloseMedia = _a.handleCloseMedia, viewOnly = _a.viewOnly, handleMediaAction = _a.handleMediaAction, className = _a.className, buttonText = _a.buttonText;
    var classes = useAddMediaStyles();
    var handleOpen = function () { return handleCloseMedia(true); };
    var handleClose = function () { return handleCloseMedia(false); };
    return (_jsxs("div", { children: [!viewOnly && (_jsx(Button, { onClick: handleOpen, className: clx(classes.btn, className), children: buttonText })), _jsx(Modal, { className: classes.modalBox, open: handleOpenMedia, onClose: handleClose, children: _jsx(UploadDialog, { handleCloseMedia: handleCloseMedia, handleFilesSelection: handleFilesSelection, handleMediaAction: handleMediaAction }) })] }));
};
