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
import { useMbmcBlock10Styles } from "./styles";
export var MbmcBlock10 = function (_a) {
    var tags = _a.tags;
    var classes = useMbmcBlock10Styles();
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsx("div", __assign({ className: classes.menuContainer }, { children: tags.map(function (tag, idx) {
                return (_jsxs("p", __assign({ className: "".concat(tags.length - 1 !== idx && classes.border) }, { children: [_jsx("img", { src: tag.icon, alt: tag.text }, void 0), " ", tag.text] }), idx));
            }) }), void 0) }), void 0));
};
