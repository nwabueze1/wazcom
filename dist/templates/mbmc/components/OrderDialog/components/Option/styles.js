import makeStyles from "@mui/styles/makeStyles";
export var useOptionStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: {
            width: "100%",
            boxSizing: "border-box",
            fontFamily: theme.design.font.montserrat,
            marginBottom: theme.spacing(2.5),
            color: theme.design.colors.waz_greyColor600,
        },
        optionDescription: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },
        optionName: {
            fontSize: theme.typography.fontSize + 2,
            marginBottom: theme.spacing(1),
            fontWeight: theme.typography.fontWeightMedium,
        },
        optionHelperText: (_a = {
                fontSize: theme.typography.fontSize,
                marginBottom: theme.spacing(1)
            },
            _a[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize - 1,
                lineHeight: 1.6,
                width: "80%",
            },
            _a),
        optionRequired: {
            padding: theme.spacing(1, 1.5),
            background: "#0259391A",
            fontSize: theme.typography.fontSize - 2,
            height: "fit-content",
            borderRadius: 43,
            color: theme.design.colors.waz_greyColor400,
        },
        optionText: {
            color: theme.design.colors.primaryBlack,
        },
        summary: {
            padding: "".concat(theme.spacing(0), " !important"),
            textTransform: "capitalize",
        },
        details: {
            padding: "".concat(theme.spacing(0, 0, 1.5, 0), " !important"),
            display: "block",
        },
        optionType: {
            fontSize: theme.typography.fontSize + 4,
            color: theme.design.colors.grey2,
            marginTop: theme.spacing(-3),
        },
        option: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            fontSize: theme.typography.fontSize + 2,
        },
        optionPickerParent: {
            display: "flex",
            alignItems: "center",
        },
        optionAmount: {
            fontWeight: theme.typography.fontWeightRegular,
            color: theme.design.colors.waz_primaryColor200,
        },
        optionPicker: {
            position: "relative",
            left: -10,
            "&.Mui-checked": {
                color: "".concat(theme.design.colors.waz_orangeColor100, " !important"),
            },
        },
        optionHeader: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
        },
        optionTitle: {
            fontSize: theme.typography.fontSize + 4,
            fontWeight: theme.typography.fontWeightMedium,
        },
    });
});
