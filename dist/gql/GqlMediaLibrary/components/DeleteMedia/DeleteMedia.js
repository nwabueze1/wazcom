import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal, Fade, Backdrop } from "@mui/material";
import { useDeleteMediaStyles } from "./styles";
import { FaTimes } from "react-icons/fa";
import { Button } from "../../../../core";
export var DeleteMedia = function (_a) {
    var display = _a.display, loading = _a.loading, handleClose = _a.handleClose, handleDelete = _a.handleDelete, media = _a.media;
    var classes = useDeleteMediaStyles();
    return (_jsx(Modal, { open: display, BackdropProps: {
            timeout: 500,
        }, closeAfterTransition: true, onClose: handleClose, className: classes.modal, BackdropComponent: Backdrop, "aria-labelledby": "transition-modal-title", "aria-describedby": "transition-modal-description", children: _jsx(Fade, { in: display, className: classes.wrapper, children: _jsxs("div", { children: [_jsxs("div", { className: classes.deleteHeading, children: [_jsx("p", { className: classes.deleteHeadingText, children: "Remove Image?" }), _jsx(FaTimes, { onClick: handleClose, className: classes.deleteHeadingIcon })] }), _jsxs("div", { className: classes.deleteContent, children: [_jsxs("p", { className: classes.deleteContentText, children: ["Are you sure you want to delete ", media === null || media === void 0 ? void 0 : media.alternative_text] }), _jsx("img", { src: media === null || media === void 0 ? void 0 : media.url, alt: media === null || media === void 0 ? void 0 : media.title, className: classes.thumbnailImg }), _jsxs("div", { className: classes.deleteActions, children: [_jsx(Button, { onClick: handleClose, className: classes.cancelBtn, children: "Cancel" }), _jsx(Button, { onClick: handleDelete, isLoading: loading, className: classes.deleteBtn, children: "Delete" })] })] })] }) }) }));
};
