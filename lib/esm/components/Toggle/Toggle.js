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
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { useToggleStyles } from "./styles";
export var CustomizedSwitch = function (_a) {
    var classes = _a.classes, props = __rest(_a, ["classes"]);
    return (_jsx(Switch, __assign({ focusVisibleClassName: classes.focusVisible, disableRipple: true, classes: {
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked,
        } }, props), void 0));
};
export function Toggle() {
    var _a = React.useState({
        checked: true,
    }), state = _a[0], setState = _a[1];
    var handleChange = function (event) {
        var _a;
        setState(__assign(__assign({}, state), (_a = {}, _a[event.target.name] = event.target.checked, _a)));
    };
    var classes = useToggleStyles();
    return (_jsx(FormGroup, { children: _jsx(FormControlLabel, { control: _jsx(CustomizedSwitch, { classes: classes, checked: state.checked, onChange: handleChange, name: "checked" }, void 0), label: "" }, void 0) }, void 0));
}
