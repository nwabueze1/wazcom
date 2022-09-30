import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useTimePickerStyles = makeStyles((theme: Theme) => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    textField: {
        color: "transparent",
        textAlign: "center",
        width: "200px",
        height: "40px",
        border: `1px solid ${theme.design.colors.waz_grey300}`,
        borderRadius: "5px",
        "& input[type='time']::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
            {
                display: "none",
            },
        '& input[type="time"]::-webkit-calendar-picker-indicator': {
            display: "none",
        },
    },
    inputRoot: {
        fontSize: theme.typography.fontSize + 3,
        textAlign: "center",
        borderBottom: 0,
        height: "40px",
        width: "100%",
        border: `1px solid ${theme.design.colors.waz_grey300}`,
        "&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: theme.design.colors.waz_primaryColor100,
            outline: theme.design.colors.waz_primaryColor100,
        },
        "&:hover": {
            outline: "none",
        },
    },
    scheduleIcon: {
        color: theme.design.colors.waz_black,
    },
}));
