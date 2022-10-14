import makeStyles from "@mui/styles/makeStyles";
export var useTaurantStyles = makeStyles(function (theme) { return ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        fontFamily: theme.design.font.lato,
    },
    paper: {
        backgroundColor: theme.design.colors.waz_white,
        borderRadius: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: theme.spacing(3, 4),
        alignItems: "center",
        maxHeight: "72px",
        boxShadow: 'none',
    },
    logo: {
        height: "40px",
        width: "50px",
    },
    linksContainer: {
        display: "flex",
        flexDirection: "row",
        gap: theme.spacing(4),
    },
    link: {
        color: theme.design.colors.waz_black,
        textDecoration: "none",
        fontSize: theme.typography.fontSize,
        cursor: "pointer",
    },
    socialsContainer: {
        display: "flex",
        flexDirection: "row",
        gap: theme.spacing(3),
        marginTop: theme.spacing(0.5),
    },
    socialIntegration: {
        color: theme.design.colors.waz_black,
    },
    hivedeckLogo: {
        width: "90px",
        height: "30px",
    },
    content: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: theme.spacing(0, "auto"),
        gap: theme.spacing(4),
    },
}); });
