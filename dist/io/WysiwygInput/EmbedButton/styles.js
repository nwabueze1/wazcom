import makeStyles from "@mui/styles/makeStyles";
export var useInsertButtonStyles = makeStyles(function (theme) { return ({
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
        margin: theme.spacing(3, 0, 0.5, 2),
        '&:hover': {
            cursor: 'pointer'
        }
    },
    selectOption: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        width: theme.spacing(34.625),
        border: '0px',
        borderRadius: theme.spacing(0.5),
        margin: theme.spacing(0, 0, 0, 2),
        boxShadow: '0px 1px 4px #00000014',
        background: theme.design.colors.waz_white,
        zIndex: "9"
    },
    optionTitleSpan: {
        fontSize: theme.typography.fontSize,
        padding: theme.spacing(1, 1, 1, 1),
        fontWeight: 800,
        color: theme.design.colors.grey,
    },
    options: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    linkIcon: {
        fontSize: theme.typography.fontSize + 4,
    },
    showOptions: {
        display: 'flex'
    },
    hideOptions: {
        display: 'none'
    }
}); });
