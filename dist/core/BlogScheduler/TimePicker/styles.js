import makeStyles from '@mui/styles/makeStyles';
export var useTimePickerStyles = makeStyles(function (theme) { return ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    textField: {
        color: "transparent",
        textAlign: "center",
        "& input[type='time']::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            display: "none",
        },
        '& input[type="time"]::-webkit-calendar-picker-indicator': {
            height: "20px",
            width: "20px"
        },
    },
    inputRoot: {
        fontSize: 15,
        textAlign: "center",
        borderBottom: "0px ",
        "&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: theme.design.colors.waz_primaryColor100,
            outline: theme.design.colors.waz_primaryColor100,
        },
        "&:hover": {
            outline: "none"
        },
    },
}); });
