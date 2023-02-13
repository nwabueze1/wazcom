import { makeStyles } from "@mui/styles";
import { BaseTheme } from "theme";

import { TabStyleProps } from "./types"

export const useTabStyles = makeStyles((theme: BaseTheme) => ({
    root: (props: TabStyleProps) => ({
        display: 'flex',
        flexDirection: props.variant === 'vertical' ? 'column' : 'row',
        justifyContent: props.variant === 'vertical' ? 'start' : '',
        fontSize: theme.typography.fontSize,
        width: "100%"
    }),
    tabs: (props: TabStyleProps) => ({
        width: props.variant === 'vertical' ? (props.width ?? '100%') : 200,
        height: props.variant === 'vertical' ? (props.height ?? '100%') : 300,
        minWidth: props.variant === 'vertical' ? '100%' : 200,
        minHeight: props.variant === 'vertical' ? '100%' : 300,
        display: props.variant === 'vertical' ? 'flex' : '',
        justifyContent: props.variant === 'vertical' ? 'start' : '',
        gap: props.variant === 'vertical' ? '20px' : '',
        padding: theme.spacing(2),
        background: theme.design.colors.white,
        marginRight: theme.spacing(2),
        borderRadius: theme.spacing(.5)
    }),
    tab: (props: TabStyleProps) => ({
        height: props.variant === 'vertical' ? 30 : '',
        display: props.variant === 'vertical' ? 'flex' : '',
        justifyContent: props.variant === 'vertical' ? 'center' : '',
        alignItems: props.variant === 'vertical' ? 'center' : '',
        background: props.variant === 'vertical' ? (props.backgroundColor ?? '#F7FCF8') : '',
        color: props.variant === 'vertical' ? (props.color ?? theme.design.colors.waz_black) : '',
        borderWidth: props.borderWidth ?? 1,
        borderStyle: props.borderStyle ?? 'solid',
        borderColor: props.variant === 'vertical' ? (props.borderColor ?? '#F7FCF8') : theme.design.colors.primary700,
        borderRadius: props.variant === 'vertical' ? (props.borderRadius ?? 14) : theme.spacing(.5),
        padding: theme.spacing(1.7, 2),
        marginBottom: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        cursor: 'pointer',
        transition: 'all .5s ease-out',
        '&:hover': {
            color: props.variant === 'vertical' ? (props.color ?? theme.design.colors.primary100) : theme.design.colors.primary200,
            borderColor: props.variant === 'vertical' ? (props.borderColor ?? theme.design.colors.primary500) : theme.design.colors.primary500,
        }
    }),
    tabIsActive: (props: TabStyleProps) => ({
        background: props.variant === 'vertical' ? (props.backgroundColor ?? theme.design.colors.primary100) : '',
        color: props.variant === 'vertical' ? (props.color ?? theme.design.colors.waz_white) : '',
        borderColor: props.variant === 'vertical' ? (props.borderColor ?? theme.design.colors.primary100) : theme.design.colors.primary100,
        '&:hover': {
            color: props.variant === 'vertical' ? (props.color ?? theme.design.colors.waz_white) : theme.design.colors.primary200,
            borderColor: props.variant === 'vertical' ? (props.borderColor ?? theme.design.colors.primary100) : theme.design.colors.primary500,
        }
    }),
    contentWrapper: {
        padding: theme.spacing(1.7, 2),
        background: theme.design.colors.white,
        flex: '100',
        borderRadius: theme.spacing(.5)
    },
    content: {
        display: 'none'
    },
    contentIsActive: {
        display: 'block'
    }
}));