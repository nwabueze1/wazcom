import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useSelectStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        marginBottom: theme.spacing(2)
    },
    label: {
        fontSize: theme.typography.fontSize - 2,
        display: "flex",
        marginBottom: 8,
        color: "#333333",
        alignItems: "center",
        letterSpacing: "0.13px",
        textTransform: "uppercase",
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(-.5, .5, 0, .5),
    },
    select: {
        height: 34,
        minHeight: 34,
        borderColor: `${theme.design.colors.pri100} !important`,
        fontFamily: theme.typography.fontFamily,
        fontWeight: 400,
        fontSize: theme.typography.fontSize,
        '&:hover': {
            borderColor: `${theme.design.colors.pri200} !important`,
        },
        '&:focus': {
            borderColor: theme.design.colors.pri400,
        },
        '&:hover:focus': {
            borderColor: theme.design.colors.pri400,
        },
    },
    error: {
        border: `1px solid ${theme.design.colors.error}`,
        '&:hover': {
            borderColor: theme.design.colors.error,
        },
        '&:focus': {
            borderColor: theme.design.colors.error,
        },
        '&:hover:focus': {
            borderColor: theme.design.colors.error,
        },
    },
    labelWrapper: {
        display: 'flex',
        justifyContent: "space-between"
    },
    control: {
        borderColor: `${theme.design.colors.pri400} !important`,
        boxShadow: 'none !important',
        '&:hover': {
            borderColor: theme.design.colors.pri200,
        },
    },
    option: {
        backgroundColor: `${theme.design.colors.pri200} !important`
    }
}));