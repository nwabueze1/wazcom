import { makeStyles } from "@mui/styles";
export var useInputGroupStyles = makeStyles(function (theme) { return ({
    root: {},
    inputGroup: {
        position: "relative",
    },
    text: {
        position: "absolute",
        top: 1,
        left: 1,
        width: "25%",
        height: "calc(100% - 2px)",
        display: "flex",
        background: theme.design.colors.waz_mercury,
        alignItems: "center",
    },
    textPosition: {
        justifyContent: "center",
    },
    icon: {
        padding: theme.spacing(0, 2),
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(0.5, 0, 0, 0.5),
    },
    textInput: {
        paddingLeft: "25%",
    },
}); });
