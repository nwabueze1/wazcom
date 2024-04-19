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
import { useEmbedOptionStyles } from "./styles";
export var EmbedOption = function (_a) {
    var icon = _a.icon, title = _a.title, description = _a.description, handleClick = _a.handleClick;
    var classes = useEmbedOptionStyles();
    return (_jsxs("div", __assign({ className: classes.option, onClick: function () { return handleClick(); } }, { children: [_jsx("div", __assign({ className: classes.optionItemIcon }, { children: icon })), _jsxs("div", __assign({ className: classes.optionItemRight }, { children: [_jsx("div", __assign({ className: classes.optionItemTitle }, { children: title })), _jsx("div", __assign({ className: classes.optionItemSpan }, { children: description }))] }))] })));
};
