import makeStyles from "@mui/styles/makeStyles";
export var useTableControlsStyles = makeStyles(function (theme) {
    var _a;
    return ({
        controls: {
            display: "flex",
            justifyContent: "space-between",
            margin: theme.spacing(0, 0, 2, 0),
        },
        filterControls: {
            display: "flex",
            gap: theme.spacing(3.75),
        },
        controlButton: {
            backgroundColor: theme.design.colors.white,
            color: theme.design.colors.Grey,
            height: "40px",
            display: "flex",
            gap: theme.spacing(1),
            justifyContent: "space-between",
            borderColor: theme.design.colors.greyColor100,
            "&:hover": {
                opacity: "initial",
                backgroundColor: theme.design.colors.white,
                borderColor: theme.design.colors.greyColor100,
            }
        },
        controlButtonText: {
            fontSize: theme.typography.fontSize + 2
        },
        controlsInputField: {
            width: "320px",
            height: "40px",
            border: "solid 1px ".concat(theme.design.colors.greyColor100),
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            paddingLeft: theme.spacing(2),
            backgroundColor: theme.design.colors.white,
        },
        searchIcon: {
            fontSize: 24,
            color: theme.design.colors.greenishGrey,
        },
        controlsInput: (_a = {
                width: "100%",
                height: 38,
                padding: theme.spacing(0, 1),
                border: "none",
                outline: "none",
                fontFamily: "Poppins",
                "&::placeholder": {
                    color: theme.design.colors.greenishGrey,
                    fontFamily: "Poppins"
                }
            },
            _a[theme.breakpoints.down("md")] = {
                border: "solid 1px ".concat(theme.design.colors.greyColor100)
            },
            _a),
        rightControls: {
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(2),
        },
    });
});
