import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { TextField } from "@mui/material";
import { useTimePickerStyles } from "./styles";
import withStyles from '@mui/styles/withStyles';
var CustomCss = withStyles(function (theme) { return ({
    "@global": {
        ".MuiTextField-root": {
            "& input[type='time']::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                display: "none",
            },
        },
        ".MuiOutlinedInput-notchedOutline": {
            border: "solid 1px ".concat(theme.design.colors.waz_grey5),
            borderRadius: 5,
            "&:hover": {
                borderColor: "".concat(theme.design.colors.waz_grey5),
                outline: "none",
            },
            "&:focus": {
                borderColor: "".concat(theme.design.colors.waz_grey5),
            },
        },
        ".Mui-focused.MuiOutlinedInput-notchedOutline": {
            border: "solid 1px ".concat(theme.design.colors.waz_grey5),
            "&:hover": {
                borderColor: "".concat(theme.design.colors.waz_grey5),
                outline: "none",
            },
            "&:focus": {
                borderColor: "".concat(theme.design.colors.waz_grey5),
            },
        },
    },
}); })(function () { return null; });
export var TimeSelector = function (_a) {
    var onChange = _a.onChange, name = _a.name, value = _a.value;
    var classes = useTimePickerStyles();
    return (_jsxs(React.Fragment, { children: [_jsx(CustomCss, {}, void 0), _jsx(TextField, { id: "time", type: "time", value: value, onChange: onChange, name: name, className: classes.textField, sx: {}, InputProps: { classes: { root: classes.inputRoot } } }, void 0)] }, void 0));
};
