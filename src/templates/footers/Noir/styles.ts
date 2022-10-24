import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useNoirStyles = makeStyles<Theme>((theme: Theme) => ({
    root: {
        background: theme.design.colors.waz_black,
        fontFamily: theme.design.font.openSans,
        color: theme.design.colors.waz_white,
    },
    footerContent: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: theme.spacing(6),
    },
    footerLogoSocials: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
    },
    footerLogoParent: {
    
    },
    footerLogo: {
        width: 100,
        height: 50,
        objectFit: 'cover',
        marginBottom: theme.spacing(1),
    },
    footerLogoText: {
        color: theme.design.colors.waz_white,
    },
    footerSocials: {
        display: 'flex',
        alignItems: 'flex-end',
        margin: theme.spacing(3, 0, 0, 0),
        gap: theme.spacing(2),
    },
    footerSocialIcon: {
        fontSize: theme.typography.fontSize + 8,
        color: theme.design.colors.waz_white,
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
    }
}));
