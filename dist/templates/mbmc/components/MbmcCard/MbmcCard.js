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
import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useMbmcCardStyles } from "./styles";
import clsx from "clsx";
import { menuImagePlaceholder } from "../../../../utilities/restaurant";
import { MbmcButton } from "../MbmcButton/MbmcButton";
export var MbmcCard = function (_a) {
    var heading = _a.heading, image = _a.image, description = _a.description, ctas = _a.ctas, scrollableParent = _a.scrollableParent, className = _a.className, classNames = _a.classNames, onClick = _a.onClick;
    var isOpen = true;
    var classes = useMbmcCardStyles({ isOpen: isOpen, scrollableParent: scrollableParent });
    var displayCtas = function () {
        return (ctas !== null && ctas !== void 0 ? ctas : []).map(function (_a, index) {
            var text = _a.text, rIcon = _a.rIcon, lIcon = _a.lIcon, props = __rest(_a, ["text", "rIcon", "lIcon"]);
            return (_jsxs(MbmcButton, __assign({}, props, { children: [lIcon, " ", text, " ", rIcon] }), index));
        });
    };
    return (_jsx(_Fragment, { children: _jsxs("div", __assign({ onClick: onClick, className: clsx(classes.root, classes.visible, className) }, { children: [_jsx("div", { className: classes.imageWrapper, style: {
                        backgroundImage: "url(".concat(image !== null && image !== void 0 ? image : menuImagePlaceholder, ")"),
                    } }, void 0), _jsxs("div", __assign({ className: classes.content }, { children: [_jsxs("div", { children: [_jsx("p", __assign({ className: clsx(classes.heading, classNames === null || classNames === void 0 ? void 0 : classNames.heading) }, { children: heading }), void 0), _jsx("p", __assign({ className: clsx(classes.description, classNames === null || classNames === void 0 ? void 0 : classNames.description) }, { children: description }), void 0)] }, void 0), _jsx("div", __assign({ className: classes.ctas }, { children: displayCtas() }), void 0)] }), void 0)] }), void 0) }, void 0));
};
