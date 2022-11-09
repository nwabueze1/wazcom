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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMbmcBlock5Styles } from "./styles";
import { useState } from "react";
import { displayLogo, displaySections } from "../../../../templates/footers/helpers";
import clx from "classnames";
export var MbmcBlock5 = function (_a) {
    var mode = _a.mode, logo = _a.logo, handleClick = _a.handleClick, links = _a.links;
    var _b = __read(useState(""), 2), activeElement = _b[0], setActiveElement = _b[1];
    var classes = useMbmcBlock5Styles();
    var handleFooterClick = function () {
        if (mode === "edit") {
            setActiveElement("footer");
            handleClick === null || handleClick === void 0 ? void 0 : handleClick("footer");
        }
    };
    var handleElementClick = function (element) {
        setActiveElement(element);
        handleClick === null || handleClick === void 0 ? void 0 : handleClick(element);
    };
    return (_jsxs("div", __assign({ className: classes.mbmcContainer }, { children: [_jsx("div", __assign({ className: clx(classes.root, activeElement.toLowerCase() === "footer" &&
                    mode === "edit" &&
                    classes.activeElement), onClick: handleFooterClick }, { children: _jsxs("div", __assign({ className: classes.footerContainer }, { children: [_jsx("div", __assign({ className: classes.logoContainer }, { children: displayLogo(mode, classes, activeElement, handleElementClick, logo) }), void 0), displaySections(mode, classes, links, activeElement, handleElementClick)] }), void 0) }), void 0), _jsx("p", __assign({ className: classes.footerNote }, { children: _jsx("span", { children: "2022 \u00A9 All rights reserved . Mrbaker & Mrs cook . Proudly created by Hivedeck" }, void 0) }), void 0)] }), void 0));
};
