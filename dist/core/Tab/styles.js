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
        var variant = _a.variant, width = _a.width, height = _a.height;
        return ({
            width: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? width !== null && width !== void 0 ? width : "fit-content" : 200,
            height: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? height !== null && height !== void 0 ? height : "100%" : 300,
            minWidth: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? "fit-content" : 200,
            minHeight: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? "fit-content" : 300,
            display: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? "flex" : "",
            flexDirection: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? "column" : "row",
            justifyContent: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? "start" : "",
            gap: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? theme.spacing(2) : "",
            padding: theme.spacing(2),
            background: theme.design.colors.white,
            marginRight: theme.spacing(2),
            borderRadius: theme.spacing(0.5),
            boxShadow: "0px 3px 6px ".concat(theme.design.colors.waz_black100),
        });
    },
    tab: function (_a) {
        var variant = _a.variant, borderColor = _a.borderColor, borderRadius = _a.borderRadius, borderWidth = _a.borderWidth, backgroundColor = _a.backgroundColor, color = _a.color, borderStyle = _a.borderStyle;
        return ({
            display: "flex",
            flexDirection: variant === "vertical-pill" ? "column" : "row",
            justifyContent: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? "flex-start" : "",
            alignItems: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? "center" : "",
            gap: theme.spacing(0.5),
            background: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? "" : backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : "",
            color: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical")) ? color !== null && color !== void 0 ? color : theme.design.colors.waz_grey1 : "",
            borderWidth: variant === "vertical-pill" ? 0 : borderWidth !== null && borderWidth !== void 0 ? borderWidth : 1,
            borderStyle: borderStyle !== null && borderStyle !== void 0 ? borderStyle : "solid",
            borderColor: variant === "vertical"
                ? borderColor !== null && borderColor !== void 0 ? borderColor : theme.design.colors.primary700
                : theme.design.colors.primary700,
            borderRadius: variant === "vertical"
                ? theme.spacing(0.5)
                : variant === "vertical-pill"
                    ? "".concat(theme.spacing(4), " 0px 0px ").concat(theme.spacing(4))
                    : borderRadius !== null && borderRadius !== void 0 ? borderRadius : 14,
            padding: variant === "vertical-pill"
                ? "".concat(theme.spacing(1.5), " ").concat(theme.spacing(5.5), " ").concat(theme.spacing(1.5), " ").concat(theme.spacing(2))
                : "".concat(theme.spacing(1.5), " ").concat(theme.spacing(5.5), " ").concat(theme.spacing(1.5), " ").concat(theme.spacing(2)),
            fontWeight: variant === "vertical-pill"
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
            cursor: "pointer",
            transition: "all .5s ease-out",
            "&:hover": {
                color: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical"))
                    ? theme.design.colors.waz_primaryColor100
                    : color !== null && color !== void 0 ? color : theme.design.colors.waz_primaryColor100,
                borderColor: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical"))
                    ? theme.design.colors.primary500
                    : borderColor !== null && borderColor !== void 0 ? borderColor : theme.design.colors.primary500,
            },
        });
    },
    tabIsActive: function (_a) {
        var variant = _a.variant, backgroundColor = _a.backgroundColor, borderColor = _a.borderColor, color = _a.color;
        return ({
            background: variant === "vertical" ? "" : backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : theme.design.colors.waz_primaryColor100,
            color: variant === "vertical"
                ? theme.design.colors.waz_primaryColor100
                : color !== null && color !== void 0 ? color : theme.design.colors.waz_white,
            borderColor: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical"))
                ? borderColor !== null && borderColor !== void 0 ? borderColor : theme.design.colors.waz_primaryColor100
                : theme.design.colors.primary700,
            "&:hover": {
                color: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical"))
                    ? color !== null && color !== void 0 ? color : theme.design.colors.waz_white
                    : theme.design.colors.waz_primaryColor100,
                borderColor: (variant === null || variant === void 0 ? void 0 : variant.includes("vertical"))
                    ? borderColor !== null && borderColor !== void 0 ? borderColor : theme.design.colors.waz_primaryColor100
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
