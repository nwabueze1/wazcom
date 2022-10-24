import makeStyles from "@mui/styles/makeStyles";
export var useHeroStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: {},
        container: (_a = {
                height: "400px",
                position: "relative"
            },
            _a[theme.breakpoints.down("sm")] = {
                height: 200,
            },
            _a),
        restaurantCoverImg: {
            position: "absolute",
            objectFit: "cover",
            objectPosition: "center",
            height: "100%",
            width: "100%",
        },
    });
});
