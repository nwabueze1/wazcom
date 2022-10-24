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
import { restaurantCoverImagePlaceholder } from "../../../../utilities/restaurant";
import { useHeroStyles } from "./styles";
import clx from "classnames";
export var Hero = function (_a) {
    var className = _a.className;
    var classes = useHeroStyles();
    return (_jsx("div", __assign({ className: clx(className) }, { children: _jsx("div", __assign({ className: classes.container }, { children: _jsx("img", { src: restaurantCoverImagePlaceholder, alt: "", className: classes.restaurantCoverImg }, void 0) }), void 0) }), void 0));
};
