import { makeStyles } from "@mui/styles";
/** !!-- Remember to update the function name !! */
export var uploadStyles = makeStyles(function (theme) { return ({
    root: {
        minwidth: "384px",
        borderRadius: theme.spacing(0.5),
        border: "2px solid ".concat(theme.design.colors.grey4),
        color: theme.design.colors.waz_greyColor300,
        fontWeight: "bold",
        padding: theme.spacing(2, 3),
    },
    child: {
        borderRadius: "10px",
        padding: theme.spacing(2, 1),
        textAlign: "center",
        color: theme.design.colors.waz_greyColor300,
        margin: theme.spacing(3, 0),
        border: "2px dashed ".concat(theme.design.colors.grey4),
        "&:hover": {
            border: "2px dashed ".concat(theme.design.colors.waz_dangerColor300),
        },
    },
    uploadlogo: {
        fontSize: 50,
        color: theme.design.colors.grey3,
    },
    upload: {
        color: theme.design.colors.waz_dangerColor300,
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
        backgroundColor: theme.design.colors.waz_dangerColor300,
        borderRadius: "10px",
        color: theme.design.colors.waz_white,
        padding: theme.spacing(2, 1),
        textAlign: "center",
    },
    bar: {
        display: "flex",
        justifyContent: "space-between",
        margin: theme.spacing(2, 0),
    },
}); });
