import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTagStyles } from "./styles";
import clx from "classnames";
import { capitalize } from "./helpers";
import { FaTimes } from "react-icons/fa";
export var Tag = function (_a) {
    var name = _a.name, status = _a.status, handleRemove = _a.handleRemove, classname = _a.classname;
    var classes = useTagStyles();
    return (_jsxs("div", { className: clx(classes.root, classname, status ? classes.tagActive : classes.tagInactive, handleRemove && classes.taggable), children: [_jsx("p", { children: capitalize(name !== null && name !== void 0 ? name : "") }), handleRemove && (_jsx("p", { className: classes.tagIconParent, onClick: handleRemove, children: _jsx(FaTimes, {}) }))] }));
};
