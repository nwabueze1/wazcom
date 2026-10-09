import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEmptyStateStyles } from "./styles";
import { Button } from "..";
import clx from "classnames";
export var EmptyState = function (_a) {
    var _b, _c;
    var classNames = _a.classNames, text = _a.text, header = _a.header, image = _a.image, button = _a.button, className = _a.className;
    var classes = useEmptyStateStyles();
    return (_jsxs("div", { className: clx(classes.root, className), children: [_jsx("img", { src: image === null || image === void 0 ? void 0 : image.src, className: clx(classes.image, classNames === null || classNames === void 0 ? void 0 : classNames.image), alt: (_b = image === null || image === void 0 ? void 0 : image.alt) !== null && _b !== void 0 ? _b : "" }), _jsx("p", { className: clx(classes.header, classNames === null || classNames === void 0 ? void 0 : classNames.header), children: header }), _jsx("p", { className: clx(classes.text, classNames === null || classNames === void 0 ? void 0 : classNames.text), children: text }), (button === null || button === void 0 ? void 0 : button.display) && (_jsx(Button, { className: "".concat(classes.btn, " ").concat(classNames === null || classNames === void 0 ? void 0 : classNames.button), size: "small", onClick: function () {
                    var _a;
                    (_a = button === null || button === void 0 ? void 0 : button.handleClick) === null || _a === void 0 ? void 0 : _a.call(button);
                }, children: (_c = button === null || button === void 0 ? void 0 : button.text) !== null && _c !== void 0 ? _c : text }))] }));
};
