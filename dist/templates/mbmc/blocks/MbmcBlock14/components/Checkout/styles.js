import { makeStyles } from "@mui/styles";
export var useCheckoutStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: (_a = {
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                width: "44%",
                margin: theme.spacing(2, 0)
            },
            _a[theme.breakpoints.down("lg")] = {
                zIndex: -1,
                position: "absolute",
                width: "100%",
                visibility: "hidden",
                opacity: 0,
                transition: "visibility 1s ease, opacity 1s ease",
            },
            _a)
    });
});
