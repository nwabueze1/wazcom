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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable react/prop-types */
import { Modal, TextField, Button } from "@mui/material";
import { useEditImageDialogStyles } from "./styles";
import { desktopFields, tabletFields, mobileFields } from "./data";
export var EditImageDialog = function (_a) {
    var image = _a.image, handleEditImage = _a.handleEditImage, handleDialogClose = _a.handleDialogClose, handleInsertImage = _a.handleInsertImage;
    var classes = useEditImageDialogStyles();
    var renderFields = function (image, handleEditImage, fields) {
        return fields.map(function (_a) {
            var placeholder = _a.placeholder, device = _a.device, label = _a.label;
            return (_jsx(_Fragment, { children: _jsx(TextField, { label: label, variant: "outlined", size: "small", className: classes.editMediaSizeInput, value: image[label][device], type: "number", placeholder: placeholder, onChange: function (event) { return handleEditImage(label, event.target.value, device); } }) }));
        });
    };
    return (_jsx(Modal, __assign({ open: true }, { children: _jsxs("div", __assign({ className: classes.editMediaModal }, { children: [_jsx("p", __assign({ className: classes.editImageHeader }, { children: "Edit Image" })), _jsxs("div", __assign({ className: classes.inputContainer }, { children: [_jsx(TextField, { label: "Title", variant: "outlined", size: "small", className: classes.editMediaInput, value: image.title, type: "text", placeholder: "Image Title", onChange: function (event) { return handleEditImage("title", event.target.value); } }), _jsx(TextField, { label: "Url", variant: "outlined", size: "small", className: classes.editMediaInput, value: image.url, type: "text", placeholder: "Image URL", onChange: function (event) { return handleEditImage("url", event.target.value); } }), _jsx("p", __assign({ className: classes.deviceHeader }, { children: "Desktop" })), _jsx("div", __assign({ className: classes.editMediaSizeContainer }, { children: renderFields(image, handleEditImage, desktopFields) })), _jsx("p", __assign({ className: classes.deviceHeader }, { children: "Tablet" })), _jsx("div", __assign({ className: classes.editMediaSizeContainer }, { children: renderFields(image, handleEditImage, tabletFields) })), _jsx("p", __assign({ className: classes.deviceHeader }, { children: "Mobile" })), _jsx("div", __assign({ className: classes.editMediaSizeContainer }, { children: renderFields(image, handleEditImage, mobileFields) }))] })), _jsxs("div", __assign({ className: classes.editButtonContainer }, { children: [_jsx(Button, __assign({ onClick: handleDialogClose, className: classes.editMediaCancelBtn }, { children: "Cancel" })), _jsx(Button, __assign({ onClick: handleInsertImage, className: classes.editMediaSubmitBtn }, { children: "Submit" }))] }))] })) })));
};
