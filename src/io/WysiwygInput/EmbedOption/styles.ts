import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useEmbedOptionStyles = makeStyles((theme: Theme) => ({
    option: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flext-start',
        height: theme.spacing(5.75),
        
        '&:hover' : {
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
        fontWeight: theme.typography.fontWeightBold,
    
    },
    optionItemSpan: {
        fontSize: theme.typography.fontSize * 0.67,
        color: theme.design.colors.waz_grey1
    }
}));
