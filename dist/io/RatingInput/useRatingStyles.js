import makeStyles from "@mui/styles/makeStyles";
export var useRatingStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        ratingContainer: (_a = {
                display: "flex",
                gap: theme.spacing(2)
            },
            _a[theme.breakpoints.down("lg")] = {
                gap: theme.spacing(1),
            },
            _a.flexWrap = "wrap",
            _a),
        containedFilled: (_b = {
                fill: theme.design.colors.waz_primary700,
                fontSize: theme.typography.fontSize * 2,
                cursor: "pointer",
                "&.filled": {
                    fill: theme.design.colors.waz_primary100,
                }
            },
            _b[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize + 4,
            },
            _b),
    });
});
