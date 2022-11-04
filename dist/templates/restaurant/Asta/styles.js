import makeStyles from "@mui/styles/makeStyles";
export var useBuzzStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e;
    return ({
        root: (_a = {
                fontFamily: theme.design.font.openSans
            },
            _a[theme.breakpoints.down("md")] = {
                overflowX: "hidden",
            },
            _a),
        restaurant: {
            position: "relative",
        },
        body: (_b = {
                top: 345
            },
            _b[theme.breakpoints.down("sm")] = {
                position: "relative",
                top: 0,
            },
            _b),
        nav: (_c = {
                zIndex: 20,
                top: 20
            },
            _c[theme.breakpoints.down("sm")] = {
                position: "relative",
                top: 0,
            },
            _c),
        layout: {
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
        },
        mainContainer: (_d = {
                width: "70%"
            },
            _d[theme.breakpoints.down("md")] = {
                width: "100%",
            },
            _d),
        cartContainer: (_e = {
                width: "30%",
                border: "1px solid ".concat(theme.design.colors.waz_grey300),
                height: "100%",
                minHeight: "100vh",
                position: "sticky",
                top: 0,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center"
            },
            _e[theme.breakpoints.down("md")] = {
                display: "none",
            },
            _e),
    });
});
