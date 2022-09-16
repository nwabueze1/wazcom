import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { TextField } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
// import withStyles from '@mui/styles/withStyles';
var useStyles = makeStyles(function (theme) { return ({
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
        "&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: theme.design.colors.waz_primaryColor100,
            outline: theme.design.colors.waz_primaryColor100,
        },
        "&:hover": {
            outline: "none"
        },
    },
}); });
export var TimeSelector = function (_a) {
    var onChange = _a.onChange, name = _a.name, value = _a.value;
    var classes = useStyles();
    return (_jsx(React.Fragment, { children: _jsx(TextField, { id: "time", type: "time", value: value, onChange: onChange, name: name, className: classes.textField, InputProps: { classes: { root: classes.inputRoot } } }) }));
};
