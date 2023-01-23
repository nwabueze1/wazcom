import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useInsertDialogStyles = makeStyles((theme: Theme) => ({
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
    modalHeaderText : {
        fontSize: theme.typography.fontSize*1.33,
        fontWeight: 800,
    },
    closeModal: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        fontSize: theme.typography.fontSize*1.33,
        background: theme.design.colors.waz_white
    },
}));
