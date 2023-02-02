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
import { useTableColumnActionsStyles } from "./styles";
import clx from 'classnames';
export var TableColumnActions = function (_a) {
    var actions = _a.actions;
    var classes = useTableColumnActionsStyles();
    var renderActions = function () {
        return actions.map(function (_a, index) {
            var name = _a.name, func = _a.func;
            return (_jsxs("p", __assign({ className: classes.action, onClick: func }, { children: [name, index !== actions.length - 1 && _jsx("span", __assign({ className: classes.actionSeparator }, { children: "|" }))] })));
        });
    };
    return _jsx("div", __assign({ className: clx(classes.root, 'column-actions') }, { children: renderActions() }));
};
