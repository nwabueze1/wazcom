import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useSevynStyles = makeStyles<Theme>((theme: Theme) => ({
    root: {
        background: theme.design.colors.waz_black,
        fontFamily: theme.design.font.openSans,
        color: theme.design.colors.waz_white,
    },
    footerContent: {
        padding: theme.spacing(5, 4, 3, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    footerLogoParent: {
        cursor: 'pointer',
        border: '1px solid transparent',
        transition: 'all 0.3s ease-in',
    },
    footerLogo: {
        width: 100,
        height: 50,
        objectFit: "cover",
        marginBottom: theme.spacing(1),
    },
    footerLogoText: {
        color: theme.design.colors.waz_white,
        fontSize: theme.typography.fontSize,
        textAlign: 'center',
    },
    footerSections: {
        marginTop: theme.spacing(3),
        display: "flex",
        justifyContent: "space-around",
        width: '100%',
    },
    footerSection: {
        border: '1px solid transparent',
        transition: 'all 0.3s ease-in',
        marginBottom: theme.spacing(2),
        textAlign: 'center',
    },
    footerSectionTitle: {
        fontSize: theme.typography.fontSize + 1,
        marginBottom: theme.spacing(3),
        cursor: 'pointer',
    },
    footerSectionLink: {
        fontSize: theme.typography.fontSize,
        marginBottom: theme.spacing(2),
        cursor: 'pointer',
        border: '1px solid transparent',
        transition: 'all 0.3s ease-in',

        "&:last-of-type": {
            marginBottom: 0,
        }
    },
    footerSocials: {
        position: 'relative',
        top: -12,
        display: 'flex',
        gap: theme.spacing(1.5),
        marginTop: theme.spacing(4),
    },
    footerSocialParent: {
        width: 25,
        height: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.design.colors.waz_white,
        borderRadius: '50%',
        cursor: 'pointer',
        border: '1px solid transparent',
        transition: 'all 0.3s ease-in',
    },
    footerSocialIcon: {
        color: theme.design.colors.waz_black,
        fontSize: theme.typography.fontSize + 3,
    },
    activeElement: {
        border: '1px dashed',
        borderColor: theme.design.colors.waz_primaryColor100,
    }
}));
