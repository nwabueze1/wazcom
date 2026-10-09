import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEmptyStateStyles } from "./styles";
export var EmptyState = function (_a) {
    var heading = _a.heading, _b = _a.message, message = _b === void 0 ? "There is no information to display" : _b;
    var classes = useEmptyStateStyles();
    return (_jsx("div", { className: classes.root, children: _jsxs("div", { className: classes.emptyContainer, children: [_jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/blog+illustration.svg", alt: "Empty Table" }), heading && _jsx("p", { className: classes.emptyHeading, children: heading }), _jsx("p", { className: heading ? classes.emptyMessage : classes.emptyMessagePadded, children: message })] }) }));
};
