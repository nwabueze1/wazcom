import { makeStyles } from "@mui/styles";
export var useInputStyles = makeStyles(function (theme) { return ({
    root: {
        width: "100%",
        heigth: "34px",
        display: "flex",
    },
    file: {
        width: "0.1px",
        height: "0.1px",
        opacity: "0",
        overflow: "hidden",
        position: "absolute",
        zIndex: -1,
    },
    inverted: {
        flexDirection: "row-reverse",
    },
    buttonParent: {
        width: "30%",
    },
    span: {
        display: "flex",
        justifyContent: "center",
        padding: theme.spacing(1),
        color: theme.design.colors.grey3,
        borderRadius: "5px",
        margin: 0,
        fontSize: theme.typography.fontSize * 1.3,
        alignItems: "center",
        background: theme.design.colors.lightGrey,
        "&:hover": {
            background: theme.design.colors.gray40,
        }
    },
    label: {
        background: theme.design.colors.lightGrey,
        height: "100%",
        display: "flex",
        color: theme.design.colors.grey3,
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        borderTopLeftRadius: theme.spacing(0.5),
        borderBottomLeftRadius: theme.spacing(0.5),
        "&:hover": {
            background: theme.design.colors.gray40,
        }
    },
}); });
