import makeStyles from "@mui/styles/makeStyles";
export var useOpinionScaleStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: {
            flexDirection: "column",
            gap: theme.spacing(0.5),
            display: "flex",
        },
        labelContainer: {
            justifyContent: "space-between",
            display: "flex",
        },
        labelText: {
            margin: 0,
            fontSize: theme.typography.fontSize - 2,
            fontFamily: theme.typography.fontFamily,
        },
        boxContainer: (_a = {
                display: "flex",
                gap: theme.spacing(0.6),
                flexWrap: "wrap"
            },
            _a[theme.breakpoints.down("lg")] = {
                gap: theme.spacing(0.8),
            },
            _a),
        box: {
            background: theme.design.colors.waz_primary700,
            cursor: "pointer",
            fontSize: theme.typography.fontSize + 2,
            margin: 0,
            fontWeight: theme.typography.fontWeightBold,
            color: theme.design.colors.waz_primary500,
            borderRadius: 4,
            width: 32,
            height: 32,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid transparent",
            position: "relative",
            marginBottom: theme.spacing(1.8),
            "&:first-of-type": {
                "&::after": {
                    content: "'Low'",
                    display: "block",
                    position: "absolute",
                    fontSize: theme.typography.fontSize,
                    top: -18,
                    left: 0,
                    color: theme.design.colors.grey100,
                    fontWeight: theme.typography.fontWeightRegular,
                },
            },
            "&:last-of-type": {
                "&::after": {
                    content: "'High'",
                    display: "block",
                    position: "absolute",
                    fontSize: theme.typography.fontSize,
                    top: -18,
                    left: 0,
                    color: theme.design.colors.grey100,
                    fontWeight: theme.typography.fontWeightRegular,
                },
            },
        },
        boxOutlined: {
            border: "1px solid ".concat(theme.design.colors.waz_primary100),
        },
        boxContained: {
            background: theme.design.colors.waz_primary100,
        },
        innerText: {
            color: theme.design.colors.waz_primary500,
        },
        outlinedActiveText: {
            color: theme.design.colors.waz_primary100,
        },
        containedActiveText: {
            color: "".concat(theme.design.colors.waz_white, " !important"),
        },
        helperTextDefault: {
            display: "block",
            width: "100%",
            letterSpacing: 0,
            fontSize: theme.typography.fontSize - 1,
            textAlign: "left",
            marginTop: theme.spacing(0.8),
            flexWrap: "wrap",
            columnGap: theme.spacing(1.3),
        },
        helperTextSuccess: {
            color: theme.design.colors.waz_primaryColor100,
        },
        helperTextError: {
            color: theme.design.colors.error,
        },
        label: {
            fontSize: theme.typography.fontSize - 2,
            display: "block",
            marginBottom: theme.spacing(1),
            color: theme.design.colors.waz_grey,
            alignItems: "center",
            textTransform: "uppercase",
        },
    });
});
