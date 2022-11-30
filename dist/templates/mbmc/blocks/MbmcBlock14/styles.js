import { makeStyles } from "@mui/styles";
export var useMbmcBlock14Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e;
    return ({
        root: (_a = {
                backgroundColor: theme.design.colors.waz_greyColor50,
                minHeight: "90vh",
                position: "relative"
            },
            _a[theme.breakpoints.down("md")] = {
                minHeight: "unset",
            },
            _a),
        block14Container: (_b = {
                boxSizing: "border-box",
                padding: theme.spacing(8.5, 0),
                maxWidth: 1720,
                width: "85%",
                margin: "0 auto"
            },
            _b[theme.breakpoints.down("lg")] = {
                width: "90%",
            },
            _b[theme.breakpoints.down("md")] = {
                padding: theme.spacing(4, 0),
            },
            _b),
        block14Title: (_c = {
                fontFamily: theme.design.font.lostaMasta,
                fontSize: theme.typography.fontSize * 4,
                marginBottom: theme.spacing(4)
            },
            _c[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize * 3,
            },
            _c[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize * 2.5,
                marginBottom: theme.spacing(2),
            },
            _c),
        block14CartContent: {
            display: "flex",
            gap: theme.spacing(8),
            justifyContent: "space-between",
        },
        block14Divider: (_d = {
                borderLeft: "solid 1px ".concat(theme.design.colors.waz_greyColor150),
                margin: theme.spacing(2, 0)
            },
            _d[theme.breakpoints.down("md")] = {
                display: "none",
            },
            _d),
        block14Action: (_e = {
                display: "none",
                position: "sticky",
                left: 0,
                bottom: 0,
                width: "100%",
                background: theme.design.colors.waz_white,
                justifyContent: "center",
                alignItems: "center",
                padding: theme.spacing(2, 0)
            },
            _e[theme.breakpoints.down("md")] = {
                display: "flex",
            },
            _e),
    });
});
