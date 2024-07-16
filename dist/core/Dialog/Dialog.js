import { jsx as _jsx } from "react/jsx-runtime";
import { Modal } from "../Modal";
import { useDialogStyles } from "./styles";
export var Dialog = function (_a) {
    var _b = _a.open, open = _b === void 0 ? false : _b, handleClose = _a.handleClose, children = _a.children;
    var classes = useDialogStyles();
    return (_jsx(Modal, { open: open, handleClose: handleClose, children: _jsx("div", { className: classes.root, children: children }) }));
};
