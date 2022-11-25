import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const usePaymentStyles = makeStyles((theme: Theme) => ({
    root: {},
    paymentButton: {
        marginTop: theme.spacing(1),
        width: '100%',
    }
}));