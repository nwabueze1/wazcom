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
import { useRatingStyles } from "./useRatingStyles";
import clx from "classnames";
import { FaStar } from "react-icons/fa";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
export var RatingInput = function (_a) {
    var name = _a.name, _b = _a.max, max = _b === void 0 ? 5 : _b, _c = _a.min, min = _c === void 0 ? 1 : _c, _d = _a.value, value = _d === void 0 ? 0 : _d, _e = _a.variant, variant = _e === void 0 ? "contained" : _e, onChange = _a.onChange;
    var ratings = Array.from({ length: max - min + 1 }, function (_, index) { return min + index; });
    var classes = useRatingStyles();
    var theme = useTheme();
    var lg = useMediaQuery(theme.breakpoints.down("lg"));
    var md = useMediaQuery(theme.breakpoints.down("md"));
    var sm = useMediaQuery(theme.breakpoints.down("sm"));
    var viewBoxSize = theme.typography.fontSize + (lg ? 4 : md ? 2 : sm ? 0 : theme.typography.fontSize);
    var handleChange = function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    };
    var renderStarRating = function () {
        return ratings.map(function (rating, index) {
            var changeEventHandler = function () {
                handleChange({ name: name, value: rating });
            };
            return variant === "outlined" && rating <= value ? (_jsx("svg", __assign({ width: viewBoxSize, height: viewBoxSize, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: clx(classes.containedFilled, rating <= value && "filled"), onClick: changeEventHandler }, { children: _jsx("path", { d: "M13.7299 3.50965L15.4899 7.02965C15.7299 7.51965 16.3699 7.98965 16.9099 8.07965L20.0999 8.60965C22.1399 8.94965 22.6199 10.4296 21.1499 11.8896L18.6699 14.3696C18.2499 14.7896 18.0199 15.5996 18.1499 16.1796L18.8599 19.2496C19.4199 21.6796 18.1299 22.6196 15.9799 21.3496L12.9899 19.5796C12.4499 19.2596 11.5599 19.2596 11.0099 19.5796L8.01991 21.3496C5.87991 22.6196 4.57991 21.6696 5.13991 19.2496L5.84991 16.1796C5.97991 15.5996 5.74991 14.7896 5.32991 14.3696L2.84991 11.8896C1.38991 10.4296 1.85991 8.94965 3.89991 8.60965L7.08991 8.07965C7.61991 7.98965 8.25991 7.51965 8.49991 7.02965L10.2599 3.50965C11.2199 1.59965 12.7799 1.59965 13.7299 3.50965Z", fill: "#E7F1E9", stroke: "#0A7227", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }))) : (_jsx(FaStar, { className: clx(classes.containedFilled, rating <= value && "filled"), onClick: changeEventHandler }, index));
        });
    };
    return _jsx("div", __assign({ className: classes.ratingContainer }, { children: renderStarRating() }));
};
