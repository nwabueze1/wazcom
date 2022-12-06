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
            _a[theme.breakpoints.down("md")] = {
                width: '100%',
            },
            _a)
    });
});
