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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useRef, useMemo } from "react";
import clx from "classnames";
import { useFloating, shift, offset, flip, arrow } from "@floating-ui/react-dom";
import { RiErrorWarningLine } from "react-icons/ri";
import { useTootipStyles } from "./style";
export var Tootip = function (_a) {
    var children = _a.children, content = _a.content, position = _a.position;
    var classes = useTootipStyles();
    var arrowRef = useRef(null);
    var _b = __read(useState(false), 2), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useFloating({
        placement: position,
        open: true,
        middleware: [
            shift(),
            flip(),
            offset(12),
            arrow({
                element: arrowRef,
            }),
        ],
    }), x = _c.x, y = _c.y, reference = _c.reference, floating = _c.floating, strategy = _c.strategy, placement = _c.placement;
    var toolTipArrowClass = useMemo(function () {
        return (placement === null || placement === void 0 ? void 0 : placement.includes("top"))
            ? classes.tooltipArrowTop
            : (placement === null || placement === void 0 ? void 0 : placement.includes("left"))
                ? classes.tooltipArrowLeft
                : (placement === null || placement === void 0 ? void 0 : placement.includes("right"))
                    ? classes.tooltipArrowRight
                    : classes.tooltipArrowBottom;
    }, [placement]);
    return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ ref: reference, onMouseEnter: function () { return setIsOpen(true); }, onMouseLeave: function () { return setIsOpen(false); }, className: classes.root }, { children: children || _jsx(RiErrorWarningLine, { className: classes.tooltipIcon }) })), isOpen && (_jsxs("div", __assign({ className: classes.tooltipContainer, ref: floating, style: {
                    position: strategy,
                    top: y !== null && y !== void 0 ? y : "",
                    left: x !== null && x !== void 0 ? x : "",
                } }, { children: [_jsx("div", __assign({ className: classes.tooltip }, { children: content })), _jsx("div", { className: clx(classes.tooltipArrow, toolTipArrowClass), ref: arrowRef })] })))] }));
};
