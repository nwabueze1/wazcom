import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TextInputIconStyleProps } from "./types";

export const useTextStyles = makeStyles((theme: Theme) => ({
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
    inputContainer: {
        height: 34,
        background: `${theme.design.colors.white100} 0% 0% no-repeat padding-box`,
        border: `1px solid ${theme.design.colors.primary700}`,
        borderRadius: 4,
        fontWeight: 400,
        fontSize: theme.typography.fontSize,
        '&:hover': {
            borderColor: theme.design.colors.primary600,
        },
        '&:focus': {
            borderColor: theme.design.colors.primary500,
        },
        '&:hover:focus': {
            borderColor: theme.design.colors.primary500,
        },
    },
    input: {
        width: '100%',
        padding: '8px 12px',
        background: 'transparent',
        border: 0,
        outline: "none",
        fontFamily: theme.typography.fontFamily,
        fontWeight: 400,
        fontSize: theme.typography.fontSize,
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
    textAreaInput: {
        height: "auto"
    },
    wordCount: {
    },
    labelWrapper: {
        display: 'flex',
        justifyContent: "space-between"
    }
}));

export const useTextInputIconStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'relative',
        backgroundColor: 'transparent',
        display: 'inline-flex',
        alignSelf: 'center',
        flexShrink: 0
    },
    iconSpacing: (props: TextInputIconStyleProps) => ({
        marginRight: `${props.marginRight}px`,
        marginLeft: `${props.marginLeft}px`,
    })
}));
