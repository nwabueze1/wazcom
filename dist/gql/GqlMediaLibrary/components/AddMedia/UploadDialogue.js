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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useAddMediaStyles } from "./styles";
import { CloseSharp } from "@mui/icons-material";
import { Button } from "../../../../core/Button";
import { Box } from "@mui/material";
import clx from "classnames";
export var UploadDialogue = function (_a) {
    var className = _a.className, handleCloseMedia = _a.handleCloseMedia, handleFilesSelection = _a.handleFilesSelection, _b = _a.showHeader, showHeader = _b === void 0 ? true : _b;
    var classes = useAddMediaStyles();
    return (_jsxs(Box, __assign({ className: clx(className, classes.box) }, { children: [showHeader && (_jsxs(_Fragment, { children: [_jsxs("div", __assign({ className: classes.dialogueHeader }, { children: [_jsx("p", { children: "Upload your files" }, void 0), _jsx(CloseSharp, { onClick: function () { return handleCloseMedia; }, className: classes.close }, void 0)] }), void 0), _jsx("hr", {}, void 0)] }, void 0)), _jsxs("div", __assign({ className: classes.content }, { children: [_jsx("p", __assign({ className: classes.text }, { children: "Drop file to add to media library" }), void 0), _jsx("p", __assign({ className: classes.or }, { children: "or" }), void 0), _jsx("div", __assign({ className: classes.btn }, { children: _jsx(Button, __assign({ color: "primary", onClick: handleFilesSelection }, { children: "choose file" }), void 0) }), void 0)] }), void 0)] }), void 0));
};
