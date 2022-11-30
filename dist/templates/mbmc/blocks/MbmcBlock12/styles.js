import { makeStyles } from "@mui/styles";
export var useMbmcBlock12Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return ({
        root: {
            padding: theme.spacing(7, 0),
            "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                background: "".concat(theme.design.colors.waz_white, " !important"),
                padding: "14px 16px !important",
            },
        },
        container: (_a = {
                maxWidth: 1720,
                width: "85%",
                margin: "0 auto",
                display: "flex",
                position: "relative",
                justifyContent: "space-between"
            },
            _a[theme.breakpoints.down("lg")] = {
                flexDirection: "column",
                width: '90%',
            },
            _a[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _a),
        headerContent: (_b = {
                width: "45%"
            },
            _b[theme.breakpoints.down("lg")] = {
                paddingRight: theme.spacing(0),
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "column",
            },
            _b[theme.breakpoints.down("sm")] = {
                position: "relative",
                left: "5%",
                width: "90%",
            },
            _b),
        headerTitle: (_c = {
                color: theme.design.colors.waz_black,
                fontSize: theme.typography.fontSize * 4,
                letterSpacing: 0,
                textTransform: "capitalize",
                font: "normal normal medium 68px/100px Losta Masta;",
                margin: 0,
                fontFamily: theme.design.font.lostaMasta
            },
            _c[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize * 3,
                textAlign: "center",
            },
            _c[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize * 2 + 8,
            },
            _c[theme.breakpoints.down("sm")] = {
                width: "100%",
                marginBottom: theme.spacing(1),
            },
            _c),
        headerDescription: (_d = {
                color: theme.design.colors.waz_greyColor600,
                fontSize: theme.typography.fontSize + 2,
                fontFamily: theme.design.font.montserrat,
                lineHeight: 1.5
            },
            _d[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize + 4,
                textAlign: "center",
            },
            _d[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize,
            },
            _d[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize + 4,
            },
            _d),
        formContainer: (_e = {
                width: "45%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                fontFamily: theme.design.font.montserrat
            },
            _e[theme.breakpoints.down("lg")] = {
                width: "100%",
            },
            _e),
        headerParagraph: {
            "& > p": {
                margin: theme.spacing(2, 0),
            },
        },
        headerBtnContainer: (_f = {
                width: "100%",
                display: "flex",
                margin: theme.spacing(2, 0),
                gap: theme.spacing(2)
            },
            _f[theme.breakpoints.down("sm")] = {
                display: "flex",
                alignItems: "center",
                justifyContent: "Center",
                "& > div": {
                    width: "fit-content",
                },
            },
            _f),
        btnParent: {
            width: "50%",
        },
        formInput: {
            marginBottom: theme.spacing(1.5),
        },
        formTextInput: {
            fontFamily: theme.design.font.montserrat,
            "& > div": {
                borderRadius: theme.spacing(6),
            },
            marginBottom: theme.spacing(2),
        },
        formTextArea: {
            borderRadius: theme.spacing(3),
            marginBottom: theme.spacing(2),
            fontFamily: theme.design.font.montserrat,
        },
        formButton: {
            position: "relative",
            top: -6,
            width: "100%",
            padding: theme.spacing(1, 0),
            fontWeight: theme.typography.fontWeightMedium,
        },
        form: (_g = {
                width: "90%",
                backgroundColor: theme.design.colors.waz_orangeColor50,
                padding: theme.spacing(6, 4),
                borderRadius: theme.spacing(0.5)
            },
            _g[theme.breakpoints.down("lg")] = {
                width: "100%",
            },
            _g),
        demarcationContainer: (_h = {
                width: "16.5%",
                maxWidth: "195px",
                zIndex: 10,
                margin: theme.spacing(0, "auto"),
                right: 0,
                left: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "center"
            },
            _h[theme.breakpoints.down("lg")] = {
                position: "relative",
                width: "100%",
                top: 0,
                margin: theme.spacing(4, 0),
                maxWidth: "unset",
            },
            _h),
        demarcation: (_j = {
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 6,
                flexDirection: "column",
                fontFamily: theme.design.font.openSans,
                color: theme.design.colors.waz_greyColor600,
                fontSize: theme.typography.fontSize + 2,
                "&::before": {
                    content: "''",
                    height: "100%",
                    background: theme.design.colors.waz_greyColor150,
                    display: "block",
                    width: 1,
                    marginBottom: theme.spacing(1),
                },
                "&::after": {
                    content: "''",
                    height: "100%",
                    width: 1,
                    display: "block",
                    background: theme.design.colors.waz_greyColor150,
                    marginTop: theme.spacing(1),
                }
            },
            _j[theme.breakpoints.down("lg")] = {
                width: "100%",
                alignItems: "center",
                color: theme.design.colors.waz_greyColor150,
                flexDirection: "row",
                "&::before": {
                    content: "''",
                    height: 1,
                    background: theme.design.colors.waz_greyColor150,
                    display: "block",
                    width: "100%",
                    marginRight: theme.spacing(1),
                    marginBottom: theme.spacing(0),
                },
                "&::after": {
                    content: "''",
                    height: 1,
                    width: "100%",
                    display: "block",
                    background: theme.design.colors.waz_greyColor150,
                    marginLeft: theme.spacing(1),
                    marginTop: theme.spacing(0),
                },
            },
            _j),
        error: {
            color: theme.design.colors.waz_red,
            marginTop: theme.spacing(1),
        },
        success: {
            color: theme.design.colors.waz_successColor100,
            marginTop: theme.spacing(1),
        },
    });
});
