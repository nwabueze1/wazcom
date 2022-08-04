import { InputBase } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';
export var menuItemTableStyles = makeStyles(function (theme) {
    return createStyles({
        siteTypeSelect: {
            width: "6em",
        },
        option: {
            background: "red"
        },
        dayPicker: {
            border: "1px solid ".concat(theme.design.colors.waz_grey300),
            borderRadius: "5px",
            height: "50px",
            width: "140%",
            paddingInline: theme.spacing(2),
        },
    });
});
export var BootstrapInput = withStyles(function (theme) {
    return createStyles({
        root: {
            "label + &": {
                marginTop: theme.spacing(3),
            },
        },
        input: {
            borderRadius: 5,
            position: "relative",
            fontSize: 16,
            padding: theme.spacing(0, 1.5),
            height: 40,
            transition: theme.transitions.create(["border-color", "box-shadow"]),
            fontFamily: [
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(","),
            "&:focus": {
                borderRadius: 5,
            },
        },
    });
})(InputBase);
