import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clx from "classnames";
import { useLoaderStyles } from "./styles";
export var Loader = function (_a) {
    var className = _a.className, isFullScreen = _a.isFullScreen;
    var classes = useLoaderStyles();
    return (_jsx("div", { className: clx(classes.root, className, isFullScreen && "full-screen"), children: _jsxs("div", { className: classes.container, children: [_jsx("span", { className: classes.circle }), _jsx("span", { className: classes.circle }), _jsx("span", { className: classes.circle }), _jsx("span", { className: classes.circle })] }) }));
};
