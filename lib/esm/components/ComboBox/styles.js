import { makeStyles } from "@material-ui/core/styles";
export var useComboBoxStyles = makeStyles(function () { return ({
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
    error_message: {
        color: "#EA3C53",
        margin: "0.8vh 0 0 0",
        fontSize: "16px",
    },
}); });
