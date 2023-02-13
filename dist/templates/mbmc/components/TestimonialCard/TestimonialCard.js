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
import { handleElementClick } from "../../utilities";
export var TestimonialCard = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, handleClick = _a.handleClick, activeElement = _a.activeElement, parentKey = _a.parentKey, text = _a.text, name = _a.name, type = _a.type;
    var classes = useTestimonialCardPropsStyles();
    return (_jsx("div", __assign({ className: clsx(classes.root, classes.visible) }, { children: _jsxs("div", __assign({ className: classes.content }, { children: [_jsxs("p", __assign({ className: clsx(classes.description, activeElement === parentKey + ".content" && classes.cardActiveElement), onClick: function () { return handleElementClick(mode, parentKey + ".content", handleClick); } }, { children: [text, " "] })), _jsxs("div", { children: [_jsx("p", __assign({ className: clsx(classes.name, activeElement === parentKey + ".name" && classes.cardActiveElement), onClick: function () { return handleElementClick(mode, parentKey + ".name", handleClick); } }, { children: name })), _jsx("p", __assign({ className: clsx(classes.type, activeElement === parentKey + ".role" && classes.cardActiveElement), onClick: function () { return handleElementClick(mode, parentKey + ".role", handleClick); } }, { children: type }))] })] })) })));
};
