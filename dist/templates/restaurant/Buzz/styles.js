import makeStyles from "@mui/styles/makeStyles";
export var useBuzzStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: {
            fontFamily: theme.design.font.openSans,
        },
        restaurant: {
            position: "relative",
        },
        body: (_a = {
                position: "absolute",
                top: 345
            },
            _a[theme.breakpoints.down("sm")] = {
                position: "relative",
                top: 0,
            },
            _a),
        nav: (_b = {
                position: "absolute",
                zIndex: 20,
                top: 20
            },
            _b[theme.breakpoints.down("sm")] = {
                position: "relative",
                top: 0,
            },
            _b),
    });
});
