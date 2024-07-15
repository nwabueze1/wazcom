import makeStyles from "@mui/styles/makeStyles";
export var useNoirStyles = makeStyles(function (theme) { return ({
    root: {
        background: theme.design.colors.waz_black,
        fontFamily: theme.design.font.openSans,
        color: theme.design.colors.waz_white,
    },
    footerContent: {
        display: "flex",
        justifyContent: "space-around",
        padding: theme.spacing(6),
    },
    footerLogoSocials: {
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
    },
    footerLogoParent: {
        cursor: "pointer",
        border: "1px solid transparent",
        transition: "all 0.3s ease-in",
    },
    footerLogo: {
        width: "100%",
        height: 50,
        objectFit: "cover",
        marginBottom: theme.spacing(1),
    },
    footerLogoText: {
        color: theme.design.colors.waz_white,
        fontSize: theme.typography.fontSize + 1,
        textAlign: "center",
    },
    footerSocials: {
        display: "flex",
        alignItems: "flex-end",
        margin: theme.spacing(3, 0, 0, 0),
        gap: theme.spacing(2),
    },
    footerSocialIcon: {
        fontSize: theme.typography.fontSize + 8,
        color: theme.design.colors.waz_white,
        border: "1px solid transparent",
        transition: "all 0.3s ease-in",
        cursor: "pointer",
    },
    footerSection: {
        border: "1px solid transparent",
        transition: "all 0.3s ease-in",
    },
    footerSectionTitle: {
        fontSize: theme.typography.fontSize + 1,
        marginBottom: theme.spacing(3),
        cursor: "pointer",
    },
    footerSectionLink: {
        fontSize: theme.typography.fontSize,
        marginBottom: theme.spacing(2),
        cursor: "pointer",
        border: "1px solid transparent",
        transition: "all 0.3s ease-in",
        "&:last-of-type": {
            marginBottom: 0,
        },
    },
    activeElement: {
        border: "1px dashed",
        borderColor: theme.design.colors.waz_primaryColor100,
    },
}); });
