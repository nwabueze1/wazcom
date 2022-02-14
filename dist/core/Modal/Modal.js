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
import { jsx as _jsx } from "react/jsx-runtime";
import { Fade, Modal as MuiModal, Backdrop } from "@mui/material";
export var Modal = function (_a) {
    var className = _a.className, open = _a.open, children = _a.children, handleClose = _a.handleClose;
    return (_jsx(MuiModal, __assign({ open: open, BackdropProps: {
            timeout: 500,
        }, closeAfterTransition: true, onClose: function () {
            handleClose === null || handleClose === void 0 ? void 0 : handleClose();
        }, onBackdropClick: function (e) { return e.stopPropagation(); }, className: className, BackdropComponent: Backdrop, "aria-labelledby": "transition-modal-title", "aria-describedby": "transition-modal-description" }, { children: _jsx(Fade, __assign({ in: open }, { children: children }), void 0) }), void 0));
};
