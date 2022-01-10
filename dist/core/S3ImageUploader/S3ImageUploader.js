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
import { ImageUploadInput } from "../../io/ImageUploadInput";
import { validateImg } from "../../helpers/imageValidator";
import { useCallback, useState } from "react";
import { useMenuStyles } from "./styles";
export var S3ImageUploader = function () {
    var classes = useMenuStyles();
    var _a = useState(), file = _a[0], setFile = _a[1];
    var handleFile = useCallback(function (e) {
        var _a;
        var file = (_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.files[0];
        if (file) {
            if (validateImg(file)) {
                setFile(file);
            }
        }
    }, []);
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsx(ImageUploadInput, { file: file === null || file === void 0 ? void 0 : file["url"], fileName: file === null || file === void 0 ? void 0 : file["name"], handleFile: handleFile }, void 0) }), void 0));
};
