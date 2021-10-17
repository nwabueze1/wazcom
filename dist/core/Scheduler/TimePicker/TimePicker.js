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
import { TextField, makeStyles, withStyles, } from "@material-ui/core";
var useStyles = makeStyles(function (theme) { return ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        color: "transparent",
        "& input[type='time']::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            display: "none",
        },
        textAlign: "center",
    },
    inputRoot: {
        fontSize: 15,
        textAlign: "center",
        borderBottom: "0px ",
        //display: "none",
    },
}); });
var CustomCss = withStyles({
    "@global": {
        ".MuiTextField-root": {
            "& input[type='time']::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                display: "none",
            },
        },
    },
})(function () { return null; });
export var TimeSelector = function (_a) {
    var onChange = _a.onChange, name = _a.name, value = _a.value;
    var classes = useStyles();
    return (_jsxs("div", __assign({ className: classes.container }, { children: [_jsx(CustomCss, {}, void 0), _jsx(TextField, { id: "time", type: "time", value: value, onChange: onChange, name: name, className: classes.textField, InputProps: { classes: { root: classes.inputRoot } } }, void 0)] }), void 0));
};
