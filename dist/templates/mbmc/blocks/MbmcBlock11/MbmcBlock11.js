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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useMbmcBlock11Styles } from "./styles";
import { MbmcButton } from "../../components/MbmcButton/MbmcButton";
export var MbmcBlock11 = function (_a) {
    var layout = _a.layout, heading = _a.heading, description = _a.description, image = _a.image, ctas = _a.ctas;
    var classes = useMbmcBlock11Styles({ flexDirection: layout !== null && layout !== void 0 ? layout : "row-reverse" });
    var displayCtas = function () {
        return (ctas !== null && ctas !== void 0 ? ctas : []).map(function (_a, index) {
            var text = _a.text, rIcon = _a.rIcon, lIcon = _a.lIcon, props = __rest(_a, ["text", "rIcon", "lIcon"]);
            return (_jsxs(MbmcButton, __assign({}, props, { children: [lIcon, " ", text, " ", rIcon] }), index));
        });
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.headerContent }, { children: [_jsx("h3", __assign({ className: classes.headerTitle }, { children: heading }), void 0), _jsx("div", __assign({ className: classes.heroContainerMobile }, { children: _jsx("img", { src: image, alt: "food images", className: classes.heroImageMobile }, void 0) }), void 0), _jsx("div", __assign({ className: classes.headerParagraph }, { children: _jsx("p", __assign({ className: classes.headerDescription }, { children: description }), void 0) }), void 0), _jsx("div", __assign({ className: classes.headerBtnContainer }, { children: displayCtas() }), void 0)] }), void 0), _jsx("div", __assign({ className: classes.heroContainer }, { children: _jsx("img", { src: image, alt: "food images", className: classes.heroImage }, void 0) }), void 0)] }), void 0));
};
