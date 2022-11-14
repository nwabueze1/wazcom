import { makeStyles } from "@mui/styles";
export var useMbmcBlock10Styles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: (_a = {
                backgroundColor: theme.design.colors.waz_gold100,
                overflow: "hidden",
                padding: theme.spacing(3, 8),
                width: "calc(100% - 128px)",
                gap: theme.spacing(2),
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            _a[theme.breakpoints.down("md")] = {
                height: "100%",
                padding: theme.spacing(2, 4),
                width: "calc(100% - 64px)",
            },
            _a[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(1),
                height: "fit-content",
                width: "calc(100% - 16px)",
            },
            _a),
        menuContainer: {
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& > p": (_b = {
                    padding: theme.spacing(2, 4),
                    display: "flex",
                    alignItems: "center",
                    fontFamily: theme.design.font.montserrat,
                    fontSize: theme.typography.fontSize + 2
                },
                _b[theme.breakpoints.down("sm")] = {
                    fontSize: theme.typography.fontSize - 2,
                    padding: theme.spacing(1, 2),
                },
                _b["& > img"] = {
                    marginRight: theme.spacing(1),
                },
                _b),
        },
        border: {
            borderRight: "1px solid hsla(12, 73%, 56%, 1)",
        },
    });
});
