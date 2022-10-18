import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useValourStyles = makeStyles<Theme>((theme: Theme) => ({
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
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(3, 2),
        },
    },
    logo: {
        height: "40px",
        width: "50px !important",
    },
    linksContainer: {
        display: "flex",
        flexDirection: "row",
        gap: theme.spacing(4),
        position: 'relative',
        left: '30%',
        marginRight: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            gap: theme.spacing(2),
            left: 20,
        },
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
    },
    socialIntegration: {
        color: theme.design.colors.waz_black,
    },
    logoAndLinksContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    hivedeckLogo: {
        width: "90px",
        height: "30px",
    },
}));
