import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TextInputIconStyleProps, TextBaseProps } from "./types";

export const useTextStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
    },
    label: {
        fontSize: theme.typography.fontSize - 2,
        display: "flex",
        marginBottom: 4,
        color: theme.design.colors.waz_grey,
        alignItems: "center",
        letterSpacing: "0.13px",
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
        background: `${props.background ?? theme.design.colors.white100} 0% 0% no-repeat padding-box`,
        color: props.color ?? theme.design.colors.waz_primaryBlack,
        borderWidth: props?.borderWidth ?? 1,
        borderStyle: props?.borderStyle ?? 'solid',
        borderRadius: props?.borderRadius ?? 4,
        fontWeight: 400,
        fontSize: theme.typography.fontSize,
        borderColor: props?.borderColor ?? theme.design.colors.primary700,
        '&:hover': {
            borderColor: theme.design.colors.primary500,
        },
        '&:focus, &:hover:focus, &:active': {
            borderColor: theme.design.colors.primary400,
        },
    }),
    test: (props) => { console.log('PROPS', props.width); return {}},
    defaultInput: (props: TextBaseProps) => ({
        borderColor: props?.borderColor ?? theme.design.colors.primary700,
        '&:hover': {
            borderColor: theme.design.colors.primary500,
        },
        '&:focus, &:hover:focus, &:active': {
            borderColor: theme.design.colors.primary400,
        },
    }),
    errorInput: () => ({
        borderColor: theme.design.colors.error,
        '&:hover, &:focus, &:hover:focus, &:active': {
            borderColor: theme.design.colors.error,
        },
    }),
    // error: {
    //     border: `1px solid ${theme.design.colors.error}`,
    //     '&:hover': {
    //         borderColor: theme.design.colors.error,
    //     },
    //     '&:focus': {
    //         borderColor: theme.design.colors.error,
    //     },
    //     '&:hover:focus': {
    //         borderColor: theme.design.colors.error,
    //     },
    // },
    input: {
        width: '100%',
        background: 'transparent',
        border: 0,
        outline: "none",
        fontFamily: theme.typography.fontFamily,
        fontWeight: 400,
        fontSize: theme.typography.fontSize,
    },
    textAreaInput: {
        height: "auto"
    },
    wordCount: {
    },
    labelWrapper: {
        display: 'flex',
        justifyContent: "space-between",
        width: '100%'
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
