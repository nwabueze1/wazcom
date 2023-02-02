import { makeStyles } from "@mui/styles";
export var useCheckoutStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: (_a = {
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                width: "44%",
                margin: theme.spacing(2, 0)
            },
            _a[theme.breakpoints.down("md")] = {
                transition: "all 0.5s ease-in",
                background: theme.design.colors.waz_grey50,
                boxSizing: "border-box",
                width: "100vw",
                position: "fixed",
                top: 0,
                height: "100vh",
                overflowY: "scroll",
                left: function (_a) {
                    var display = _a.display;
                    return (display ? 0 : "100vw");
                },
                zIndex: 10,
                padding: theme.spacing(4, 1.5, 1.5, 1.5),
                margin: 0,
            },
            _a),
        checkoutTitle: (_b = {
                alignItems: "center",
                fontFamily: theme.design.font.lostaMasta,
                fontSize: theme.typography.fontSize * 2,
                fontWeight: theme.typography.fontWeightMedium,
                gap: theme.spacing(1.5),
                display: "none"
            },
            _b[theme.breakpoints.down("md")] = {
                display: "flex",
            },
            _b),
    });
});
