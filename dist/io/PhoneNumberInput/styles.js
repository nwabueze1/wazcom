import makeStyles from "@mui/styles/makeStyles";
import { createStyles } from "@mui/styles";
export var usePhoneNumberInputStyles = makeStyles(function (theme) {
    return createStyles({
        root: {
            position: "relative",
            "& .react-tel-input .form-control": {
                paddingLeft: theme.spacing(5.5),
                borderRadius: theme.spacing(0.5),
                width: "100%",
            },
            "& .react-tel-input .flag-dropdown": {
                background: "transparent",
                border: "none",
                borderRadius: 0,
                "&::after": {
                    position: "absolute",
                    content: '""',
                    right: 0,
                    borderRight: "1px solid ".concat(theme.design.colors.waz_primary700),
                    height: "50%",
                    top: "50%",
                    transform: "translateY(-50%)",
                },
            },
            "& .selected-flag ": {
                background: "transparent",
                border: "none",
            },
            "& .phone__input": {
                height: "100%",
                border: "1px solid ".concat(theme.design.colors.waz_primary700),
                color: theme.design.colors.grey300,
                fontSize: theme.typography.fontSize,
                fontWeight: theme.typography.fontWeightLight,
                "&:hover": {
                    border: "1px solid ".concat(theme.design.colors.waz_primary500),
                },
            },
            "& .phone__container": {
                height: 34,
                background: theme.design.colors.white,
                border: "none",
            },
        },
        labelStyle: {
            fontSize: theme.typography.fontSize - 2,
            display: "flex",
            marginBottom: theme.spacing(0.5),
            color: theme.design.colors.waz_grey,
            alignItems: "center",
            textTransform: "uppercase",
        },
    });
});
