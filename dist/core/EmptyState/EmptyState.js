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
import { useEmptyStateStyles } from "./styles";
import { Button } from "..";
import clx from "classnames";
export var EmptyState = function (_a) {
    var _b, _c;
    var className = _a.className, image = _a.image, text = _a.text, button = _a.button;
    var classes = useEmptyStateStyles();
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsx("img", { src: image === null || image === void 0 ? void 0 : image.src, className: classes.image, alt: (_b = image === null || image === void 0 ? void 0 : image.alt) !== null && _b !== void 0 ? _b : "" }, void 0), _jsx("p", __assign({ className: classes.text }, { children: text }), void 0), (button === null || button === void 0 ? void 0 : button.display) && (_jsx(Button, __assign({ className: classes.btn, size: "small", onClick: function () {
                    var _a;
                    (_a = button === null || button === void 0 ? void 0 : button.handleClick) === null || _a === void 0 ? void 0 : _a.call(button);
                } }, { children: (_c = button === null || button === void 0 ? void 0 : button.text) !== null && _c !== void 0 ? _c : text }), void 0))] }), void 0));
};
