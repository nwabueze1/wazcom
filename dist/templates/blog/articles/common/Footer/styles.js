import { makeStyles } from "@mui/styles";
export var useFooterStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: (_a = {
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: theme.spacing(3, 0),
                color: theme.design.colors.waz_grey500,
                fontSize: theme.typography.fontSize,
                borderTop: "1px solid ".concat(theme.design.colors.waz_mercury),
                gap: theme.spacing(0.5),
                lineHeight: "18px"
            },
            _a[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(1.5, 0, 2, 0),
            },
            _a),
        link: {
            textDecoration: "none",
            color: theme.design.colors.waz_blue200,
        },
    });
});
