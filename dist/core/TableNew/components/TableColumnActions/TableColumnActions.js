import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTableColumnActionsStyles } from "./styles";
import clx from "classnames";
export var TableColumnActions = function (_a) {
    var actions = _a.actions, identifier = _a.identifier;
    var classes = useTableColumnActionsStyles();
    var renderActions = function () {
        return actions.map(function (_a, index) {
            var name = _a.name, func = _a.func, verify = _a.verify;
            return verify && !verify(identifier) ? (_jsx("i", {}, index)) : (_jsxs("p", { className: classes.action, onClick: function () {
                    func(identifier);
                }, children: [name, index !== actions.length - 1 && _jsx("span", { className: classes.actionSeparator, children: "|" })] }, index + name));
        });
    };
    return _jsx("div", { className: clx(classes.root, "column-actions"), children: renderActions() });
};
