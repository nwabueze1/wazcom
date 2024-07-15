import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal, Button } from "../";
import { FaTimes } from "react-icons/fa";
import clx from "classnames";
import { useConfirmationDialogStyles } from "./styles";
export var ConfirmationDialog = function (_a) {
    var title = _a.title, submitText = _a.submitText, cancelText = _a.cancelText, description = _a.description, isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, className = _a.className, classNames = _a.classNames;
    var classes = useConfirmationDialogStyles();
    return (_jsx(Modal, { open: isOpen, handleClose: onClose, className: classes.root, children: _jsxs("div", { className: clx(classes.container, className), children: [_jsxs("div", { className: classes.header, children: [_jsx("h1", { className: clx(classes.title, classNames === null || classNames === void 0 ? void 0 : classNames.titleClass), children: title }), _jsx(FaTimes, { className: classes.icon, onClick: onClose })] }), _jsx("div", { className: classes.body, children: _jsx("p", { className: classes.description, children: description }) }), _jsxs("div", { className: classes.buttons, children: [_jsx(Button, { variant: "contained", className: clx(classes.button, classNames === null || classNames === void 0 ? void 0 : classNames.buttonClass), onClick: onSubmit, children: submitText }), _jsx(Button, { variant: "outlined", className: clx(classes.button, classNames === null || classNames === void 0 ? void 0 : classNames.buttonClass), onClick: onClose, children: cancelText })] })] }) }));
};
