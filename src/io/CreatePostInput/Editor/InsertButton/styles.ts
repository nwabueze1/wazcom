import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useInsertButtonStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'relative'
    },
    insertButton: {
        background: theme.design.colors.primary700,
        borderRadius: '50%',
        width: theme.spacing(4),
        height: theme.spacing(4),
        fontSize: theme.typography.fontSize * 1.5,
        border: '0px',
        margin: theme.spacing(0, 0, 0.5, 2),
        zIndex: "1"
    },
    selectOption: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        width: "277px",
        height: "181px",
        border: '0px',
        borderRadius: "3px",
        margin: theme.spacing(0, 0, 0, 2),
        boxShadow: '0px 1px 4px #00000014',
        background: theme.design.colors.waz_white,
        zIndex: "99"
    },
    optionTitleSpan: {
        fontSize: theme.typography.fontSize,
        padding: theme.spacing(1, 1, 1, 1),
        fontWeight: 800,
        color: theme.design.colors.grey,
    },
    Options: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    option: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flext-start',
        height: '46px',
        '&:hover' : {
            background: theme.design.colors.primary700
        }
    },
    optionItemIcon: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '13.33',
        height: '10.67',
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
    },
    showOptions: {
        display: 'flex'
    },
    hideOptions: {
        display: 'none'
    }
}));
