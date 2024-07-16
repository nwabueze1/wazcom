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
import clx from "classnames";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useAccordionStyles } from "./styles";
export var Accordion = function (_a) {
    var title = _a.title, children = _a.children, className = _a.className, _b = _a.showIcon, showIcon = _b === void 0 ? true : _b, _c = _a.isExpanded, isExpanded = _c === void 0 ? false : _c;
    var _d = __read(useState(isExpanded), 2), active = _d[0], setActive = _d[1];
    var classes = useAccordionStyles();
    var toggleVisiblity = function () {
        setActive(function (active) { return !active; });
    };
    return (_jsx("div", { className: clx(classes.root, className), children: _jsxs("div", { className: clx(active ? classes.accordionActive : ""), children: [_jsxs("div", { className: clx(classes.accordionHeader, active && classes.accordionHeaderActive, "accordion__header"), onClick: toggleVisiblity, children: [typeof title === "string" ? _jsx("h3", { className: classes.accordionTitle, children: title }) : title, showIcon && (_jsx("span", { className: clx(classes.accordionIcon, "accordion__icon"), children: _jsx(IoMdArrowDropdown, {}) }))] }), _jsx("div", { className: clx(classes.accordionContent, "accordion__content"), children: children })] }) }));
};
