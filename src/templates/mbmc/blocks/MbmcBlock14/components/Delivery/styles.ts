import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useDeliveryStyles = makeStyles((theme: Theme) => ({
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
        borderRadius: 100,
        padding: theme.spacing(1.5, 3),
        height: 52,
    },
    deliveryFeedback: {
        marginTop: theme.spacing(1),
    }
}));