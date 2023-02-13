import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useSelectStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'start',
        alignItems: 'start',
        position: "relative",
        width: '100%'
    },
    container: {
        width: '100%',
        height: '100%'
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
        borderColor: `${theme.design.colors.waz_primary500} !important`,
        fontFamily: theme.typography.fontFamily,
        fontWeight: 400,
        fontSize: theme.typography.fontSize,
        '&:hover': {
            borderColor: `${theme.design.colors.waz_primary600} !important`,
        },
        '&:focus': {
            borderColor: theme.design.colors.waz_primary500,
        },
        '&:hover:focus': {
            borderColor: theme.design.colors.waz_primary500,
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
        borderColor: `${theme.design.colors.waz_primary500} !important`,
        boxShadow: 'none !important',
        '&:hover': {
            borderColor: theme.design.colors.waz_primary600,
        },
    },
    option: {
        backgroundColor: `${theme.design.colors.waz_primary900} !important`
    }
}));