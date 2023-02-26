import { makeStyles } from "@mui/styles";
export var useMbmcBlock6Styles = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        root: {
            backgroundColor: theme.design.colors.waz_greyColor50,
            position: "relative",
            padding: theme.spacing(10, 0),
        },
        block6Container: (_a = {
                maxWidth: 1720,
                width: "85%",
                margin: "0 auto"
            },
            _a[theme.breakpoints.down("lg")] = {
                width: "90%",
            },
            _a),
        block6Content: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column",
            marginBottom: theme.spacing(4),
        },
        block6Heading: (_b = {
                color: theme.design.colors.waz_primaryColor300,
                fontSize: theme.typography.fontSize * 4,
                letterSpacing: 0,
                textTransform: "capitalize",
                margin: 0,
                textAlign: "center",
                marginBottom: theme.spacing(2),
                fontFamily: theme.design.font.lostaMasta,
                border: "1px solid transparent",
                transition: "all 0.3s ease-in"
            },
            _b[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize * 2,
            },
            _b),
        block6Description: (_c = {
                color: theme.design.colors.waz_greyColor600,
                textAlign: "center",
                fontSize: theme.typography.fontSize + 6,
                width: "60%",
                fontFamily: theme.design.font.montserrat,
                marginBottom: theme.spacing(2),
                lineHeight: 1.5,
                border: "1px solid transparent",
                transition: "all 0.3s ease-in"
            },
            _c[theme.breakpoints.down("md")] = {
                marginBottom: theme.spacing(1),
                fontSize: theme.typography.fontSize + 4,
                width: "90%",
            },
            _c[theme.breakpoints.down("sm")] = {
                marginBottom: theme.spacing(1),
                fontSize: theme.typography.fontSize + 4,
                width: "100%",
            },
            _c),
        block6ScrollContainer: {
            display: "flex",
            gap: theme.spacing(2.5),
            overflowX: "scroll",
            width: "100%",
            "&::-webkit-scrollbar": {
                display: "none",
            },
        },
        block6ActiveElement: {
            border: "1px dashed",
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    });
});
