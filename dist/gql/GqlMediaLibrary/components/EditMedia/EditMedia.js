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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
import { useCallback, useEffect, useState, useRef } from "react";
import { useEditMediaStyles } from "./styles";
import { TextInput } from "../../../../io";
import { Button, Tooltip } from "../../../../core";
import { BsQuestionCircleFill } from "react-icons/bs";
export var EditMedia = function (_a) {
    var _b, _c, _d;
    var _e = _a.loading, loading = _e === void 0 ? true : _e, image = _a.image, handleEdit = _a.handleEdit, handleClose = _a.handleClose;
    var classes = useEditMediaStyles();
    var ref = useRef();
    var _f = __read(useState({
        title: image instanceof File ? image.name : (_b = image.title) !== null && _b !== void 0 ? _b : "",
        alternative_text: image instanceof File ? "" : (_c = image.alternative_text) !== null && _c !== void 0 ? _c : "",
        caption: (_d = image.caption) !== null && _d !== void 0 ? _d : "",
    }), 2), formData = _f[0], setFormData = _f[1];
    var removeExtension = function (filename) {
        return filename.replace(/\.[^/.]+$/, "");
    };
    useEffect(function () {
        var _a, _b, _c;
        var formData = {
            title: image instanceof File ? removeExtension(image.name) : (_a = image.title) !== null && _a !== void 0 ? _a : "",
            alternative_text: image instanceof File ? "" : (_b = image.alternative_text) !== null && _b !== void 0 ? _b : "",
            caption: (_c = image.caption) !== null && _c !== void 0 ? _c : "",
        };
        setFormData(formData);
    }, [image]);
    var handleChange = useCallback(function (_a) {
        var _b;
        var name = _a.name, value = _a.value;
        setFormData(__assign(__assign({}, formData), (_b = {}, _b[name] = value, _b)));
    }, [formData]);
    var displayFields = function () {
        return Object.entries(formData).map(function (_a, index) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var label = (_jsxs("div", __assign({ className: classes.placeholderContainer }, { children: [key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " "), index == 1 ? (_jsx(Tooltip, __assign({ content: "Describe the image" }, { children: _jsx("p", { children: _jsx(BsQuestionCircleFill, { className: classes.tooltipIcon }) }) }))) : ("")] })));
            return (_jsx("div", __assign({ className: classes.formControl }, { children: _jsx(TextInput, { label: label, value: value, name: key, onChange: handleChange }) }), index));
        });
    };
    var handleSubmit = useCallback(function () {
        var alternative_text = formData.alternative_text, rest = __rest(formData, ["alternative_text"]);
        var placeholderUpdate = __assign(__assign({}, rest), { alternative_text: alternative_text });
        var update = __assign({}, placeholderUpdate);
        if (!(image instanceof File)) {
            update.uuid = image.uuid;
        }
        handleEdit(__assign({}, update));
    }, [formData, image]);
    var displayImage = useCallback(function () {
        if (!(image instanceof File))
            return image.url;
        var reader = new FileReader();
        reader.onload = function (e) {
            if (ref.current) {
                ref.current.setAttribute("src", e.target.result);
            }
        };
        reader.readAsDataURL(image);
        return undefined;
    }, [image]);
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx("img", { src: displayImage(), ref: ref, className: classes.image, alt: "" }), _jsxs("div", __assign({ className: classes.form }, { children: [_jsx("p", __assign({ className: classes.tab }, { children: "Image Properties" })), displayFields(), _jsxs("div", __assign({ className: classes.formButtons }, { children: [_jsx(Button, __assign({ onClick: handleClose, className: classes.buttonSecondary }, { children: "Cancel" })), _jsx(Button, __assign({ onClick: handleSubmit, isLoading: loading, className: classes.buttonPrimary }, { children: "Save" }))] }))] }))] })));
};
