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
import { clickAction } from "./anchor";
export var displaySocials = function (mode, socialIcons, socials, classes, activeElement, handleClick) {
    return (socials !== null && socials !== void 0 ? socials : []).map(function (_a, index) {
        var type = _a.type, url = _a.url;
        var socialId = "footer_socials." + String(index);
        if (mode === "edit")
            return (_jsx("div", __assign({ onClick: function () {
                    clickAction(url, mode, function () {
                        handleClick(mode === "edit" ? socialId : url);
                    });
                }, className: activeElement === socialId && classes.activeElement }, { children: socialIcons[type] }), index));
        return (_jsx("a", __assign({ href: url, target: "_blank", rel: "noopener noreferrer" }, { children: socialIcons[type] }), index));
    });
};
