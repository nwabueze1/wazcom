import { makeStyles } from "@mui/styles";
export var useDeliveryStyles = makeStyles(function (theme) { return ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(3),
    },
    deliveryForm: {
        marginTop: theme.spacing(3),
    },
    deliveryInputParent: {
        marginBottom: theme.spacing(3),
    },
    deliveryInput: {
        "& > div": {
            borderRadius: 100,
        },
        "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            padding: theme.spacing(1.5, 3),
        }
    },
    deliveryFeedback: {
        marginTop: theme.spacing(1),
    }
}); });
