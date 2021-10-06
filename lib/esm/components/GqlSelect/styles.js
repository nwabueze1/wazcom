import { makeStyles } from "@material-ui/core/styles";
export var useSelectStyles = makeStyles(function (theme) { return ({
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
    loader: {
        marginBottom: theme.spacing(2),
        color: theme.design.colors.red70,
    }
}); });
