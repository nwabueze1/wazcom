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
import { useSplashScreenStyles } from "./useSplashScreenStyles";
import { Button } from "../../Button";
import clx from "classnames";
export var SplashScreen = function (_a) {
    var cta = _a.cta, header = _a.header, body = _a.body, classNames = _a.classNames, connecting = _a.connecting;
    var classes = useSplashScreenStyles();
    return (_jsxs("section", __assign({ className: clx(classes.root, classNames === null || classNames === void 0 ? void 0 : classNames.root) }, { children: [header && (_jsxs("header", __assign({ className: clx(classes.header, classNames === null || classNames === void 0 ? void 0 : classNames.header) }, { children: [_jsx("h2", __assign({ className: clx(classes.heading, classNames === null || classNames === void 0 ? void 0 : classNames.heading) }, { children: header.title })), _jsx("p", __assign({ className: clx(classes.subheading, classNames === null || classNames === void 0 ? void 0 : classNames.subheading) }, { children: header.subtitle }))] }))), body && (_jsxs("article", __assign({ className: clx(classes.body, classNames === null || classNames === void 0 ? void 0 : classNames.body) }, { children: [body.image && (_jsx("img", { src: body.image.src, alt: body.image.alt, height: body.image.height, width: body.image.width, className: clx(classes.image, classNames === null || classNames === void 0 ? void 0 : classNames.image) })), _jsxs("div", __assign({ className: clx(classes.bodyTextContainer, classNames === null || classNames === void 0 ? void 0 : classNames.bodyTextContainer) }, { children: [body.title && (_jsx("h4", __assign({ className: clx(classes.heading, classNames === null || classNames === void 0 ? void 0 : classNames.heading) }, { children: body.title }))), body.subtitle && (_jsx("p", __assign({ className: clx(classes.subheading, classes.bodySubtitle, classNames === null || classNames === void 0 ? void 0 : classNames.bodySubtitle) }, { children: body.subtitle })))] })), connecting && (_jsx("div", __assign({ className: classes.track }, { children: _jsx("div", { className: classes.trackLoader }) }))), cta && cta.title && (_jsx(Button, __assign({ onClick: cta.onClick, className: clx(classes.button, classNames === null || classNames === void 0 ? void 0 : classNames.button) }, { children: cta.title })))] })))] })));
};
