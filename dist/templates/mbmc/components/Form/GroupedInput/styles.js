import { makeStyles } from "@mui/styles";
export var useGroupedInputStyles = makeStyles(function (theme) { return ({
    root: {},
    groupedInputName: {
        fontFamily: theme.design.font.montserrat,
        marginBottom: theme.spacing(2),
        fontSize: theme.typography.fontSize - 1,
    },
}); });
