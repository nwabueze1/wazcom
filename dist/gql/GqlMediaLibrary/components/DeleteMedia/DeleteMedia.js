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
import { Modal, Fade, Backdrop } from "@mui/material";
import { useDeleteMediaStyles } from "./styles";
import { FaTimes } from "react-icons/fa";
import { Button } from "../../../../core";
export var DeleteMedia = function (_a) {
    var display = _a.display, loading = _a.loading, handleClose = _a.handleClose, handleDelete = _a.handleDelete;
    var classes = useDeleteMediaStyles();
    return (_jsx(Modal, __assign({ open: display, BackdropProps: {
            timeout: 500,
        }, closeAfterTransition: true, onClose: handleClose, onBackdropClick: function (e) { return e.stopPropagation(); }, className: classes.modal, BackdropComponent: Backdrop, "aria-labelledby": "transition-modal-title", "aria-describedby": "transition-modal-description" }, { children: _jsx(Fade, __assign({ in: display, className: classes.wrapper }, { children: _jsxs("div", { children: [_jsxs("div", __assign({ className: classes.deleteHeading }, { children: [_jsx("p", __assign({ className: classes.deleteHeadingText }, { children: "Remove Image?" })), _jsx(FaTimes, { onClick: handleClose, className: classes.deleteHeadingIcon })] })), _jsxs("div", __assign({ className: classes.deleteContent }, { children: [_jsx("p", __assign({ className: classes.deleteContentText }, { children: "Are you sure you want to delete this image?" })), _jsxs("div", __assign({ className: classes.deleteActions }, { children: [_jsx(Button, __assign({ onClick: handleDelete, loading: loading }, { children: "Delete" })), _jsx(Button, __assign({ onClick: handleClose }, { children: "Cancel" }))] }))] }))] }) })) })));
};
