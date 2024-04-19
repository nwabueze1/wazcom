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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import clx from "classnames";
import { useWrapperStyles } from "./styles";
export var Wrapper = function (_a) {
    var children = _a.children, title = _a.title, description = _a.description, className = _a.className;
    var classes = useWrapperStyles();
    return (_jsx("div", __assign({ className: clx(classes.root, className) }, { children: _jsxs("div", __assign({ className: classes.container }, { children: [_jsxs("div", __assign({ className: classes.header }, { children: [_jsxs("h1", __assign({ className: classes.title }, { children: [title, " "] })), _jsx("div", __assign({ className: classes.description }, { children: _jsx("p", __assign({ className: classes.descriptionText }, { children: description })) }))] })), children] })) })));
};
