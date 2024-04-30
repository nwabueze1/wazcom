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
import { useState, useEffect, useRef } from "react";
import cx from "classnames";
import { useCropImageStyles } from "./styles";
export var Slider = function (_a) {
    var value = _a.value, className = _a.className, onChange = _a.onChange;
    var classes = useCropImageStyles();
    var line = useRef(null);
    var ranNum = Math.random();
    var _b = __read(useState(false), 2), focus = _b[0], setFocus = _b[1];
    useEffect(function () {
        window.addEventListener("mouseup", onStop, { passive: false });
        window.addEventListener("mousemove", onDrag, { passive: false });
        window.addEventListener("touchmove", onDrag, { passive: false });
        window.addEventListener("touchend", onStop, { passive: false });
        if (line.current) {
            line.current.addEventListener("mousedown", onStart);
            line.current.addEventListener("touchstart", onStart);
        }
        return function () {
            window.removeEventListener("mouseup", onStop);
            window.removeEventListener("mousemove", onDrag);
            window.removeEventListener("touchmove", onDrag);
            window.removeEventListener("touchend", onStop);
            if (line.current) {
                line.current.removeEventListener("mousedown", onStart);
                line.current.removeEventListener("touchstart", onStart);
            }
        };
    }, [ranNum]);
    var handleSliderClick = function (e) {
        var position = e.clientX;
        if (line.current) {
            var _a = line.current.getBoundingClientRect(), left = _a.left, width = _a.width;
            if (onChange) {
                onChange(Math.min(1, Math.max(0, position - left) / width));
            }
        }
    };
    var onDrag = function (e) {
        if (focus) {
            var position = "touches" in e ? e.touches[0].clientX : e.clientX;
            if (line.current) {
                var _a = line.current.getBoundingClientRect(), left = _a.left, width = _a.width;
                if (onChange) {
                    onChange(Math.min(1, Math.max(0, position - left) / width));
                }
            }
            if (e.preventDefault) {
                e.preventDefault();
            }
        }
    };
    var onStop = function () {
        setFocus(false);
    };
    var onStart = function (e) {
        setFocus(true);
        onDrag(e);
    };
    return (_jsx("div", __assign({ className: cx(classes.slider, className), ref: line, onClick: handleSliderClick }, { children: _jsxs("div", __assign({ className: classes.sliderLine }, { children: [_jsx("div", { className: classes.sliderFill, style: {
                        flexGrow: value,
                    } }), _jsx("div", __assign({ className: cx(classes.sliderCircle, focus && classes.sliderCircleFocus), style: {
                        left: "".concat((value || 0) * 100, "%"),
                    } }, { children: _jsx("div", { className: cx(classes.sliderInnerCircle, focus && classes.sliderInnerCircleFocus) }) }))] })) })));
};
