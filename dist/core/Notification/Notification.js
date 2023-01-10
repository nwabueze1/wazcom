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
import { useNotificationStyles } from "./style";
import clx from "classnames";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
// import Icon from "../../images/Vector.png";
var getStatusClassName = function (classes, status) {
    switch (status) {
        case "success":
            return classes.success;
        case "failed":
            return classes.failed;
        case "plain":
            return classes.plain;
        default:
            return classes.success;
    }
};
export var Notification = function (_a) {
    var className = _a.className, status = _a.status, title = _a.title, message = _a.message, onClose = _a.onClose;
    var classes = useNotificationStyles();
    var StatusClassName = getStatusClassName(classes, status);
    return (_jsx("div", __assign({ className: clx(classes.card, className) }, { children: _jsxs("div", __assign({ className: clx(classes.notificationCard, status !== "success" && classes.plainBg) }, { children: [_jsxs("div", __assign({ className: clx(StatusClassName, classes.notificationHead) }, { children: [_jsx(Typography, __assign({ className: classes.report }, { children: title })), _jsx(CloseIcon, { onClick: function () {
                                onClose === null || onClose === void 0 ? void 0 : onClose();
                            }, className: classes.cancel })] })), message && _jsx(Typography, __assign({ className: classes.notificationText }, { children: message }))] })) })));
};
