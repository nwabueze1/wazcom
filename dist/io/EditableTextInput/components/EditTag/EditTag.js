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
export var EditTag = function (props) {
    var classes = useEditableTextStyles();
    return (_jsx("div", __assign({ onMouseDown: function (evt) {
            var _a;
            evt.preventDefault();
            document.execCommand((_a = props === null || props === void 0 ? void 0 : props.cmd) !== null && _a !== void 0 ? _a : "", false, props.arg);
        }, className: classes.controlIcon }, { children: props.icon || props.name }), props.cmd));
};
