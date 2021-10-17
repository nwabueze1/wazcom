import { InputBase } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';
export var menuItemTableStyles = makeStyles(function () {
    return createStyles({
        siteTypeSelect: {
            width: "6em",
        },
        option: {
            background: "red",
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
            borderRadius: 4,
            background: "white",
            position: "relative",
            backgroundColor: theme.palette.background.paper,
            //border: "1px solid #ced4da",
            fontSize: 16,
            // padding: "10px 26px 10px 12px",
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
                borderRadius: 4,
                borderColor: "#80bdff",
                boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
            },
        },
    });
})(InputBase);
