import { makeStyles } from "@mui/styles";
export var useMbmcBlock6Styles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: {
            backgroundColor: theme.design.colors.waz_greyColor50,
            position: "relative",
            padding: theme.spacing(10, 0),
        },
        block6Container: {
            maxWidth: 1240,
            width: "90%",
            margin: "0 auto",
        },
        block6Content: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column",
            marginBottom: theme.spacing(4),
        },
        block6Title: (_a = {
                color: theme.design.colors.waz_primaryColor300,
                fontSize: theme.typography.fontSize * 4,
                letterSpacing: 0,
                textTransform: "capitalize",
                font: "normal normal medium 68px/100px Losta Masta;",
                margin: 0,
                textAlign: "center",
                marginBottom: theme.spacing(2),
                fontFamily: theme.design.font.lostaMasta
            },
            _a[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize * 2,
            },
            _a),
        block6Description: (_b = {
                color: theme.design.colors.waz_greyColor600,
                textAlign: "center",
                fontSize: theme.typography.fontSize + 6,
                width: "60%",
                fontFamily: theme.design.font.montserrat,
                marginBottom: theme.spacing(2),
                lineHeight: 1.5
            },
            _b[theme.breakpoints.down("md")] = {
                marginBottom: theme.spacing(1),
                fontSize: theme.typography.fontSize + 4,
                width: '90%',
            },
            _b[theme.breakpoints.down("sm")] = {
                marginBottom: theme.spacing(1),
                fontSize: theme.typography.fontSize + 4,
                width: '100%',
            },
            _b),
        block6ScrollContainer: {
            display: "flex",
            gap: theme.spacing(2.5),
            overflowX: "scroll",
            width: "100%",
            "&::-webkit-scrollbar": {
                display: "none",
            },
        },
    });
});
