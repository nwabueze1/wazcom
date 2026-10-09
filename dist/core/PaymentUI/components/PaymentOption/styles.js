import { makeStyles } from "@mui/styles";
export var usePaymentOptionStyles = makeStyles(function (theme) { return ({
    root: {
        backgroundColor: theme.design.colors.waz_white,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: theme.spacing(3),
    },
    paymentOptionItem: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2.5),
    },
    paymentImage: {
        width: "100px",
        height: "40px",
        objectFit: "cover",
    },
    paymentOptionDetail: {
        fontFamily: "inherit",
    },
    paymentOptionTitle: {
        fontSize: theme.typography.fontSize + 2,
        color: "#00000",
        fontWeight: theme.typography.fontWeightMedium,
    },
    optionDetails: {
        display: "flex",
        alignItems: "center",
    },
    paymentConfig: {
        position: "relative",
        top: -8,
        padding: theme.spacing(0, 2),
        fontFamily: "inherit",
        fontSize: theme.typography.fontSize + 2,
    },
    paymentConfigOption: {
        marginBottom: theme.spacing(1),
    },
    paymentRadio: {
        position: "relative",
        left: -8,
        top: 2,
    }
}); });
