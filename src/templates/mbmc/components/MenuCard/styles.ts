import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { StyleProps } from "./types";

export const useServiceCardStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
    createStyles({
        root: {
            width: 388,
            height: 417,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: theme.spacing(1),
            background: theme.design.colors.waz_white,
            borderRadius: "4px",
            border: `1px solid ${theme.design.colors.waz_grey300}`,
            opacity: 0.2,
            boxSizing: "border-box",
            position: "relative",
            cursor: ({ isOpen }) => (isOpen ? "pointer" : "default"),
            margin: theme.spacing(1, 0),
            transition: " boxShadow 1s ease",
            "&:hover": {
                boxShadow: ({ isOpen }) =>
                    isOpen ? "0px 5px 18px -2px rgba(68, 68, 68, 0.12)" : "none",
            },
            [theme.breakpoints.down("lg")]: {
                height: 300,
            },
            [theme.breakpoints.down("md")]: {
                height: 230,
            },
            [theme.breakpoints.down("sm")]: {
                height: 417,
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
            padding: theme.spacing(2, 0),
            width: "100%",
            [theme.breakpoints.down("md")]: {
                padding: 0,
            },
            [theme.breakpoints.down("sm")]: {
                padding: 0,
            },
        },
        imageWrapper: {
            width: "100%",
            height: 277,
            display: "flex",
            borderRadius: "4px",
            overflow: "hidden",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            [theme.breakpoints.down("md")]: {
                height: 230,
                width: "100%",
            },
            [theme.breakpoints.down("xs")]: {
                height: "60%",
                width: "100px",
            },
            [theme.breakpoints.down("sm")]: {
                height: 350,
                width: "100%",
            },
        },
        image: {
            width: "100%",
            height: "auto",
            objectFit: "cover",
            boxSizing: "border-box",
        },

        title: {
            fontSize: theme.typography.fontSize * 2,
            marginTop: theme.spacing(1),
            textOverflow: "ellipsis",
            lineHeight: "25px",
            color: theme.design.colors.waz_black,
            textTransform: "capitalize",
            fontWeight: theme.typography.fontWeightMedium,
            [theme.breakpoints.down("md")]: {
                fontSize: theme.typography.fontSize + 6,
            },
        },
        description: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            lineHeight: "22px",
            textOverflow: "ellipsis",
            fontSize: theme.typography.fontSize + 2,
            color: theme.design.colors.waz_grey400,
            opacity: 0.9,
            display: "-webkit-box",
            "-webkit-line-clamp": 2,
            "-webkit-box-orient": "vertical",
            overflow: "hidden",
        },
        menuHeaderContainer: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
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
        price: {
            color: theme.design.colors.waz_primaryColor200,
        },
        visible: {
            opacity: "1",
        },
    }),
);
