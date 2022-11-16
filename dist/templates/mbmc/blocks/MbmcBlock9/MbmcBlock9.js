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
import { useMbmcBlock9Styles } from "./styles";
import { useState } from "react";
import clx from "classnames";
export var MbmcBlock9 = function (_a) {
    var heading = _a.heading, description = _a.description, steps = _a.steps;
    var classes = useMbmcBlock9Styles();
    var _b = __read(useState(0), 2), active = _b[0], setActive = _b[1];
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: classes.headerContainer }, { children: [_jsxs("div", __assign({ className: classes.textContainer }, { children: [_jsxs("div", __assign({ className: classes.headerContent }, { children: [_jsx("h3", __assign({ className: classes.headerTitle }, { children: heading }), void 0), _jsx("p", __assign({ className: classes.headerDescription }, { children: description }), void 0)] }), void 0), _jsx("div", __assign({ className: classes.directionContainerMobile }, { children: _jsx("img", { className: classes.imageStep, src: steps[active].image, alt: steps[active].heading }, void 0) }), void 0), _jsx("div", __assign({ className: classes.headerCardContainer }, { children: steps.map(function (step, idx) { return (_jsxs("div", __assign({ onClick: function () { return setActive(idx); }, className: classes.pointContainer }, { children: [_jsx("div", __assign({ className: clx(classes.point, active == idx && classes.activePoint) }, { children: idx + 1 }), void 0), _jsxs("div", __assign({ className: classes.pointTextContainer }, { children: [_jsx("p", __assign({ className: clx(classes.pointTitle, active === idx && classes.activeTitle) }, { children: step.heading }), void 0), _jsx("p", __assign({ className: classes.pointDescription }, { children: step.description }), void 0)] }), void 0)] }), idx)); }) }), void 0)] }), void 0), _jsx("div", __assign({ className: classes.directionContainer }, { children: _jsx("img", { src: steps[active].image, alt: steps[active].heading, className: classes.imageStep }, void 0) }), void 0)] }), void 0) }), void 0));
};
