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
import { useTagStyles } from "./styles";
import clx from "classnames";
import { capitalize } from "./helpers";
import { FaTimes } from "react-icons/fa";
export var Tag = function (_a) {
    var name = _a.name, status = _a.status, handleRemove = _a.handleRemove, className = _a.className;
    var classes = useTagStyles();
    return (_jsxs("div", __assign({ className: clx(classes.root, className, status ? classes.tagActive : classes.tagInactive, handleRemove && classes.taggable) }, { children: [_jsx("p", { children: capitalize(name) }), handleRemove && (_jsx("p", __assign({ className: classes.tagIconParent, onClick: handleRemove }, { children: _jsx(FaTimes, {}) })))] })));
};
