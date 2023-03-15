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
import clx from "classnames";
import { useWrapperStyles } from "./styles";
export var Wrapper = function (_a) {
    var children = _a.children, style = _a.style;
    var classes = useWrapperStyles({ style: style });
    return _jsx("div", __assign({ className: clx(classes.root) }, { children: children }));
};
