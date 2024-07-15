import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import clx from "classnames";
import { useWrapperStyles } from "./styles";
export var Wrapper = function (_a) {
    var children = _a.children, title = _a.title, description = _a.description, className = _a.className;
    var classes = useWrapperStyles();
    return (_jsx("div", { className: clx(classes.root, className), children: _jsxs("div", { className: classes.container, children: [_jsxs("div", { className: classes.header, children: [_jsxs("h1", { className: classes.title, children: [title, " "] }), _jsx("div", { className: classes.description, children: _jsx("p", { className: classes.descriptionText, children: description }) })] }), children] }) }));
};
