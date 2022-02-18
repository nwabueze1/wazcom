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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Checkbox } from "@mui/material";
import clx from "classnames";
import { Accordion } from "../../../Accordion";
import { TextInput } from "../../../../io";
import { useFilterStyles } from "./styles";
export var TableFilter = function (_a) {
    var _b, _c;
    var showFilter = _a.showFilter, setShowFilter = _a.setShowFilter, fields = _a.fields;
    var classes = useFilterStyles();
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: clx(classes.overlay, (_b = {},
                    _b[classes.showOverlay] = showFilter,
                    _b)), onClick: function () { return setShowFilter(false); } }, void 0), _jsxs("div", __assign({ className: clx(classes.root, (_c = {},
                    _c[classes.show] = showFilter,
                    _c)) }, { children: [_jsx(TextInput, { placeholder: "Search" }, void 0), fields.map(function (_a) {
                        var name = _a.name, label = _a.label;
                        return (_jsxs(Accordion, __assign({ title: label }, { children: [_jsxs("div", __assign({ style: { display: "flex", alignItems: "center" } }, { children: [_jsx(Checkbox, {}, void 0), _jsx("div", { children: label }, void 0)] }), void 0), " ", _jsxs("div", __assign({ style: { display: "flex" } }, { children: [_jsx(Checkbox, {}, void 0), _jsx("div", { children: label }, void 0)] }), void 0), " ", _jsxs("div", __assign({ style: { display: "flex" } }, { children: [_jsx(Checkbox, {}, void 0), _jsx("div", { children: label }, void 0)] }), void 0), " ", _jsxs("div", __assign({ style: { display: "flex" } }, { children: [_jsx(Checkbox, {}, void 0), _jsx("div", { children: label }, void 0)] }), void 0)] }), name));
                    })] }), void 0)] }, void 0));
};
