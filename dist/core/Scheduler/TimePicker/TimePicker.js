import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { TextField } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';
var useStyles = makeStyles(function () { return ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    textField: {
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
    return (_jsxs(React.Fragment, { children: [_jsx(CustomCss, {}, void 0), _jsx(TextField, { id: "time", type: "time", value: value, onChange: onChange, name: name, className: classes.textField, InputProps: { classes: { root: classes.inputRoot } } }, void 0)] }, void 0));
};
