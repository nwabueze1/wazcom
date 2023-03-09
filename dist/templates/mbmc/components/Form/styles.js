import { makeStyles } from "@mui/styles";
export var useFormStyles = makeStyles(function (theme) { return ({
    root: {
        fontFamily: theme.design.font.montserrat,
    },
    formButton: {
        width: "100% !important",
        marginTop: theme.spacing(1),
    },
}); });
