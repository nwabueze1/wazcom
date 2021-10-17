import { makeStyles } from "@material-ui/core/styles";
export var useTextStyles = makeStyles(function () { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 15,
    },
    label: {
        marginBottom: 9,
        fontSize: "1rem",
        fontWeight: 700,
    },
}); });
