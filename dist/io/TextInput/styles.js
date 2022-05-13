import { makeStyles } from "@mui/styles";
export var useTextStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 15,
        position: "relative",
    },
    required: {
        color: "red",
        margin: theme.spacing(0.5, 0, 0, 0.5),
    },
}); });
