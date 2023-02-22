import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TextInputIconStyleProps, TextBaseProps } from "./types";

export const useTextStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'start',
    },
    label: {
        fontSize: theme.typography.fontSize - 2,
        display: "flex",
        marginBottom: theme.spacing(1),
        color: theme.design.colors.waz_grey,
        alignItems: "center",
        textTransform: "uppercase",
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(-.5, .5, 0, .5),
    },
    baseInput: (props: TextBaseProps) => ({
        display: 'flex',
        padding: '8px 12px',
        height: props.height ?? 34,
        width: props.width ?? '100%',
        background: props.background ?? theme.design.colors.white100,
        color: props.color ?? theme.design.colors.waz_primaryBlack,
        borderWidth: props?.borderWidth ?? 1,
        borderStyle: props?.borderStyle ?? 'solid',
        borderRadius: props?.borderRadius ?? 4,
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.fontSize,
        borderColor: props?.borderColor ?? theme.design.colors.waz_primary700,
        
        '&:hover': {
            borderColor: theme.design.colors.waz_primary500,
        },
        '&:focus, &:hover:focus, &:active': {
            borderColor: theme.design.colors.waz_primary400,
        },
    }),
    baseTextArea: (props: TextBaseProps) => ({
        display: 'flex',
        padding: 10,
        outline: 0,
        width: "100%",
        fontFamily: theme.design.font.openSans,
        background: props.background ?? theme.design.colors.white100,
        color: props.color ?? theme.design.colors.waz_primaryBlack,
        borderWidth: props?.borderWidth ?? 1,
        borderStyle: props?.borderStyle ?? 'solid',
        borderRadius: props?.borderRadius ?? 4,
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.fontSize,
        borderColor: props?.borderColor ?? theme.design.colors.primary700,
        '&:hover': {
            borderColor: theme.design.colors.waz_primary500,
        },
        '&:focus, &:hover:focus, &:active': {
            borderColor: theme.design.colors.waz_primary400,
        },
    }),
    defaultInput: (props: TextBaseProps) => ({
        borderColor: props?.borderColor ?? theme.design.colors.waz_primary700,
        '&:hover': {
            borderColor: theme.design.colors.waz_primary500,
        },
        '&:focus, &:hover:focus, &:active': {
            borderColor: theme.design.colors.waz_primary400,
        },
    }),
    focusedInput: (props: TextBaseProps) => ({
        borderColor: props?.borderColor ?? theme.design.colors.waz_primary400,
        '&:hover, &:focus, &:hover:focus, &:active': {
            borderColor: theme.design.colors.waz_primary400,
        },
    }),
    errorInput: () => ({
        borderColor: theme.design.colors.error,
        '&:hover, &:focus, &:hover:focus, &:active': {
            borderColor: theme.design.colors.error,
        },
    }),
    successInput: () => ({
        borderColor: theme.design.colors.waz_primaryColor100,
        '&:hover, &:focus, &:hover:focus, &:active': {
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    }),
    input: {
        display: 'flex',
        width: '100%',
        background: 'transparent',
        border: 0,
        outline: "none",
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.fontSize,
    },
    textAreaContainer: {
        padding: 0,
        margin: 0,
        border: 0,
        width: '100%'
    },
    textAreaInput: {
        padding: 0,
        margin: 0,
        border: 0
    },
    wordCount: {},
    labelWrapper: {
        display: 'flex',
        justifyContent: "space-between",
        width: '100%'
    },
    helperTextDefault: {
        display: 'flex',
        width: '100%',
        letterSpacing: 0,
        fontSize: theme.typography.fontSize - 1,
        textAlign: 'left',
        marginTop: 4
    },
    helperTextSuccess: {
        color: theme.design.colors.waz_primaryColor100,
    },
    helperTextError: {
        color: theme.design.colors.error,
    }
}));

export const useTextInputIconStyles = makeStyles(() => ({
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
