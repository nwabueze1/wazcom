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
import { RadioButtonInput } from "../../../../io";
import { useSortOptionsStyles } from "./styles";
import { Button } from "../../../../core";
import clx from "classnames";
export var SortOptions = function (_a) {
    var handleSort = _a.handleSort, handleClose = _a.handleClose;
    var _b = __read(useState("asc"), 2), order = _b[0], setOrder = _b[1];
    var classes = useSortOptionsStyles();
    var handleChange = function (order, checked) {
        if (!checked)
            return;
        setOrder(order);
    };
    var handleSelectSort = function () {
        handleSort(order);
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: clx(classes.sortOption, order === "asc" && classes.sortOptionActive) }, { children: [_jsx(RadioButtonInput, { value: order === "asc", classNames: { classes: { root: classes.sortOptionRadio } }, onChange: function (_a) {
                            var checked = _a.value;
                            handleChange("asc", checked);
                        } }, void 0), _jsx("p", __assign({ className: classes.sortOptionText }, { children: "Ascending" }), void 0)] }), void 0), _jsxs("div", __assign({ className: clx(classes.sortOption, order === "desc" && classes.sortOptionActive) }, { children: [_jsx(RadioButtonInput, { value: order === "desc", classNames: { classes: { root: classes.sortOptionRadio } }, onChange: function (_a) {
                            var checked = _a.value;
                            handleChange("desc", checked);
                        } }, void 0), _jsx("p", __assign({ className: classes.sortOptionText }, { children: "Descending" }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.sortOptionsButtons }, { children: [_jsx(Button, __assign({ className: classes.sortOptionButtonSecondary, onClick: function () {
                            handleClose === null || handleClose === void 0 ? void 0 : handleClose();
                        } }, { children: "Cancel" }), void 0), _jsx(Button, __assign({ className: classes.sortOptionButtonPrimary, onClick: handleSelectSort }, { children: "Sort" }), void 0)] }), void 0)] }), void 0));
};
