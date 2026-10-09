import makeStyles from "@mui/styles/makeStyles";
export var useBlaiseStyles = makeStyles(function (theme) { return ({
    root: {
        background: theme.design.colors.waz_black,
        fontFamily: theme.design.font.openSans,
        color: theme.design.colors.waz_white,
    },
    footerContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(5, 5, 4, 5),
    },
    footerSocials: {
        display: "flex",
        gap: theme.spacing(1.5),
        marginBottom: theme.spacing(3),
    },
    footerSocialParent: {
        width: 30,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme.design.colors.waz_white,
        borderRadius: "50%",
        cursor: "pointer",
        border: "1px solid transparent",
        transition: "all 0.3s ease-in",
    },
    footerSocialIcon: {
        color: theme.design.colors.waz_black,
    },
    footerSection: {
        marginBottom: theme.spacing(2),
    },
    footerSectionLinks: {
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(1),
        marginBottom: theme.spacing(1.5),
    },
    footerSectionLink: {
        fontSize: theme.typography.fontSize,
        cursor: "pointer",
        border: "1px solid transparent",
        transition: "all 0.3s ease-in",
    },
    footerLogoParent: {
        cursor: "pointer",
        border: "1px solid transparent",
        transition: "all 0.3s ease-in",
    },
    footerLogo: {
        width: 100,
        height: 50,
        objectFit: "cover",
    },
    footerLogoText: {
        marginTop: theme.spacing(1),
        color: theme.design.colors.waz_white,
        fontSize: theme.typography.fontSize + 1,
        textAlign: "center",
    },
    activeElement: {
        border: "1px dashed",
        borderColor: theme.design.colors.waz_primaryColor100,
    },
}); });
