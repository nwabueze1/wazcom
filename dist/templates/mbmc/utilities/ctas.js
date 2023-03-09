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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsxs as _jsxs } from "react/jsx-runtime";
import { MbmcButton, MbmcLink } from "../components";
import { handleElementClick } from "./element";
export var renderCtas = function (ctas, mode, parentKey, handleClick, activeElement, className) {
    return (ctas !== null && ctas !== void 0 ? ctas : []).map(function (_a, index) {
        var text = _a.text, rIcon = _a.rIcon, url = _a.url, lIcon = _a.lIcon, props = __rest(_a, ["text", "rIcon", "url", "lIcon"]);
        var name = parentKey + ".ctas." + String(index);
        return mode === "edit" ? (_jsxs(MbmcButton, __assign({ name: name }, props, { className: className, handleClick: function () {
                handleElementClick(mode, name, handleClick);
            }, activeElement: activeElement }, { children: [lIcon, " ", text, " ", rIcon] }), index)) : (_jsxs(MbmcLink, __assign({ name: name, url: url }, props, { className: className, activeElement: activeElement }, { children: [lIcon, " ", text, " ", rIcon] }), index));
    });
};
