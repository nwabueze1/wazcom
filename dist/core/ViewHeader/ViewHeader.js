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
import { useState } from "react";
import { TabState } from "./type";
import { useViewHeaderStyles } from "./useViewHeaderStyles";
import clx from "classnames";
export var ViewHeader = function (_a) {
    var statesChildren = _a.statesChildren, configChildren = _a.configChildren, _b = _a.hasState, hasState = _b === void 0 ? true : _b;
    var _c = __read(useState(TabState.Config), 2), activeTab = _c[0], setActiveTab = _c[1];
    var classes = useViewHeaderStyles();
    var renderChildren = function () {
        switch (activeTab) {
            case TabState.Config:
                return configChildren;
            case TabState.States:
                return statesChildren;
            default:
                return null;
        }
    };
    var renderTabs = function () {
        return [TabState.Config, TabState.States].map(function (value, index) {
            return index == 1 && !hasState ? null : (_jsx("button", __assign({ onClick: function () { return setActiveTab(value); }, className: clx(classes.tab, activeTab === value && "active") }, { children: value }), index));
        });
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx("div", __assign({ className: classes.tabContainer }, { children: renderTabs() })), _jsx("div", { className: classes.separator }), renderChildren()] })));
};
