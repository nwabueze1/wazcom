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
import { Button } from "@mui/material";
import { useImageUploadStyles } from "./styles";
import { AiFillCamera } from "react-icons/ai";
import { IsRequired } from "../Common/isRequired/isRequired";
export var ImageUpload = function (_a) {
    var props = _a.props, fileName = _a.fileName, handleFile = _a.handleFile, file = _a.file, error = _a.error;
    var id = Math.random();
    var classes = useImageUploadStyles(props);
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: classes.wrapper }, { children: [_jsxs(Button, __assign({ variant: "contained", component: "label", className: classes.uploadButton }, { children: [_jsx("input", { id: "contained-button-file", type: "file", accept: "image/*", hidden: true, name: "image_url", onChange: handleFile }, void 0), _jsx("div", __assign({ className: classes.display }, { children: file ? (_jsx("div", { id: "image" + id, style: {
                                    backgroundImage: "url(" + (typeof file === "string"
                                        ? file
                                        : (window.URL || window.webkitURL).createObjectURL(file)) + ")",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }, className: classes.uploadedImage }, void 0)) : (_jsx("div", __assign({ className: classes.placeholder }, { children: _jsx(AiFillCamera, { className: classes.placeholderImage }, void 0) }), void 0)) }), void 0)] }), void 0), error ? (_jsx(IsRequired, { error: error, name: "The image" }, void 0)) : (_jsx(_Fragment, { children: fileName ? (_jsxs("div", __assign({ className: classes.imgNameContainer }, { children: [_jsx("p", __assign({ className: classes.imgName }, { children: fileName }), void 0), _jsx("span", __assign({ className: classes.changeButton }, { children: "Click on image to change image" }), void 0)] }), void 0)) : null }, void 0))] }), void 0) }), void 0));
};
