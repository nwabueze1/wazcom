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
import { Modal } from "../Modal";
import { useDialogStyles } from "./styles";
export var Dialog = function (_a) {
    var _b = _a.open, open = _b === void 0 ? false : _b, handleClose = _a.handleClose, children = _a.children;
    var classes = useDialogStyles();
    return (_jsx(Modal, __assign({ open: open, handleClose: handleClose }, { children: _jsx("div", __assign({ className: classes.root }, { children: children })) })));
};
