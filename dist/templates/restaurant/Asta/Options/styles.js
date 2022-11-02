import makeStyles from "@mui/styles/makeStyles";
export var useOptionsStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: (_a = {
                width: "100%",
                fontFamily: theme.typography.fontFamily,
                "& .MuiPaper-elevation1": {
                    boxShadow: "none !important",
                },
                "& .MuiAccordion-root.Mui-expanded": {
                    margin: 0,
                }
            },
            _a[theme.breakpoints.down("sm")] = {
                margin: theme.spacing(3, 0, 11),
            },
            _a),
    });
});
