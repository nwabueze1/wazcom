import { makeStyles } from "@mui/styles";
export var useInputGroupStyles = makeStyles(function () { return ({
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
        background: "#CCCFCD",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    textInput: {
        paddingLeft: "25%",
    },
}); });
