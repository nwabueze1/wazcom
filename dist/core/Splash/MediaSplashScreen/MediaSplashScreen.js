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
import { SplashScreen } from "../SplashScreen";
import { useMediaSplashScreen } from "./useMediaSplashScreen";
export var MediaSplashScreen = function (props) {
    var classes = useMediaSplashScreen();
    return (_jsx(SplashScreen, __assign({}, props, { classNames: {
            body: classes.body,
            heading: classes.heading,
            bodySubtitle: classes.subheading,
            bodyTextContainer: classes.bodyTextContainer,
        } })));
};
