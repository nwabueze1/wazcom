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
import { Modal, TextField, Button } from "@mui/material";
import { useEditImageDialogStyles } from "./styles";
export var EditImageDialog = function (_a) {
    var image = _a.image, handleEditImage = _a.handleEditImage, handleDialogClose = _a.handleDialogClose, handleInsertImage = _a.handleInsertImage;
    var classes = useEditImageDialogStyles();
    return (_jsx(Modal, __assign({ open: true }, { children: _jsxs("div", __assign({ className: classes.editMediaModal }, { children: [_jsx("p", __assign({ className: classes.editImageHeader }, { children: "Edit Image" })), _jsxs("div", __assign({ className: classes.inputContainer }, { children: [_jsx(TextField, { label: "Title", variant: "outlined", size: "small", className: classes.editMediaInput, value: image.title, type: "text", placeholder: "Image Title", onChange: function (event) { return handleEditImage("title", event.target.value); } }), _jsx(TextField, { label: "Url", variant: "outlined", size: "small", className: classes.editMediaInput, value: image.url, type: "text", placeholder: "Image URL", onChange: function (event) { return handleEditImage("url", event.target.value); } }), _jsx("p", __assign({ className: classes.deviceHeader }, { children: "Desktop" })), _jsxs("div", __assign({ className: classes.editMediaSizeContainer }, { children: [_jsx(TextField, { label: "Width", variant: "outlined", size: "small", className: classes.editMediaSizeInput, value: image.width["desktop"], type: "number", placeholder: "Image Width", onChange: function (event) {
                                        return handleEditImage("width", event.target.value, "desktop");
                                    } }), _jsx(TextField, { label: "Height", variant: "outlined", size: "small", className: classes.editMediaSizeInput, value: image.height["desktop"], type: "number", placeholder: "Image Height", onChange: function (event) {
                                        return handleEditImage("height", event.target.value, "desktop");
                                    } })] })), _jsx("p", __assign({ className: classes.deviceHeader }, { children: "Tablet" })), _jsxs("div", __assign({ className: classes.editMediaSizeContainer }, { children: [_jsx(TextField, { label: "Width", variant: "outlined", size: "small", className: classes.editMediaSizeInput, value: image.width["tablet"], type: "number", placeholder: "Image Width", onChange: function (event) {
                                        return handleEditImage("width", event.target.value, "tablet");
                                    } }), _jsx(TextField, { label: "Height", variant: "outlined", size: "small", className: classes.editMediaSizeInput, value: image.height["tablet"], type: "number", placeholder: "Image Height", onChange: function (event) {
                                        return handleEditImage("height", event.target.value, "tablet");
                                    } })] })), _jsx("p", __assign({ className: classes.deviceHeader }, { children: "Mobile" })), _jsxs("div", __assign({ className: classes.editMediaSizeContainer }, { children: [_jsx(TextField, { label: "Width", variant: "outlined", size: "small", className: classes.editMediaSizeInput, value: image.width["mobile"], type: "number", placeholder: "Image Width", onChange: function (event) {
                                        return handleEditImage("width", event.target.value, "mobile");
                                    } }), _jsx(TextField, { label: "Height", variant: "outlined", size: "small", className: classes.editMediaSizeInput, value: image.height["mobile"], type: "number", placeholder: "Image Height", onChange: function (event) {
                                        return handleEditImage("height", event.target.value, "mobile");
                                    } })] }))] })), _jsxs("div", __assign({ className: classes.editButtonContainer }, { children: [_jsx(Button, __assign({ onClick: handleDialogClose, className: classes.editMediaCancelBtn }, { children: "Cancel" })), _jsx(Button, __assign({ onClick: handleInsertImage, className: classes.editMediaSubmitBtn }, { children: "Submit" }))] }))] })) })));
};
