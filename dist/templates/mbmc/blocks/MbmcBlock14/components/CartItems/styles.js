import { makeStyles } from "@mui/styles";
export var useCartItemsStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: (_a = {
                maxHeight: "85vh",
                overflowY: "auto",
                width: "45%",
                "&::-webkit-scrollbar": {
                    display: "none",
                }
            },
            _a[theme.breakpoints.down("lg")] = {
                padding: theme.spacing(5, 1, 6),
                maxHeight: "unset",
                width: "100%",
                zIndex: 1,
                position: "absolute",
                height: "100%",
                transition: "visibility 1s ease, opacity 1s ease",
                visibility: "visible",
                opacity: 1,
            },
            _a)
    });
});
