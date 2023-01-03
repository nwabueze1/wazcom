import { makeStyles } from "@mui/styles";
export var useTextStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        marginBottom: theme.spacing(2)
    },
    label: {
        fontSize: 10,
        display: "flex",
        marginBottom: 8,
        color: "#333333",
        alignItems: "center",
        letterSpacing: "0.13px",
        textTransform: "uppercase",
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(-.5, .5, 0, .5),
    },
    input: {
        height: 34,
        padding: '8px 12px',
        background: "".concat(theme.design.colors.grey, " 0% 0% no-repeat padding-box"),
        border: "1px solid ".concat(theme.design.colors.pri100),
        borderRadius: 4,
        outline: "none",
        fontFamily: theme.typography.fontFamily,
        fontWeight: 400,
        fontSize: 12,
        '&:hover': {
            borderColor: theme.design.colors.pri200,
        },
        '&:focus': {
            borderColor: theme.design.colors.pri400,
        },
        '&:hover:focus': {
            borderColor: theme.design.colors.pri400,
        },
    },
    error: {
        border: "1px solid ".concat(theme.design.colors.error),
        '&:hover': {
            borderColor: theme.design.colors.error,
        },
        '&:focus': {
            borderColor: theme.design.colors.error,
        },
        '&:hover:focus': {
            borderColor: theme.design.colors.error,
        },
    },
    textAreaInput: {
        height: "auto"
    },
    wordCount: {},
    labelWrapper: {
        display: 'flex',
        justifyContent: "space-between"
    }
}); });
