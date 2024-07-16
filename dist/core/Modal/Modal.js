import { jsx as _jsx } from "react/jsx-runtime";
import { Fade, Modal as MuiModal, Backdrop } from "@mui/material";
export var Modal = function (_a) {
    var className = _a.className, open = _a.open, children = _a.children, handleClose = _a.handleClose;
    return (_jsx(MuiModal, { open: open, BackdropProps: {
            timeout: 500,
        }, closeAfterTransition: true, onClose: function () {
            handleClose === null || handleClose === void 0 ? void 0 : handleClose();
        }, onBackdropClick: function (e) { return e.stopPropagation(); }, className: className, BackdropComponent: Backdrop, "aria-labelledby": "transition-modal-title", "aria-describedby": "transition-modal-description", children: _jsx(Fade, { in: open, children: children }) }));
};
