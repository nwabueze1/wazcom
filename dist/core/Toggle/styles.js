import { makeStyles } from "@material-ui/core";
export var useToggleStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    label: {
        // fontSize: "1rem",
        color: "#000",
    },
    addon: {
        width: "30%",
        background: "#EFEDED",
        border: "1px solid #BEBEBE",
    },
    inputControl: {
        display: "flex",
    },
    helperText: {
        color: "#FF0000",
        margin: "0",
    },
    toggle: {
        // padding: `${theme.spacing(1)}px 0`,
        margin: theme.spacing(1) + "px 0",
    },
}); });
