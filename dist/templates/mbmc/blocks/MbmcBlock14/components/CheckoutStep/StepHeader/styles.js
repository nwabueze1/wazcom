import { makeStyles } from "@mui/styles";
export var useStepHeaderStyles = makeStyles(function (theme) { return ({
    root: {
        width: '100%',
    },
    stepTitle: {
        fontFamily: theme.design.font.lostaMasta,
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: theme.typography.fontSize + 6,
        color: theme.design.colors.waz_black,
        opacity: 0.6,
        transition: 'opacity 0.3s ease-in',
    },
    stepSummaryHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    stepHeaderDelivery: {
        marginTop: theme.spacing(3),
    }
}); });
