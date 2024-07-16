import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { uploadStyles } from "./styles";
import { Typography } from "@mui/material";
import { FaRegFileAlt } from "react-icons/fa";
import clx from "classnames";
export var Upload = function (_a) {
    var className = _a.className, width = _a.width;
    var classes = uploadStyles({ width: width });
    var loading = false;
    return (_jsx("div", { className: clx(classes.root, className), children: _jsxs("div", { children: [_jsx(Typography, { className: classes.upload, variant: "h5", children: "Upload File" }), _jsx("div", { className: classes.child, children: loading ? (_jsx("div", { className: classes.bar, children: _jsx("div", { className: classes.outerbox, children: _jsx("div", { className: classes.innerbox, children: width }) }) })) : (_jsxs(_Fragment, { children: [_jsx(FaRegFileAlt, { className: classes.uploadlogo }), _jsx("div", { className: classes.text, children: _jsxs(Typography, { variant: "h6", children: ["Drag and drop here", _jsx("br", {}), " or ", _jsx("br", {}), _jsx("input", { type: "file", id: "fileInput", style: { display: "none" } }), _jsx("label", { htmlFor: "fileInput", className: classes.upload, children: "Browse" })] }) })] })) })] }) }));
};
