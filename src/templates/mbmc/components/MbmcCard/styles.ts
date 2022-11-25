import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";

export const useMbmcCardStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "30%",
            minHeight: 380,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: theme.spacing(1),
            background: theme.design.colors.waz_white,
            borderRadius: "4px",
            border: `1px solid ${theme.design.colors.waz_grey300}`,
            boxSizing: "border-box",
            position: "relative",
            cursor: "pointer",

            "&:hover": {
                boxShadow: "0px 5px 18px -2px rgba(68, 68, 68, 0.12)",
            },

            [theme.breakpoints.down("md")]: {
                width: "50%",
            },

            [theme.breakpoints.down("sm")]: {
                width: "80%",
            },
        },
        noMargin: {
            margin: "1% 0",
        },
        content: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "left",
            boxSizing: "border-box",
            padding: theme.spacing(2, 1),
            width: "100%",
        },
        ctas: {
            marginTop: theme.spacing(1),
        },
        imageWrapper: {
            width: "100%",
            height: 277,
            display: "flex",
            borderRadius: "4px",
            overflow: "hidden",
        },
        image: {
            width: "100%",
            height: "auto",
            objectFit: "cover",
            boxSizing: "border-box",
        },
        heading: {
            fontSize: theme.typography.fontSize * 2,
            marginTop: theme.spacing(1),
            textOverflow: "ellipsis",
            lineHeight: "25px",
            textTransform: "capitalize",
            fontWeight: theme.typography.fontWeightMedium,
            fontFamily: theme.design.font.lostaMasta,
            color: theme.design.colors.waz_black,

            [theme.breakpoints.down("md")]: {
                fontSize: theme.typography.fontSize + 6,
            },
        },
        description: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(0.5),
            lineHeight: "22px",
            textOverflow: "ellipsis",
            fontSize: theme.typography.fontSize + 2,
            color: theme.design.colors.waz_grey400,
            opacity: 0.9,
            fontFamily: theme.design.font.montserrat,
            overflow: "hidden",
        },
        options_parent: {
            position: "absolute",
            top: "1rem",
            right: "1rem",
        },
        options: {
            position: "absolute",
            top: "125%",
            left: "-70px",
            background: theme.design.colors.white,
            width: "120px",
            height: "92px",
            borderRadius: "10px",
            boxShadow: "0px 5px 18px -2px rgba(68, 68, 68, 0.12)",
            padding: theme.spacing(0, 1),
            opacity: 0,
            zIndex: -9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transition: "opacity 0.5s ease-in",
            border: `1px solid ${theme.design.colors.waz_grey50}`,
            "&:before": {
                position: "absolute",
                top: "-22px",
                left: "70px",
                display: "block",
                content: "''",
                border: `11px solid ${theme.design.colors.waz_grey50}`,
                borderRightColor: "transparent",
                borderLeftColor: "transparent",
                borderTopColor: "transparent",
            },
        },
        options_active: {
            opacity: 1,
            zIndex: 10,
        },
        option: {
            height: "50%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
            fontSize: "16px",
            cursor: "pointer",
        },
        option_edit: {
            borderBottom: "1px solid rgba(0,0,0,0.16)",
        },
        option_delete: {
            color: theme.design.colors.red,
        },
        visible: {
            opacity: "1",
        },
        cardActiveElement: {
            border: "1px dashed",
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    }),
);
