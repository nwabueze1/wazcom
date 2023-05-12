import makeStyles from "@mui/styles/makeStyles";
export var useColorInputStyles = makeStyles(function (theme) { return ({
    root: {
        width: "fit-content",
    },
    colorInput: {
        width: "15px",
        height: "17px",
        cursor: "pointer",
        borderRadius: "2px",
    },
    colorPicker: {
        marginTop: theme.spacing(0.5),
    },
}); });
