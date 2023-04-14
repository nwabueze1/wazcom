import { makeStyles } from "@mui/styles";
export var useTabStyles = makeStyles(function (theme) { return ({
    root: function (_a) {
        var variant = _a.variant;
        return ({
            display: "flex",
            flexDirection: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? "row" : "column",
            justifyContent: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? "start" : "",
            fontSize: theme.typography.fontSize,
            width: "100%",
        });
    },
    tabs: function (_a) {
        var variant = _a.variant, width = _a.width;
        return ({
            width: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? width !== null && width !== void 0 ? width : "fit-content" : "fit-content",
            minWidth: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? "fit-content" : 200,
            display: "flex",
            flexDirection: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? "column" : "row",
            justifyContent: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? "start" : "",
            gap: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? theme.spacing(2) : theme.spacing(1),
            padding: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? theme.spacing(2) : theme.spacing(0.5, 1),
            background: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical"))
                ? theme.design.colors.white
                : theme.design.colors.waz_primary900,
            marginRight: theme.spacing(2),
            borderRadius: theme.spacing(0.5),
            boxShadow: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical"))
                ? "0px 3px 6px ".concat(theme.design.colors.waz_black100)
                : "none",
            border: "1px solid transparent",
            borderColor: variant === "horizontal" ? theme.design.colors.waz_primary700 : "transparent",
        });
    },
    tab: function (_a) {
        var variant = _a.variant;
        return ({
            display: "flex",
            flexDirection: variant === "vertical-pill" ? "column" : "row",
            justifyContent: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? "flex-start" : "",
            alignItems: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? "center" : "",
            gap: theme.spacing(0.5),
            color: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? theme.design.colors.waz_grey1 : "",
            borderWidth: variant === "vertical-pill" ? 0 : 1,
            borderStyle: "solid",
            borderColor: theme.design.colors.waz_primary700,
            borderRadius: variant === "vertical"
                ? theme.spacing(0.5)
                : variant === "vertical-pill"
                    ? "32px 0px 0px 32px"
                    : 14,
            padding: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical"))
                ? theme.spacing(1.5, 5.5, 1.5, 2)
                : theme.spacing(0.75, 2),
            fontWeight: variant === "vertical-pill"
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
            cursor: "pointer",
            transition: "all .5s ease-out",
            "&:hover": {
                color: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical"))
                    ? theme.design.colors.waz_primaryColor100
                    : theme.design.colors.waz_primaryColor100,
                borderColor: theme.design.colors.waz_primary500,
            },
        });
    },
    tabIsActive: function (_a) {
        var variant = _a.variant;
        return ({
            background: variant === "vertical" ? "" : theme.design.colors.waz_primaryColor100,
            color: variant === "vertical"
                ? theme.design.colors.waz_primaryColor100
                : theme.design.colors.waz_white,
            borderColor: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical"))
                ? theme.design.colors.waz_primaryColor100
                : theme.design.colors.primary700,
            "&:hover": {
                color: variant === "vertical"
                    ? theme.design.colors.waz_primaryColor100
                    : theme.design.colors.waz_white,
                borderColor: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical"))
                    ? theme.design.colors.waz_primaryColor100
                    : theme.design.colors.primary500,
            },
        });
    },
    contentWrapper: {
        padding: theme.spacing(1.5, 2),
        background: theme.design.colors.white,
        flex: "100",
        borderRadius: theme.spacing(0.5),
    },
    content: {
        display: "none",
    },
    contentIsActive: {
        display: "block",
    },
}); });
