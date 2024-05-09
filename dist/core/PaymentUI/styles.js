import { makeStyles } from "@mui/styles";
export var usePaymentStyles = makeStyles(function (theme) { return ({
    root: {
        fontFamily: "inherit",
        color: "#5C5D66",
    },
    paymentHeading: {
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(5),
        borderBottom: "1px solid #272727",
        fontWeight: theme.typography.fontWeightBold,
        "& p": {
            fontSize: theme.typography.fontSize + 8,
        },
    },
    paymentSubheading: {
        marginBottom: theme.spacing(4),
        "& .heading": {
            fontSize: theme.typography.fontSize + 6,
            marginBottom: theme.spacing(1),
            fontWeight: theme.typography.fontWeightBold,
        },
        "& .description": {
            fontSize: theme.typography.fontSize,
        },
    },
    paymentButton: {
        marginTop: theme.spacing(1),
        width: "100% !important",
    },
    paymentEmptyText: {
        fontSize: theme.typography.fontSize + 4,
        fontFamily: "inherit",
    },
}); });
