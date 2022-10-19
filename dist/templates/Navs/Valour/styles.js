import makeStyles from "@mui/styles/makeStyles";
export var useValourStyles = makeStyles(function (theme) { return ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        fontFamily: theme.design.font.openSans,
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
        width: "50px !important",
        border: '1px solid transparent',
        transition: 'all 0.3s ease-in',
    },
    linksContainer: {
        display: "flex",
        flexDirection: "row",
        gap: theme.spacing(4),
        position: 'relative',
        left: '30%',
        marginRight: theme.spacing(3),
    },
    link: {
        color: theme.design.colors.waz_black,
        textDecoration: "none",
        fontSize: theme.typography.fontSize,
        cursor: "pointer",
        border: '1px solid transparent',
        transition: 'all 0.3s ease-in',
    },
    socialsContainer: {
        display: "flex",
        flexDirection: "row",
        gap: theme.spacing(3),
    },
    socialIntegration: {
        color: theme.design.colors.waz_black,
        border: '1px solid transparent',
        transition: 'all 0.3s ease-in',
    },
    logoAndLinksContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    hivedeckLogo: {
        width: "90px",
        height: "30px",
        border: '1px solid transparent',
        transition: 'all 0.3s ease-in',
    },
    activeElement: {
        border: '1px dashed',
        borderColor: theme.design.colors.waz_primaryColor100,
    }
}); });
