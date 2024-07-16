import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEmbedOptionStyles } from "./styles";
export var EmbedOption = function (_a) {
    var icon = _a.icon, title = _a.title, description = _a.description, handleClick = _a.handleClick;
    var classes = useEmbedOptionStyles();
    return (_jsxs("div", { className: classes.option, onClick: function () { return handleClick(); }, children: [_jsx("div", { className: classes.optionItemIcon, children: icon }), _jsxs("div", { className: classes.optionItemRight, children: [_jsx("div", { className: classes.optionItemTitle, children: title }), _jsx("div", { className: classes.optionItemSpan, children: description })] })] }));
};
