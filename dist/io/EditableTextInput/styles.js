import makeStyles from "@mui/styles/makeStyles";
export var useEditableTextStyles = makeStyles(function (theme) { return ({
    root: {
        margin: 0,
        width: "100%",
    },
    editableTextInput: {
        width: "100%",
        maxHeight: 40,
        minHeight: 40,
        outline: 0,
        margin: 0,
        padding: theme.spacing(1, 2),
        border: "1px solid ".concat(theme.design.colors.waz_primaryColor100),
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        color: theme.design.colors.waz_greyColor400,
        borderRadius: theme.spacing(0.5),
    },
    editTagContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    controlIcon: {
        fontSize: 20,
        padding: theme.spacing(0.5),
        borderRadius: 4,
        backgroundColor: "transparent",
        cursor: "pointer",
        marginRight: theme.spacing(0.5),
        color: theme.design.colors.waz_greyColor200,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        "&:hover": {
            backgroundColor: theme.design.colors.waz_greyColor200,
            transition: "all ease-in-out .5s",
            color: theme.design.colors.waz_black,
        },
    },
}); });
