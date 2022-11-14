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
import { useMbmcBlock7Styles } from "./styles";
import clx from "classnames";
export var MbmcBlock7 = function (_a) {
    var _b;
    var heading = _a.heading, description = _a.description, images = _a.images;
    var classes = useMbmcBlock7Styles();
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.headerContent }, { children: [_jsx("h3", __assign({ className: classes.headerTitle }, { children: heading }), void 0), _jsx("p", __assign({ className: classes.headerDescription }, { children: description }), void 0)] }), void 0), _jsx("div", __assign({ className: classes.headerCardContainer }, { children: (_b = images === null || images === void 0 ? void 0 : images.slice(0, 5)) === null || _b === void 0 ? void 0 : _b.map(function (image, idx) { return (_jsx("img", { src: image, className: clx(classes.imageContainer, idx === 2 ? classes.flexGrow : classes.smallImageContainer) }, idx)); }) }), void 0), _jsx("div", __assign({ className: classes.mobileCardContainer }, { children: images === null || images === void 0 ? void 0 : images.map(function (image, idx) { return (_jsx("img", { src: image, className: clx(classes.mobileImageContainer) }, idx)); }) }), void 0)] }), void 0));
};
