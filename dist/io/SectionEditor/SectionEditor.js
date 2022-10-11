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
import { useEffect, useState } from "react";
import { useDynamicInputStyles } from "./styles";
import clx from "classnames";
import { EditableTextInput } from "../../io/EditableTextInput";
export var SectionEditor = function (_a) {
    var title = _a.title, description = _a.description, handleSetSection = _a.handleSetSection, className = _a.className;
    var classes = useDynamicInputStyles();
    var _b = __read(useState({
        title: title !== null && title !== void 0 ? title : "Title",
        description: description !== null && description !== void 0 ? description : "description (optional)",
    }), 2), section = _b[0], setSection = _b[1];
    useEffect(function () {
        handleSetSection === null || handleSetSection === void 0 ? void 0 : handleSetSection(section);
    }, [section]);
    var handleSetTitle = function (title) {
        setSection(function (section) { return (__assign(__assign({}, section), { title: title })); });
    };
    var handleSetDescription = function (description) {
        setSection(function (section) { return (__assign(__assign({}, section), { description: description })); });
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsx("div", __assign({ className: classes.sectionTitle }, { children: _jsx(EditableTextInput, { placeholder: section.title, setHtml: handleSetTitle, heading: true }, void 0) }), void 0), _jsx("div", __assign({ className: classes.sectionTitle }, { children: _jsx(EditableTextInput, { placeholder: section.description, setHtml: handleSetDescription }, void 0) }), void 0)] }), void 0));
};
