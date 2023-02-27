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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import clx from "classnames";
import { BsCheckCircle } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNotificationStyles } from "./style";
export function Notification(_a) {
    var _b = _a.list, list = _b === void 0 ? [] : _b, position = _a.position;
    var _c = __read(useState(list), 2), toasts = _c[0], setToasts = _c[1];
    var classes = useNotificationStyles();
    var _position = position === 'top-right' ? classes.topRight :
        position === 'bottom-right' ? classes.bottomRight :
            position === 'top-left' ? classes.topLeft :
                position === 'bottom-left' ? classes.bottomLeft : '';
    // useEffect(() => {
    //     setToasts([...list]);
    // }, [list]);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (autoDelete && list.length && toasts.length) {
    //             onDeleteToast(list[0].id);
    //         }
    //     }, duration);
    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, [list, autoDelete, duration, toasts]);
    var onDeleteToast = function (id) {
        var listItemIndex = toasts.findIndex(function (e) { return e.id === id; });
        var toastListItem = list.findIndex(function (e) { return e.id === id; });
        toasts.splice(listItemIndex, 1);
        list.splice(toastListItem, 1);
        setToasts(__spreadArray([], __read(toasts), false));
    };
    return (_jsx(_Fragment, { children: _jsx("div", __assign({ className: clx(classes.notificationContainer, _position) }, { children: toasts === null || toasts === void 0 ? void 0 : toasts.map(function (toast) { return (_jsx("div", __assign({ className: clx(classes.root, _position, toast.status === 'success' ? classes.success :
                    toast.status === 'warning' ? classes.warning :
                        toast.status === 'info' ? classes.info :
                            toast.status === 'error' ? classes.error : '') }, { children: _jsxs("div", __assign({ className: classes.container }, { children: [_jsxs("div", __assign({ className: classes.main }, { children: [_jsxs("div", __assign({ className: classes.header }, { children: [_jsx(NotificationIcon, { status: toast.status }), _jsx("h3", __assign({ className: classes.title }, { children: toast.title }))] })), _jsx("div", __assign({ className: classes.closeContainer, onClick: function () { return onDeleteToast(toast.id); } }, { children: _jsx(GrFormClose, { width: 24, height: 24 }) }))] })), toast.message && (_jsx("div", __assign({ className: classes.message }, { children: toast.message })))] })) }), toast.id)); }) })) }));
}
;
var NotificationIcon = function (_a) {
    var status = _a.status;
    var classes = useNotificationStyles();
    return (_jsxs(_Fragment, { children: [status === 'success' && _jsx(BsCheckCircle, { className: clx(classes.icon, classes.success) }), status === 'warning' && _jsx(RiErrorWarningLine, { className: clx(classes.icon, classes.warning) }), status === 'info' && _jsx(AiOutlineInfoCircle, { className: clx(classes.icon, classes.info) }), status === 'error' && _jsx(AiOutlineInfoCircle, { className: clx(classes.icon, classes.error) })] }));
};
