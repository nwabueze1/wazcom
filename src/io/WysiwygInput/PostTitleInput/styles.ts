import { Theme } from '@mui/material';
import { makeStyles } from "@mui/styles";

export const usePostTitleStyles = makeStyles((theme: Theme) => ({
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
        color: theme.design.colors.waz_greyColor400,
        alignItems: "center",
        letterSpacing: "0.13px",
        textTransform: "uppercase",
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(-.5, .5, 0, .5),
    },
    input: {
        height: theme.spacing(4.125),
        padding: theme.spacing(0,0,0,2),
        background: `${theme.design.colors.waz_white100} 0% 0% no-repeat padding-box`,
        border: `0px solid ${theme.design.colors.waz_primary700}`,
        borderRadius: 4,
        outline: "none",
        color: theme.design.colors.grey100,
        fontFamily: theme.typography.fontFamily,
        fontWeight: 800,
        fontSize: theme.typography.fontSize * 2,
        '&:hover': {
            borderColor: theme.design.colors.waz_primary600,
        },
        '&:focus': {
            borderColor: theme.design.colors.waz_primary500,
        },
        '&:hover:focus': {
            borderColor: theme.design.colors.waz_primary500,
        },
        '&::placeHolder': {
            fontWeight: 800,
            fontSize: theme.typography.fontSize * 2,
            color: theme.design.colors.grey100,
            opacity: '100%'
        }
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
