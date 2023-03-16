import { makeStyles } from "@mui/styles";
export var usePasswordValidatorStyles = makeStyles(function (theme) { return ({
    root: {
        position: "relative",
        display: 'flex',
        alignItems: 'center',
        color: theme.design.colors.waz_grey600,
        marginBottom: theme.spacing(1.2),
    },
    iconWrapper: {
        width: '12px',
        height: '12px',
        borderRadius: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.design.colors.waz_grey600,
        color: "white",
        marginRight: theme.spacing(.4)
    },
    iconSuccess: {
        backgroundColor: theme.design.colors.waz_primaryColor100
    },
    iconError: {
        backgroundColor: theme.design.colors.error
    },
    labelSuccess: {
        color: theme.design.colors.waz_primaryColor100
    },
    labelError: {
        color: theme.design.colors.error
    },
    labelDefault: {
        color: 'inherit'
    }
}); });
