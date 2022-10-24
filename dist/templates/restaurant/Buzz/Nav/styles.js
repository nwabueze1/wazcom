import makeStyles from "@mui/styles/makeStyles";
export var useNavStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e;
    return ({
        root: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
        },
        header: (_a = {
                width: "88%",
                maxWidth: theme.include.styles.maxWidth,
                margin: "0, auto",
                display: "flex",
                background: theme.design.colors.waz_white,
                borderRadius: "8px",
                justifyContent: "space-between",
                alignItems: "center",
                padding: theme.spacing(2, 3),
                zIndex: 10
            },
            _a[theme.breakpoints.down("lg")] = {
                width: "100%",
                borderRadius: 0,
            },
            _a[theme.breakpoints.down("sm")] = {
                flexDirection: "column",
                padding: 0,
                justifyContent: "flex-start",
                alignItems: "flex-start",
            },
            _a),
        logoContainer: (_b = {},
            _b[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(2, 3),
            },
            _b),
        headerLogo: (_c = {
                objectFit: "cover"
            },
            _c[theme.breakpoints.down("sm")] = {
                width: "120px",
            },
            _c),
        searchField: (_d = {
                borderRadius: "20px",
                width: "40%",
                marginBottom: 0,
                "& .MuiOutlinedInput-root": (_e = {
                        borderRadius: "20px"
                    },
                    _e[theme.breakpoints.down("sm")] = {
                        borderRadius: 0,
                    },
                    _e),
                "&.MuiOutlinedInput-input": {
                    padding: theme.spacing(1.5, 0),
                }
            },
            _d[theme.breakpoints.down("md")] = {
                width: "60%",
            },
            _d[theme.breakpoints.down("sm")] = {
                borderRadius: 0,
                width: "100%",
            },
            _d),
    });
});
