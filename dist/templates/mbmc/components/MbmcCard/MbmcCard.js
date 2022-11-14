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
import { useMbmcCardStyles } from "./styles";
import clsx from "clsx";
import { menuImagePlaceholder } from "../../../../utilities/restaurant";
import { renderCtas, handleElementClick } from "../../utilities";
export var MbmcCard = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, activeElement = _a.activeElement, parentKey = _a.parentKey, heading = _a.heading, image = _a.image, description = _a.description, ctas = _a.ctas, scrollableParent = _a.scrollableParent, className = _a.className, classNames = _a.classNames, handleClick = _a.handleClick;
    var isOpen = true;
    var classes = useMbmcCardStyles({ isOpen: isOpen, scrollableParent: scrollableParent });
    return (_jsxs("div", __assign({ className: clsx(classes.root, classes.visible, className) }, { children: [_jsx("div", { className: classes.imageWrapper, style: {
                    backgroundImage: "url(".concat(image !== null && image !== void 0 ? image : menuImagePlaceholder, ")"),
                } }, void 0), _jsxs("div", __assign({ className: classes.content }, { children: [_jsxs("div", { children: [_jsx("p", __assign({ className: clsx(classes.heading, classNames === null || classNames === void 0 ? void 0 : classNames.heading, activeElement === parentKey + ".heading" && classes.cardActiveElement), onClick: function () {
                                    handleElementClick(mode, parentKey + ".heading", handleClick);
                                } }, { children: heading }), void 0), _jsx("p", __assign({ className: clsx(classes.description, classNames === null || classNames === void 0 ? void 0 : classNames.description, activeElement === parentKey + ".description" &&
                                    classes.cardActiveElement), onClick: function () {
                                    handleElementClick(mode, parentKey + ".description", handleClick);
                                } }, { children: description }), void 0)] }, void 0), _jsx("div", __assign({ className: classes.ctas }, { children: renderCtas(ctas !== null && ctas !== void 0 ? ctas : [], mode, parentKey !== null && parentKey !== void 0 ? parentKey : "", handleClick, activeElement) }), void 0)] }), void 0)] }), void 0));
};
