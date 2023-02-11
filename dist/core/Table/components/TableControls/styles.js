import makeStyles from "@mui/styles/makeStyles";
export var useTableControlsStyles = makeStyles(function (theme) {
    var _a;
    return ({
        controls: {
            display: "flex",
            justifyContent: "space-between",
            margin: theme.spacing(0, 0, 2, 0),
            gap: theme.spacing(3),
        },
        filterControls: {
            display: "flex",
            gap: theme.spacing(2),
        },
        controlButton: {
            backgroundColor: theme.design.colors.waz_white,
            color: theme.design.colors.waz_Grey,
            height: "40px",
            display: "flex",
            gap: theme.spacing(1),
            justifyContent: "space-between",
            border: "1px solid ".concat(theme.design.colors.waz_primaryColor100),
            borderRadius: "6px",
            "&:hover": {
                opacity: "initial",
                backgroundColor: theme.design.colors.waz_white,
                borderColor: theme.design.colors.waz_greyColor100,
            },
        },
        printButton: {
            backgroundColor: theme.design.colors.waz_white,
            color: theme.design.colors.waz_Grey,
            height: "40px",
            display: "flex",
            gap: theme.spacing(1),
            justifyContent: "space-between",
            border: "1px solid ".concat(theme.design.colors.waz_grey300),
            borderRadius: "6px",
            "&:hover": {
                opacity: "initial",
                backgroundColor: theme.design.colors.waz_white,
                borderColor: theme.design.colors.waz_greyColor100,
            },
        },
        exportButton: {
            backgroundColor: theme.design.colors.waz_white,
            color: theme.design.colors.waz_Grey,
            height: "40px",
            display: "flex",
            gap: theme.spacing(1),
            justifyContent: "space-between",
            border: "1px solid ".concat(theme.design.colors.waz_grey300),
            borderRadius: "6px",
            "&:hover": {
                opacity: "initial",
                backgroundColor: theme.design.colors.waz_white,
                borderColor: theme.design.colors.waz_greyColor100,
            },
        },
        controlButtonText: {
            fontSize: theme.typography.fontSize + 2,
            fontWeight: "200",
        },
        controlsInputField: {
            width: "60%",
            height: "40px",
            border: "solid 1px ".concat(theme.design.colors.waz_greyColor100),
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            paddingLeft: theme.spacing(2),
            backgroundColor: theme.design.colors.waz_white,
            marginRight: "auto",
            gap: theme.spacing(1),
        },
        searchIcon: {
            fontSize: 24,
            color: theme.design.colors.waz_greenishGrey,
        },
        controlsInput: (_a = {
                width: "100%",
                height: 38,
                padding: theme.spacing(0, 1),
                border: "none",
                outline: "none",
                fontFamily: "Poppins",
                "&::placeholder": {
                    color: theme.design.colors.waz_greenishGrey,
                    fontFamily: "Poppins",
                }
            },
            _a[theme.breakpoints.down("md")] = {
                border: "solid 1px ".concat(theme.design.colors.waz_greyColor100),
            },
            _a),
        rightControls: {
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(2),
        },
    });
});
