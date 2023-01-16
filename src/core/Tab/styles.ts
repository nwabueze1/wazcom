import { makeStyles } from "@mui/styles";
import { BaseTheme } from "theme";

import { TabStyleProps } from "./types"

export const useTabStyles = makeStyles((theme: BaseTheme) => ({
    root: (props: TabStyleProps) => ({
        display: 'flex',
        flexDirection: props.variant === 'vertical' ? 'column' : 'row',
        // justifyContent: props.variant === 'vertical' ? 'start' : '',
        fontSize: theme.typography.fontSize,
        width: "100%"
    }),
    tabs: (props: TabStyleProps) => ({
        minWidth: props.variant === 'vertical' ? '100%' : 200,
        minHeight: props.variant === 'vertical' ? '100%' : 300,
        padding: theme.spacing(2),
        background: theme.design.colors.white,
        marginRight: theme.spacing(2),
        borderRadius: theme.spacing(.5)
    }),
    tab: {
        border: `1px solid ${theme.design.colors.primary700}`,
        padding: theme.spacing(1.7, 2),
        marginBottom: theme.spacing(1),
        borderRadius: theme.spacing(.5),
        fontWeight: theme.typography.fontWeightMedium,
        cursor: 'pointer',
        transition: 'all .5s ease-out',
        '&:hover': {
            color: theme.design.colors.primary200,
            border: `1px solid ${theme.design.colors.primary500}`,
        }
    },
    tabIsActive: {
        border: `1px solid ${theme.design.colors.primary100}`,
    },
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