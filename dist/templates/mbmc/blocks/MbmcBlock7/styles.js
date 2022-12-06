import { makeStyles } from "@mui/styles";
export var useMbmcBlock7Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d;
    return ({
        root: (_a = {
                backgroundColor: theme.design.colors.waz_white,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "100%",
                boxSizing: "border-box",
                padding: theme.spacing(12, 0)
            },
            _a[theme.breakpoints.down("lg")] = {
                padding: theme.spacing(8, 0),
            },
            _a[theme.breakpoints.down("md")] = {
                height: "100%",
                padding: theme.spacing(5, 0),
            },
            _a[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(4, 0),
            },
            _a),
        headerContent: {
            width: "85%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column",
            marginBottom: theme.spacing(2),
            maxWidth: 1720,
        },
        headerTitle: (_b = {
                color: theme.design.colors.waz_primaryColor300,
                fontSize: theme.typography.fontSize * 4,
                letterSpacing: 0,
                textTransform: "capitalize",
                font: "normal normal medium 68px/100px Losta Masta;",
                margin: 0,
                textAlign: "center",
                marginBottom: theme.spacing(2),
                fontFamily: theme.design.font.lostaMasta,
                border: "1px solid transparent"
            },
            _b[theme.breakpoints.down(1450)] = {
                fontSize: theme.typography.fontSize * 3,
            },
            _b[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize * 2,
            },
            _b[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize * 2,
            },
            _b[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize * 1.5,
                fontWeight: 800,
                marginBottom: theme.spacing(1),
                width: "100%",
            },
            _b),
        headerDescription: (_c = {
                color: theme.design.colors.waz_greyColor600,
                textAlign: "center",
                fontSize: theme.typography.fontSize + 6,
                width: "38%",
                fontFamily: theme.design.font.montserrat,
                marginBottom: theme.spacing(6),
                border: "1px solid transparent"
            },
            _c[theme.breakpoints.down(1450)] = {
                fontSize: theme.typography.fontSize + 3,
            },
            _c[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize + 3,
                marginBottom: theme.spacing(4),
                width: "70%",
            },
            _c[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize + 2,
                marginBottom: theme.spacing(2),
            },
            _c[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _c),
        imageContainer: (_d = {
                width: "100%",
                borderRadius: 4,
                objectFit: "cover",
                height: "23.7vw",
                maxHeight: "341px"
            },
            _d[theme.breakpoints.down("sm")] = {
                height: "116px",
            },
            _d),
        flexGrow: {
            gridRow: "1 / span 2",
            gridColumn: "3/3",
            height: "100%",
        },
        smallImageContainer: {
            height: "340px",
        },
        mobileImageContainer: {
            width: "100%",
            height: "116px",
            objectFit: "cover",
            borderRadius: 4,
        },
        mobileCardContainer: {
            width: "85%",
            maxWidth: 1720,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: theme.spacing(1),
            height: "fit-content",
        },
        block7ActiveElement: {
            border: "1px dashed",
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    });
});
