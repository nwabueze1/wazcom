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
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, createContext, useMemo } from "react";
import clx from "classnames";
import { useAlertStyles } from "./styles";
import { Button } from "../../core";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { generateUniqueId } from "helpers";
import { createPortal } from "react-dom";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaRegTimesCircle } from "react-icons/fa";
var defaultDuration = 5000;
export var AlertContext = createContext({
    success: function (_) { return undefined; },
    error: function (_) { return undefined; },
    warning: function (_) { return undefined; },
    info: function (_) { return undefined; },
});
export var AlertContextProvider = function (_a) {
    var children = _a.children;
    var classes = useAlertStyles();
    var _b = __read(useState({
        id: "",
        title: "",
        message: "",
        duration: defaultDuration,
        position: "top-right",
        status: "success",
    }), 2), currentToast = _b[0], setCurrentToast = _b[1];
    var _c = __read(useState([]), 2), toasts = _c[0], setToasts = _c[1];
    /* Setting an interval to delete the toast after the duration is over. */
    useEffect(function () {
        var interval;
        if (currentToast.duration > 0 && toasts.length > 0) {
            interval = setInterval(function () {
                if (toasts.length > 0) {
                    var id = toasts[0].id;
                    deleteToast(id);
                }
            }, currentToast.duration);
        }
        return function () {
            if (currentToast.duration > 0 && toasts.length > 0) {
                clearInterval(interval);
            }
        };
    }, [currentToast, toasts]);
    var deleteToast = function (id) {
        var newToasts = toasts.filter(function (item) { return item.id !== id; });
        setToasts(newToasts);
    };
    var memoValue = useMemo(function () {
        var success = function (_a) {
            var title = _a.title, _b = _a.position, position = _b === void 0 ? "top-right" : _b, _c = _a.duration, duration = _c === void 0 ? defaultDuration : _c, _d = _a.message, message = _d === void 0 ? "" : _d;
            var id = generateUniqueId("success");
            setToasts(function (toasts) { return __spreadArray(__spreadArray([], __read(toasts), false), [{ id: id, title: title, position: position, message: message, status: "success" }], false); });
            setCurrentToast(__assign(__assign({}, currentToast), { id: id, title: title, position: position, status: "success", message: message, duration: duration }));
        };
        var info = function (_a) {
            var title = _a.title, _b = _a.position, position = _b === void 0 ? "top-right" : _b, _c = _a.duration, duration = _c === void 0 ? defaultDuration : _c, _d = _a.message, message = _d === void 0 ? "" : _d;
            var id = generateUniqueId("info");
            setToasts(function (toasts) { return __spreadArray(__spreadArray([], __read(toasts), false), [{ id: id, title: title, position: position, message: message, status: "info" }], false); });
            setCurrentToast(__assign(__assign({}, currentToast), { id: id, title: title, position: position, status: "info", message: message, duration: duration }));
        };
        var warning = function (_a) {
            var title = _a.title, _b = _a.position, position = _b === void 0 ? "top-right" : _b, _c = _a.duration, duration = _c === void 0 ? defaultDuration : _c, _d = _a.message, message = _d === void 0 ? "" : _d;
            var id = generateUniqueId("warning");
            setToasts(function (toasts) { return __spreadArray(__spreadArray([], __read(toasts), false), [{ id: id, title: title, position: position, message: message, status: "warning" }], false); });
            setCurrentToast(__assign(__assign({}, currentToast), { id: id, title: title, position: position, status: "warning", message: message, duration: duration }));
        };
        var error = function (_a) {
            var title = _a.title, _b = _a.position, position = _b === void 0 ? "top-right" : _b, _c = _a.duration, duration = _c === void 0 ? defaultDuration : _c, _d = _a.message, message = _d === void 0 ? "" : _d;
            var id = generateUniqueId("error");
            setToasts(function (toasts) { return __spreadArray(__spreadArray([], __read(toasts), false), [{ id: id, title: title, position: position, message: message, status: "error" }], false); });
            setCurrentToast(__assign(__assign({}, currentToast), { id: id, title: title, position: position, status: "error", message: message, duration: duration }));
        };
        return { success: success, error: error, info: info, warning: warning };
    }, [currentToast]);
    var renderToastComponent = function () {
        return (_jsx(_Fragment, { children: createPortal(_jsx("div", __assign({ className: clx("".concat(classes.alertContainer, " ").concat(currentToast.position)) }, { children: toasts.map(function (item, index) { return (_jsxs("div", __assign({ className: clx("".concat(classes.alert, " ").concat(item.position, " ").concat(item.status)) }, { children: [_jsxs("div", __assign({ className: classes.header }, { children: [_jsxs("div", __assign({ className: clx(classes.alertTitle, "alert__title") }, { children: [_jsxs("span", __assign({ className: clx("".concat(classes.alertIcon, " ").concat(item.status)) }, { children: [item.status === "success" && _jsx(AiOutlineCheckCircle, {}), item.status === "warning" && _jsx(RiErrorWarningLine, {}), item.status === "error" && _jsx(FaRegTimesCircle, {}), item.status === "info" && _jsx(RiErrorWarningLine, {})] })), item.title] })), _jsx(Button, __assign({ className: clx(classes.button, "alert__close-button"), onClick: function () { return deleteToast(item.id); } }, { children: _jsx("span", { children: "\u00D7" }) }))] })), item.message && (_jsx("div", __assign({ className: clx(classes.alertMessage, "alert__message") }, { children: item.message })))] }), item.title + item.id + index)); }) })), document.body) }));
    };
    return (_jsxs(AlertContext.Provider, __assign({ value: memoValue }, { children: [children, renderToastComponent()] })));
};
