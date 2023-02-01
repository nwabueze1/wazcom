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
import { jsx as _jsx } from "react/jsx-runtime";
import clx from 'classnames';
import { useEffect, useState } from "react";
import { usePostTitleStyles } from './styles';
export var PosTitleInput = function (_a) {
    var handlePostTitle = _a.handlePostTitle, className = _a.className, label = _a.label, errors = _a.errors, helperText = _a.helperText, _b = _a.hideLabel, hideLabel = _b === void 0 ? false : _b, info = _a.info, name = _a.name, onChange = _a.onChange, required = _a.required, showCC = _a.showCC, _c = _a.type, type = _c === void 0 ? "text" : _c, props = __rest(_a, ["handlePostTitle", "className", "label", "errors", "helperText", "hideLabel", "info", "name", "onChange", "required", "showCC", "type"]);
    var classes = usePostTitleStyles();
    var _d = __read(useState(''), 2), title = _d[0], setTitle = _d[1];
    useEffect(function () {
        handlePostTitle(title);
    }, [title]);
    return (_jsx("div", __assign({ className: clx(classes.root) }, { children: _jsx("input", __assign({ type: type, className: clx(classes.input, errors && classes.error), value: title, onChange: function (e) { return setTitle(e.target.value); } }, props), void 0) }), void 0));
};
