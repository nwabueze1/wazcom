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
import { useState, useCallback } from "react";
import { useGalleryStyles } from "./styles";
import clx from "classnames";
import { CheckBoxInput } from "io";
export var Gallery = function (_a) {
    var items = _a.items, text = _a.text, onSelect = _a.onSelect;
    var classes = useGalleryStyles();
    var _b = useState({
        selected: null,
        hover: null,
    }), ids = _b[0], setIds = _b[1];
    var handleMouseEnter = useCallback(function (id) {
        if (ids.selected === id)
            return;
        var newIds = __assign(__assign({}, ids), { hover: id });
        setIds(newIds);
    }, [ids]);
    var handleMouseLeave = useCallback(function () {
        var newIds = __assign(__assign({}, ids), { hover: null });
        setIds(newIds);
    }, [ids]);
    var handleItemSelect = useCallback(function (id) {
        var newIds;
        if (ids.selected === id) {
            newIds = { hover: null, selected: null };
            onSelect === null || onSelect === void 0 ? void 0 : onSelect(null);
            return setIds(newIds);
        }
        newIds = { hover: null, selected: id };
        setIds(newIds);
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(id);
    }, [ids]);
    var displayItems = useCallback(function () {
        return items.map(function (_a, index) {
            var _b = _a.image, src = _b.src, alt = _b.alt, id = _a.id;
            return (_jsxs("div", __assign({ onClick: function () {
                    handleItemSelect(id);
                }, onMouseEnter: function () {
                    handleMouseEnter(id);
                }, onMouseLeave: handleMouseLeave, className: classes.item }, { children: [_jsx("img", { src: src, className: classes.itemImage, alt: alt }, void 0), _jsx("div", __assign({ className: clx(classes.itemHover, ids.hover === id && classes.itemHoverActive) }, { children: _jsx("p", __assign({ className: classes.itemHoverText }, { children: text !== null && text !== void 0 ? text : "Select" }), void 0) }), void 0), _jsx("div", __assign({ className: clx(classes.itemChecked, ids.selected === id && classes.itemCheckedActive) }, { children: _jsx(CheckBoxInput, { checked: true, className: "checkbox" }, void 0) }), void 0)] }), index));
        });
    }, [ids]);
    return _jsx("div", __assign({ className: classes.root }, { children: displayItems() }), void 0);
};
