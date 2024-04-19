import { makeStyles } from "@mui/styles";
export var useWrapperStyles = makeStyles(function (theme) { return ({
    root: {
        margin: 0,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: theme.spacing(2.5),
    },
    header: {
        width: "70vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: theme.spacing(1),
    },
    title: {
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.h1.fontSize,
        color: theme.design.colors.waz_primaryBlack,
        margin: 0,
        padding: 0,
    },
    wrapper: { paddingBottom: theme.spacing(2) },
    description: {
        margin: 0,
        padding: 0,
        width: "60vw",
    },
    descriptionText: {
        fontSize: theme.typography.h5.fontSize,
        lineSpacing: theme.spacing(22),
    },
}); });
