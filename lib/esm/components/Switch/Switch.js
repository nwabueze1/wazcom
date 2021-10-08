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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSwitchStyles } from "./styles";
import { Switch as IosSwitch } from "@material-ui/core";
export var Switch = function (_a) {
    var onChange = _a.onChange, onClick = _a.onClick, value = _a.value, error = _a.error, name = _a.name, props = __rest(_a, ["onChange", "onClick", "value", "error", "name"]);
    var classes = useSwitchStyles();
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx(IosSwitch, __assign({ focusVisibleClassName: classes.focusVisible, disableRipple: true, 
                // classes={{
                //   root: classes.root,
                //   switchBase: classes.switchBase,
                //   thumb: classes.thumb,
                //   track: classes.track,
                //   checked: classes.checked,
                // }}
                onClick: onClick, value: value, checked: value, onChange: onChange, name: name }, props), void 0), error && (_jsxs("p", __assign({ className: classes.error_message }, { children: [name === null || name === void 0 ? void 0 : name.replace(/_/g, " "), " is required"] }), void 0))] }), void 0));
};
