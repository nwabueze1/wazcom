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
import { useTestimonialCardPropsStyles } from "./styles";
import clsx from "clsx";
export var TestimonialCard = function (_a) {
    var text = _a.text, author = _a.author, type = _a.type;
    var classes = useTestimonialCardPropsStyles();
    return (_jsx("div", __assign({ className: clsx(classes.root, classes.visible) }, { children: _jsxs("div", __assign({ className: classes.content }, { children: [_jsxs("p", __assign({ className: classes.description }, { children: [text, " "] }), void 0), _jsxs("div", { children: [_jsx("p", __assign({ className: classes.author }, { children: author }), void 0), _jsx("p", __assign({ className: classes.type }, { children: type }), void 0)] }, void 0)] }), void 0) }), void 0));
};
