import makeStyles from "@mui/styles/makeStyles";
export var useEmbedOptionStyles = makeStyles(function (theme) { return ({
    option: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flext-start',
        height: theme.spacing(5.75),
        '&:hover': {
            background: theme.design.colors.waz_primary700,
            cursor: 'pointer'
        },
    },
    optionItemIcon: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '14',
        height: '12.67',
        marginLeft: theme.spacing(1),
    },
    optionItemRight: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        marginLeft: theme.spacing(1),
    },
    optionItemTitle: {
        fontSize: theme.typography.fontSize,
        fontWeight: 800,
    },
    optionItemSpan: {
        fontSize: theme.typography.fontSize * 0.67,
        color: theme.design.colors.waz_grey1
    }
}); });
