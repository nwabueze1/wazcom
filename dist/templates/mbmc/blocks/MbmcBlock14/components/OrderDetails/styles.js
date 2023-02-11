import { makeStyles } from "@mui/styles";
export var useOrderDetailsStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: (_a = {
                width: "44%",
                background: theme.design.colors.waz_white,
                fontFamily: theme.design.font.montserrat,
                paddingBottom: theme.spacing(4),
                height: "fit-content"
            },
            _a[theme.breakpoints.down("md")] = {
                transition: "all 0.5s ease-in",
                background: theme.design.colors.waz_white,
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
        detailsArrow: (_b = {
                margin: theme.spacing(0, 0, 0, 4),
                display: "none"
            },
            _b[theme.breakpoints.down("md")] = {
                display: "block",
            },
            _b),
        detailsTitle: {
            fontSize: theme.typography.fontSize + 6,
            fontFamily: theme.design.font.lostaMasta,
            marginBottom: theme.spacing(3),
            margin: theme.spacing(4, 0, 4, 4),
        },
        detailsParent: {
            borderBottom: "1px solid",
            borderBottomColor: "#E3DFDF",
            marginBottom: theme.spacing(3),
        },
        details: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: theme.spacing(0, 4, 3, 4),
            fontSize: theme.typography.fontSize + 2,
        },
        detailsInfo: {
            fontWeight: theme.typography.fontWeightBold,
        },
        detailsBadge: {
            fontSize: theme.typography.fontSize,
            padding: theme.spacing(1),
            border: "1px solid",
            borderColor: theme.design.colors.waz_lightOrange,
            borderRadius: 16,
        },
        detailsNotification: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: theme.typography.fontSize + 2,
            gap: theme.spacing(1),
            marginTop: theme.spacing(1),
            "& .icon": {
                color: theme.design.colors.waz_primaryColor100,
                fontSize: theme.typography.fontSize + 4,
            },
        },
    });
});
