import makeStyles from "@mui/styles/makeStyles";
export var useColorInputStyles = makeStyles(function (theme) { return ({
    root: {
        width: "fit-content",
        position: "relative",
    },
    colorInput: {
        width: "15px",
        height: "17px",
        cursor: "pointer",
        borderRadius: "2px",
        border: "1px solid ".concat(theme.design.colors.waz_primary700),
    },
    colorPicker: {
        marginTop: theme.spacing(0.5),
        position: "absolute",
        right: 0,
        zIndex: 10,
        fontFamily: "".concat(theme.design.font.openSans, " !important"),
    },
}); });
