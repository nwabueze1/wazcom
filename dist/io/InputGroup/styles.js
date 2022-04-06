import { makeStyles } from "@mui/styles";
export var useInputGroupStyles = makeStyles(function (theme) { return ({
    root: {},
    inputGroup: {
        position: "relative",
    },
    inputText: {
        position: "absolute",
        top: 2,
        left: 2,
        width: "30%",
        height: "calc(100% - 4px)",
        background: theme.design.colors.mercury,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    textInput: {
        paddingLeft: "30%",
    },
}); });
