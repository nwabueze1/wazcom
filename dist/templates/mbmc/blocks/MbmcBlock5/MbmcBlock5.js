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
import { useMbmcBlock5Styles } from "./styles";
import { displayLogo, displaySections } from "../../../../templates/footers/helpers";
import clx from "classnames";
export var MbmcBlock5 = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, index = _a.index, _c = _a.activeElement, activeElement = _c === void 0 ? "" : _c, logo = _a.logo, handleClick = _a.handleClick, links = _a.links;
    var classes = useMbmcBlock5Styles();
    var handleFooterClick = function () {
        if (mode === "edit") {
            handleClick === null || handleClick === void 0 ? void 0 : handleClick("footer");
        }
    };
    var handleElementClick = function (element) {
        handleClick === null || handleClick === void 0 ? void 0 : handleClick(element);
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, activeElement.toLowerCase() === "footer" &&
            mode === "edit" &&
            classes.activeElement), onClick: handleFooterClick }, { children: [_jsx("div", __assign({ className: classes.mbmcContainer }, { children: _jsxs("div", __assign({ className: classes.footerContainer }, { children: [displayLogo(mode, classes, activeElement, handleElementClick, logo, !index && index !== 0 ? undefined : "".concat(String(index), ".logo")), displaySections(mode, classes, links, activeElement, handleElementClick, !index && index !== 0 ? undefined : "".concat(String(index), ".links."))] })) })), _jsx("div", __assign({ className: classes.footerNote }, { children: _jsx("p", __assign({ className: classes.footerNoteText }, { children: "2022 \u00A9 All rights reserved . Mrbaker & Mrs cook . Proudly created by Hivedeck" })) }))] })));
};
