import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useTextInputStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
        margin: 0,
        height: '100vh'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        gap: theme.spacing(5)
    },
    header: {
        width: '70vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        gap: theme.spacing(1)
    },
    title: {
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.h1.fontSize,
        color: theme.design.colors.waz_primaryBlack,
        margin: 0,
        padding: 0
    },
    description: {
        margin: 0,
        padding: 0,
        fontSize: theme.typography.h5.fontSize,
    },
    inputContainer: {
        background: theme.design.background.waz_primaryWhite,
        border: '1px solid #E8E8E8',
        borderRadius: 3,
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '40px'
    },
    inputs: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: theme.spacing(4),
        margin: 0,
        padding: 0
    },
    input: {
        width: '100%',
        height: '34px'
    }
}));