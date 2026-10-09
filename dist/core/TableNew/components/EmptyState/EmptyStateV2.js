import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEmptyStateStyles } from "./styles";
import clx from "classnames";
export var EmptyStateV2 = function (_a) {
    var heading = _a.heading, _b = _a.message, message = _b === void 0 ? "There is no information to display" : _b, _c = _a.image, image = _c === void 0 ? "https://sytbuildr.s3.eu-west-2.amazonaws.com/blog+illustration.svg" : _c;
    var classes = useEmptyStateStyles();
    return (_jsx("div", { className: classes.root, children: _jsxs("div", { className: classes.emptyContainer, children: [_jsx("img", { src: image, alt: "Empty Table" }), heading && _jsx("p", { className: clx(classes.emptyHeading, "v2"), children: heading }), _jsx("p", { className: clx(classes.emptyMessage, "v2"), children: message })] }) }));
};
