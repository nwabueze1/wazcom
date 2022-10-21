import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useBlaiseStyles = makeStyles<Theme>((theme: Theme) => ({
    root: {
        background: theme.design.colors.waz_black,
        fontFamily: theme.design.font.openSans,
        color: theme.design.colors.waz_white,
    },
    footerContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(5, 5, 4, 5),
    },
    footerSocials: {
        display: 'flex',
        gap: theme.spacing(1.5),
        marginBottom: theme.spacing(4),
    },
    footerSocialParent: {
        width: 35,
        height: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.design.colors.waz_white,
        borderRadius: '50%',
    },
    footerSocialIcon: {
        color: theme.design.colors.waz_black,
    },
    footerSectionLinks: {
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(1),
        marginBottom: theme.spacing(1.5),
    },
    footerSectionLink: {
        fontSize: theme.typography.fontSize + 1,
    },
    footerLogoParent: {
        marginTop: theme.spacing(1),
    },
    footerLogo: {
        width: 100,
        height: 50,
        objectFit: 'cover',
        marginBottom: theme.spacing(1),
    },
    footerLogoText: {
        color: theme.design.colors.waz_white,
        fontSize: theme.typography.fontSize + 1,
    },
}));
