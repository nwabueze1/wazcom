import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useNavStyles = makeStyles<Theme>((theme: Theme) => ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
    header: {
        width: `calc(100% - ${theme.spacing(6)})`,
        maxWidth: theme.include.styles.maxWidth,
        margin: "0, auto",
        display: "flex",
        background: theme.design.colors.waz_white,
        borderRadius: "8px",
        justifyContent: "space-between",
        alignItems: "center",
        padding: theme.spacing(1.5, 6),
        zIndex: 10,
        [theme.breakpoints.down("lg")]: {
            width: `calc(100% - ${theme.spacing(6)})`,
            borderRadius: 0,
        },
        [theme.breakpoints.down("md")]: {
            width: `calc(100% - ${theme.spacing(4)})`,
            padding: theme.spacing(1.5, 4),
            borderRadius: 0,
        },
        [theme.breakpoints.down("sm")]: {
            padding: 0,
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
        },
    },
    logoContainer: {
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(2),
        },
    },
    mobileCartBtn: {
        display: "none",
        padding: theme.spacing(0, 2),
        [theme.breakpoints.down("sm")]: {
            display: "block",
        },
    },
    headerLogo: {
        objectFit: "cover",
        [theme.breakpoints.down("sm")]: {
            width: "120px",
        },
    },
    searchField: {
        borderRadius: "20px",
        width: "40%",
        marginBottom: 0,
        "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            height: 40,
            border: `1px solid ${theme.design.colors.waz_grey300}`,
            [theme.breakpoints.down("sm")]: {
                borderRadius: 0,
                width: "100%",
            },
        },
        "&.MuiOutlinedInput-input": {
            border: `1px solid ${theme.design.colors.waz_grey300}`,
        },
        [theme.breakpoints.down("md")]: {
            width: "60%",
        },
        [theme.breakpoints.down("sm")]: {
            borderRadius: 0,
            width: "100%",
        },
    },
    cartBtn: {
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        border: `1px solid ${theme.design.colors.waz_grey300}`,
        padding: theme.spacing(1, 2),
        fontSize: theme.typography.fontSize + 2,
        borderRadius: 30,
        cursor: "pointer",
    },
    cartIcon: {
        padding: theme.spacing(0.1, 0.5),
        fontWeight: 600,
        fontSize: theme.typography.fontSize + 6,
    },
    cartBtnContainer: {
        position: "relative",
        display: "none",
        [theme.breakpoints.down("md")]: {
            display: "block",
        },
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    cartPopup: {
        width: "350px",
        border: `1px solid ${theme.design.colors.waz_grey300}`,
        position: "absolute",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        top: "calc(100% + 3px)",
        right: 12,
        backgroundColor: theme.design.colors.waz_white,
        zIndex: 100,
    },
    cartPopupSm: {
        width: "100%",
        border: `1px solid ${theme.design.colors.waz_grey300}`,
        position: "fixed",
        display: "none",
        alignItems: "flex-start",
        justifyContent: "center",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: theme.design.colors.waz_white,
        background: theme.design.colors.waz_white,
        zIndex: 100,
        [theme.breakpoints.down("sm")]: {
            display: "flex",
        },
    },
    cartPopupOverlay: {
        width: "100vw",
        height: "100vh",
        backgroudColor: "red",
        position: "fixed",
        zIndex: 50,
        left: 0,
        bottom: 0,
    },
}));
