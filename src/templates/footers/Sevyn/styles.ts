import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useSevynStyles = makeStyles<Theme>((theme: Theme) => ({
    root: {
        background: theme.design.colors.waz_black,
        fontFamily: theme.design.font.openSans,
        color: theme.design.colors.waz_white,
    },
    footerContent: {
        padding: theme.spacing(5, 4, 4, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    footerLogoParent: {},
    footerLogo: {
        width: 100,
        height: 50,
        objectFit: "cover",
        marginBottom: theme.spacing(1),
    },
    footerLogoText: {
        color: theme.design.colors.waz_white,
        fontSize: theme.typography.fontSize,
    },
    footerSections: {
        marginTop: theme.spacing(3),
        display: "flex",
        justifyContent: "space-around",
        width: '100%',
    },
    footerSection: {

    },
    footerSectionTitle: {
        fontSize: theme.typography.fontSize + 3,
        marginBottom: theme.spacing(2),
    },
    footerSectionLink: {
        fontSize: theme.typography.fontSize + 1,
        marginBottom: theme.spacing(1),
    },
    footerSocials: {
        display: 'flex',
        gap: theme.spacing(1.5),
        marginTop: theme.spacing(4),
    },
    footerSocialParent: {
        width: 30,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.design.colors.waz_white,
        borderRadius: '50%',
    },
    footerSocialIcon: {
        color: theme.design.colors.waz_black,
    },
}));
