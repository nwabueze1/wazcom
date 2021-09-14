import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";
/** !!-- Remember to update the function name !! */
export var uploadStyles = makeStyles(function () { return ({
    root: {
        minwidth: "384px",
        borderRadius: theme.spacing(0.5),
        border: "2px solid " + theme.design.colors.grey4,
        color: theme.design.colors.grey2,
        fontWeight: "bold",
        padding: theme.spacing(2, 3),
    },
    child: {
        borderRadius: "10px",
        padding: theme.spacing(2, 1),
        textAlign: "center",
        color: theme.design.colors.grey2,
        margin: theme.spacing(3, 0),
        border: "2px dashed " + theme.design.colors.grey4,
        "&:hover": {
            border: "2px dashed " + theme.design.colors.red70,
        },
    },
    uploadlogo: {
        fontSize: 50,
        color: theme.design.colors.grey3,
    },
    upload: {
        color: theme.design.colors.red70,
        fontWeight: "bold",
    },
    text: {
        marginTop: theme.spacing(3),
        fontWeight: "bold",
    },
    outerbox: {
        width: "100%",
        borderRadius: theme.spacing(0.5),
        backgroundColor: theme.design.colors.Gray40,
    },
    innerbox: {
        width: function (_a) {
            var width = _a.width;
            return width;
        },
        backgroundColor: theme.design.colors.red70,
        borderRadius: "10px",
        color: theme.design.colors.white,
        padding: theme.spacing(2, 1),
        textAlign: "center",
    },
    bar: {
        display: "flex",
        justifyContent: "space-between",
        margin: theme.spacing(2, 0),
    },
}); });
