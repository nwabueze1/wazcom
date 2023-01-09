import { makeStyles } from "@mui/styles";
export var useTabStyles = makeStyles(function (theme) { return ({
    root: {
        display: 'flex',
        fontSize: theme.typography.fontSize,
        width: "100%"
    },
    tabs: {
        minWidth: 200,
        minHeight: 300,
        padding: theme.spacing(2),
        background: theme.design.colors.white,
        marginRight: theme.spacing(2),
        borderRadius: theme.spacing(.5)
    },
    tab: {
        border: "1px solid ".concat(theme.design.colors.primary700),
        padding: theme.spacing(1.7, 2),
        marginBottom: theme.spacing(1),
        borderRadius: theme.spacing(.5),
        fontWeight: theme.typography.fontWeightMedium,
        cursor: 'pointer',
        transition: 'all .5s ease-out',
        '&:hover': {
            color: theme.design.colors.primary200,
            border: "1px solid ".concat(theme.design.colors.primary500),
        }
    },
    tabIsActive: {
        border: "1px solid ".concat(theme.design.colors.primary100),
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
}); });
