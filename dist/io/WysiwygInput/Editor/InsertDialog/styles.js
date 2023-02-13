import makeStyles from "@mui/styles/makeStyles";
export var useInsertDialogStyles = makeStyles(function (theme) { return ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        zIndex: 10,
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        overFow: 'auto',
        backgroundColor: 'rgba(0,0,0,0.25)',
        boxShadow: '0px 3px 6px #00000029',
    },
    modalContent: {
        display: 'flex',
        flexDirection: 'column',
        background: theme.design.colors.waz_white,
        borderRadius: theme.spacing(0.5),
        width: '64%',
        height: 'auto',
        border: '0px',
        padding: theme.spacing(3),
    },
    modalHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalHeaderText: {
        fontSize: theme.typography.fontSize * 1.33,
        fontWeight: 800,
        marginBottom: theme.spacing(2),
    },
    closeModal: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        fontSize: theme.typography.fontSize * 1.33,
        background: theme.design.colors.waz_white
    },
    sourceProvider: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    sourceTitle: {
        fontSize: theme.typography.fontSize - 2,
        color: theme.design.colors.grey,
        marginBottom: theme.spacing(1)
    },
    sourceContent: {
        borderRadius: theme.spacing(0.5),
        border: "1px solid ".concat(theme.design.colors.primary700),
        padding: theme.spacing(1),
        background: theme.design.colors.white100,
        marginBottom: theme.spacing(2),
    },
    sourceInput: {
        border: "1px solid ".concat(theme.design.colors.primary700),
        borderRadius: theme.spacing(0.5),
        background: theme.design.colors.white100,
        padding: theme.spacing(1),
        '&::placeHolder': {
            fontSize: theme.typography.fontSize,
            color: theme.design.colors.grey100,
            opacity: '100%'
        }
    },
    modalButtons: {
        display: 'flex',
        flexDirection: 'row',
    },
    embedButton: {
        margin: theme.spacing(2, 1.5, 0, 0),
        border: 'none',
        borderRadius: theme.spacing(0.5),
        background: theme.design.colors.waz_primaryColor100,
        padding: theme.spacing(1, 2, 1, 2),
        color: theme.design.colors.waz_white,
        fontSize: theme.typography.fontSize + 2
    },
    cancelButton: {
        marginTop: theme.spacing(2),
        border: "1px solid ".concat(theme.design.colors.primary700),
        borderRadius: theme.spacing(0.5),
        background: theme.design.colors.waz_white,
        padding: theme.spacing(1, 2, 1, 2),
        color: theme.design.colors.waz_grey1,
        fontSize: theme.typography.fontSize + 2
    }
}); });
