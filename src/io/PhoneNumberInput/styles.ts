import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import { createStyles } from "@mui/styles";

export const usePhoneNumberInputStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            border: `1px solid ${theme.design.colors.grey900}`,
            width: "100%",
            borderRadius: 4,
            "&:focus": {
                border: 0,
            },
            "&.react-tel-input .form-control": {
                width: "100%",
                border: "none",
            },
            "&.react-tel-input .flag-dropdown": {
                border: "none",
                background: "none",
                borderRight: `1px solid ${theme.design.colors.grey900}`,
            },
        },
        textInput: {
            height: 40,
            width: "100%",
            borderRadius: 4,
            fontSize: theme.typography.fontSize + 4,
            background: theme.design.colors.white,
            border: "none",
            padding: theme.spacing(2, 1),
            "&:focus": {
                outline: "none",
                border: `1px solid ${theme.design.colors.primary100}`,
            },
            "&::-webkit-input-placeholder": {
                color: theme.design.colors.grey300,
            },
        },
        dropDown: {
            borderRight: `1px solid ${theme.design.colors.grey900}`,
        },
    }),
);
