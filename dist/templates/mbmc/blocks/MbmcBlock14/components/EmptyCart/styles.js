import { makeStyles } from "@mui/styles";
export var useEmptyCartStyles = makeStyles(function (theme) { return ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    emptyCartImage: {
        width: 190,
        height: 190,
        objectFit: 'contain',
        marginBottom: theme.spacing(1),
    },
    emptyCartMessage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    emptyCartHeading: {
        fontSize: theme.typography.fontSize + 10,
        fontWeight: theme.typography.fontWeightMedium,
        marginBottom: theme.spacing(1),
        fontFamily: theme.design.font.lostaMasta,
    },
    emptyCartText: {
        fontFamily: theme.design.font.montserrat,
        fontSize: theme.typography.fontSize + 2,
        width: '75%',
        textAlign: 'center',
        lineHeight: 1.76
    }
}); });
