import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useTextInputStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
        margin: 0,
        height: '100vh',
        overflow: 'scroll'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
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
        width: '60vw'
    },
    descriptionText: {
        fontSize: theme.typography.h5.fontSize,
        lineSpacing: theme.spacing(22),
    },
    inputContainer: {
        background: theme.design.background.waz_primaryWhite,
        border: '1px solid #E8E8E8',
        borderRadius: 3,
        padding: '24px',
        paddingBottom: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '70px',
    },
    sections: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'start'
    },
    inputs: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'start',
        alignItems: 'start',
        gap: 50,
        margin: 0,
        padding: 0,
    },
    inputsHeader:{
        fontWeight: 700,
        fontSize: 16,
        letterSpacing: 0,
        lineSpacing: 24,
        color: theme.design.colors.waz_black
    },
    input: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 10px'
    },
}));