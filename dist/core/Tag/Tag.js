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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useTagStyles } from "./styles";
import clx from "classnames";
import { capitalize } from "./helpers";
import { FaTimes } from "react-icons/fa";
export var Tag = function (_a) {
    var name = _a.name, status = _a.status, _b = _a.isDismissable, isDismissable = _b === void 0 ? false : _b, classname = _a.classname;
    var classes = useTagStyles();
    var _c = __read(useState(true), 2), showTag = _c[0], setShowTag = _c[1];
    var removeTag = function () {
        if (!isDismissable)
            return;
        setShowTag(false);
    };
    return (_jsx(_Fragment, { children: showTag && (_jsxs("div", __assign({ className: clx(classes.root, classname, status ? classes.tagActive : classes.tagInactive, isDismissable && classes.taggable) }, { children: [_jsx("p", { children: capitalize(name !== null && name !== void 0 ? name : "") }), isDismissable && (_jsx("p", __assign({ className: classes.tagIconParent, onClick: removeTag }, { children: _jsx(FaTimes, {}) })))] }))) }));
};
