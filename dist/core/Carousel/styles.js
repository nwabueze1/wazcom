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
import makeStyles from "@mui/styles/makeStyles";
export var useCarouselStyles = makeStyles(function (theme) {
    return {
        wrapper: function (props) { return (__assign({ height: "100%", width: "100%", position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }, getWrapperStylesResponsive(props, theme))); },
        box: function (props) { return (__assign({ display: "flex", alignItems: "center", justifyContent: "center", margin: 0, padding: 0, position: "relative", flexShrink: 0, fontSize: theme.typography.fontSize * 2, cursor: "pointer", height: "100%" }, getBoxStylesResponsive(props, theme))); },
    };
});
var sortedBreakpoints = ["sm", "md", "lg", "xl"];
var getWrapperStylesResponsive = function (props, theme) {
    var styles = {
        gap: props === null || props === void 0 ? void 0 : props.gap,
    };
    sortedBreakpoints.forEach(function (key) {
        var _a, _b, _c;
        if ((_a = props === null || props === void 0 ? void 0 : props.breakpoints) === null || _a === void 0 ? void 0 : _a[key]) {
            styles[theme.breakpoints.up(key)] = {
                gap: (_c = (_b = props === null || props === void 0 ? void 0 : props.breakpoints) === null || _b === void 0 ? void 0 : _b[key]) === null || _c === void 0 ? void 0 : _c.gap,
            };
        }
    });
    return styles;
};
var getBoxStylesResponsive = function (props, theme) {
    var styles = {};
    if (props.itemsToShow) {
        styles["width"] = getPercentageWidth(props === null || props === void 0 ? void 0 : props.itemsToShow);
    }
    sortedBreakpoints.forEach(function (key) {
        var _a, _b, _c, _d, _e;
        if (((_a = props === null || props === void 0 ? void 0 : props.breakpoints) === null || _a === void 0 ? void 0 : _a[key]) && ((_c = (_b = props === null || props === void 0 ? void 0 : props.breakpoints) === null || _b === void 0 ? void 0 : _b[key]) === null || _c === void 0 ? void 0 : _c.itemsToShow)) {
            styles[theme.breakpoints.up(key)] = {
                width: getPercentageWidth((_e = (_d = props === null || props === void 0 ? void 0 : props.breakpoints) === null || _d === void 0 ? void 0 : _d[key]) === null || _e === void 0 ? void 0 : _e.itemsToShow),
            };
        }
    });
    return styles;
};
var getPercentageWidth = function (itemToShow) {
    return "calc((100% / ".concat(itemToShow, "))%");
};
