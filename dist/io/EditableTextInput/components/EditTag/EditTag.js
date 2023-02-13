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
import { jsx as _jsx } from "react/jsx-runtime";
import { useEditableTextStyles } from "../../styles";
export var EditTag = function (_a) {
    var name = _a.name, cmd = _a.cmd, arg = _a.arg, Icon = _a.Icon;
    var classes = useEditableTextStyles();
    return (_jsx("div", __assign({ onMouseDown: function (evt) {
            evt.preventDefault();
            document.execCommand(cmd !== null && cmd !== void 0 ? cmd : "", false, arg);
        }, className: classes.controlIcon }, { children: Icon ? _jsx(Icon, {}) : name }), cmd));
};
