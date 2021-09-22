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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx } from "react/jsx-runtime";
import CssBaseline from "@material-ui/core/CssBaseline";
import { jssPreset, StylesProvider, ThemeProvider, } from "@material-ui/core/styles";
import { create } from "jss";
import jssPluginExtend from "jss-plugin-extend";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./theme";
var jss = create({
    plugins: __spreadArray(__spreadArray([], jssPreset().plugins, true), [jssPluginExtend()], false),
});
var App = function () {
    return (_jsx(CssBaseline, { children: _jsx(StylesProvider, __assign({ jss: jss }, { children: _jsx(ThemeProvider, __assign({ theme: theme }, { children: _jsx(Router, { children: _jsx(Switch, { children: _jsx(Route, { exact: true, path: "/" }, void 0) }, void 0) }, void 0) }), void 0) }), void 0) }, void 0));
};
export default App;
