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
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import clx from 'classnames';
import { snakeCase } from "lodash";
import { useTabStyles } from './styles';
export var Tab = function (_a) {
    var controls = _a.controls, variant = _a.variant, backgroundColor = _a.backgroundColor, borderWidth = _a.borderWidth, borderColor = _a.borderColor, borderStyle = _a.borderStyle, borderRadius = _a.borderRadius, className = _a.className, containerClassName = _a.containerClassName;
    var classes = useTabStyles({
        variant: variant,
        backgroundColor: backgroundColor,
        borderWidth: borderWidth,
        borderColor: borderColor,
        borderStyle: borderStyle,
        borderRadius: borderRadius,
    });
    var _b = __read(useState(), 2), activeTab = _b[0], setActiveTab = _b[1];
    var _c = useLocation(), pathname = _c.pathname, search = _c.search;
    var navigate = useNavigate();
    var query = useMemo(function () { return new URLSearchParams(search); }, [search]);
    useEffect(function () {
        var defaultControl = controls === null || controls === void 0 ? void 0 : controls.find(function (control) { return control.name == (query === null || query === void 0 ? void 0 : query.get('tab')); });
        if (defaultControl) {
            setActiveTab(defaultControl.name);
        }
    }, [controls, query, setActiveTab]);
    var handleTabClick = useCallback(function (name) {
        setActiveTab(name);
        query.set('tab', name !== null && name !== void 0 ? name : '');
        navigate({ pathname: pathname, search: query.toString() });
    }, [activeTab, query]);
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsx("div", __assign({ className: clx(classes.tabs, containerClassName) }, { children: controls.map(function (_a, index) {
                    var name = _a.name, title = _a.title;
                    return (_jsx("div", __assign({ onClick: function () { return handleTabClick(name); }, className: clx(classes.tab, (name == activeTab) && classes.tabIsActive, snakeCase(title), snakeCase(name)) }, { children: title }), index));
                }) })), _jsx("div", __assign({ className: clx(classes.contentWrapper, snakeCase("".concat(activeTab, " content"))) }, { children: controls.map(function (_a, index) {
                    var name = _a.name, component = _a.component;
                    return (_jsx("div", __assign({ className: clx(classes.content, (name == activeTab) && classes.contentIsActive) }, { children: component }), index));
                }) }))] })));
};
