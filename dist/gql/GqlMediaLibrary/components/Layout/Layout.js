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
import { useLayoutStyles } from "./styles";
import clx from "classnames";
import _ from "lodash";
export var Layout = function (_a) {
    var className = _a.className, count = _a.count, onclick = _a.onclick;
    var classes = useLayoutStyles();
    return (_jsx("div", __assign({ className: clx(classes.root, className), onClick: onclick }, { children: _.times(count, function () { return (_jsx("div", { className: classes.innerBox }, void 0)); }) }), void 0));
};
