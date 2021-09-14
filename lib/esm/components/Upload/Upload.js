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
import { uploadStyles } from "./styles";
import { Typography } from "@material-ui/core";
import { FaRegFileAlt } from "react-icons/fa";
import clx from "classnames";
export var Upload = function (_a) {
    var className = _a.className, width = _a.width;
    var classes = uploadStyles({ width: width });
    var loading = false;
    return (_jsx("div", __assign({ className: clx(className, classes.root) }, { children: _jsxs("div", { children: [_jsx(Typography, __assign({ className: classes.upload, variant: "h5" }, { children: "Upload File" }), void 0), _jsx("div", __assign({ className: classes.child }, { children: loading ? (_jsx("div", __assign({ className: classes.bar }, { children: _jsx("div", __assign({ className: classes.outerbox }, { children: _jsx("div", __assign({ className: classes.innerbox }, { children: width }), void 0) }), void 0) }), void 0)) : (_jsxs(_Fragment, { children: [_jsx(FaRegFileAlt, { className: classes.uploadlogo }, void 0), _jsx("div", __assign({ className: classes.text }, { children: _jsxs(Typography, __assign({ variant: "h6" }, { children: ["Drag and drop here", _jsx("br", {}, void 0), " or ", _jsx("br", {}, void 0), _jsx("input", { type: "file", id: "fileInput", style: { display: "none" } }, void 0), _jsx("label", __assign({ htmlFor: "fileInput", className: classes.upload }, { children: "Browse" }), void 0)] }), void 0) }), void 0)] }, void 0)) }), void 0)] }, void 0) }), void 0));
};
