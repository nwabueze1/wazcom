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
        background: "#CCCFCD",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        position: "absolute",
        top: 10,
        left: 10,
        height: "calc(100% - 2px)",
        color: theme.design.colors.waz_greenishGrey,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(0.5, 0, 0, 0.5),
    },
    textInput: {
        paddingLeft: "25%",
    },
    groupInput: {
        paddingLeft: "5%",
    },
}); });
