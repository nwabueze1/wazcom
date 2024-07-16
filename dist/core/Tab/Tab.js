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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clx from "classnames";
import { snakeCase } from "lodash";
import { useTabStyles } from "./styles";
export var Tab = function (_a) {
    var controls = _a.controls, variant = _a.variant, width = _a.width, className = _a.className, tabHeaderClassName = _a.tabHeaderClassName, activeTabClassName = _a.activeTabClassName, containerClassName = _a.containerClassName;
    var classes = useTabStyles({
        variant: variant,
        width: width,
    });
    var _b = __read(useState(), 2), activeTab = _b[0], setActiveTab = _b[1];
    var _c = useLocation(), pathname = _c.pathname, search = _c.search;
    var navigate = useNavigate();
    var query = useMemo(function () { return new URLSearchParams(search); }, [search]);
    useEffect(function () {
        var defaultControl = controls === null || controls === void 0 ? void 0 : controls.find(function (control) { return control.name == (query === null || query === void 0 ? void 0 : query.get("tab")); });
        if (defaultControl) {
            setActiveTab(defaultControl.name);
        }
    }, [controls, query, setActiveTab]);
    var handleTabClick = useCallback(function (name) {
        setActiveTab(name);
        query.set("tab", name !== null && name !== void 0 ? name : "");
        navigate({ pathname: pathname, search: query.toString() });
    }, [activeTab, query]);
    return (_jsxs("div", { className: clx(classes.root, className), children: [_jsx("div", { className: tabHeaderClassName, children: _jsx("div", { className: clx(classes.tabs, containerClassName), children: controls.map(function (_a, index) {
                        var name = _a.name, title = _a.title, icon = _a.icon;
                        return (_jsxs("div", { onClick: function () { return handleTabClick(name); }, className: clx(classes.tab, name == activeTab && classes.tabIsActive, name == activeTab && activeTabClassName, snakeCase(title), snakeCase(name)), children: [icon && icon, " ", title] }, index));
                    }) }) }), _jsx("div", { className: clx(classes.contentWrapper, snakeCase("".concat(activeTab, " content"))), children: controls.map(function (_a, index) {
                    var name = _a.name, component = _a.component;
                    return (_jsx("div", { className: clx(classes.content, name == activeTab && classes.contentIsActive), children: component }, index));
                }) })] }));
};
