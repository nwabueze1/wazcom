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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useModalStyles } from "./styles";
import clx from "classnames";
import CloseIcon from "./CloseIcon";
export var FormBuilderModal = function (_a) {
    var dialogType = _a.dialogType, embedUrl = _a.embedUrl, setEmbedUrl = _a.setEmbedUrl, handleDialogClose = _a.handleDialogClose;
    var classes = useModalStyles();
    var _b = __read(useState(''), 2), embedType = _b[0], setEmbedType = _b[1];
    var _c = __read(useState(''), 2), embedUrlText = _c[0], setEmbedUrlText = _c[1];
    var handleSelectChange = function (e) {
        var value = e.target.value;
        setEmbedType(value);
    };
    var handleEmbed = function (e) {
    };
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: clx(classes.modalContent) }, { children: [_jsxs("div", __assign({ className: classes.modalHeader }, { children: [_jsx("span", __assign({ className: classes.modalHeaderText }, { children: "Embed" }), void 0), _jsx("span", __assign({ className: classes.closeModal, onClick: function () { return handleDialogClose(); } }, { children: _jsx(CloseIcon, {}, void 0) }), void 0)] }), void 0), _jsxs("div", { children: [_jsx("div", { className: classes.sourceProvider }, void 0), _jsxs("div", __assign({ className: classes.modalButtons }, { children: [_jsx("button", __assign({ className: classes.embedButton, onClick: function () { return handleEmbed(); } }, { children: "Embed" }), void 0), _jsx("button", __assign({ className: classes.cancelButton, onClick: function () { return handleDialogClose(); } }, { children: "Cancel" }), void 0)] }), void 0)] }, void 0)] }), void 0) }), void 0));
};
