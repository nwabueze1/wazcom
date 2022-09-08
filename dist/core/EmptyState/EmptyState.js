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
    var classNames = _a.classNames, text = _a.text, image = _a.image, button = _a.button, className = _a.className;
    var classes = useEmptyStateStyles();
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsx("img", { src: image === null || image === void 0 ? void 0 : image.src, className: clx(classes.image, classNames === null || classNames === void 0 ? void 0 : classNames.image), alt: (_b = image === null || image === void 0 ? void 0 : image.alt) !== null && _b !== void 0 ? _b : "" }, void 0), _jsx("p", __assign({ className: clx(classes.text, classNames === null || classNames === void 0 ? void 0 : classNames.text) }, { children: text }), void 0), (button === null || button === void 0 ? void 0 : button.display) && (_jsx(Button, __assign({ className: "".concat(classes.btn, " ").concat(classNames === null || classNames === void 0 ? void 0 : classNames.button), size: "small", onClick: function () {
                    var _a;
                    (_a = button === null || button === void 0 ? void 0 : button.handleClick) === null || _a === void 0 ? void 0 : _a.call(button);
                }, id: "button-selector" }, { children: (_c = button === null || button === void 0 ? void 0 : button.text) !== null && _c !== void 0 ? _c : text }), void 0))] }), void 0));
};
