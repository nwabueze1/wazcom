import makeStyles from "@mui/styles/makeStyles";
export var useNourStyles = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        root: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            fontFamily: theme.design.font.openSans,
            border: '1px solid transparent',
            transition: 'all 0.3s ease-in',
        },
        paper: (_a = {
                backgroundColor: theme.design.colors.waz_white,
                borderRadius: 0,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: theme.spacing(3, 4),
                alignItems: "center",
                maxHeight: "72px",
                boxShadow: 'none'
            },
            _a[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(3, 2)
            },
            _a),
        logo: {
            height: "40px",
            width: "50px",
            border: '1px solid transparent',
            transition: 'all 0.3s ease-in',
        },
        linksContainer: (_b = {
                display: "flex",
                flexDirection: "row",
                gap: theme.spacing(4),
                marginLeft: "auto",
                marginRight: theme.spacing(3)
            },
            _b[theme.breakpoints.down("sm")] = {
                gap: theme.spacing(1),
                marginRight: theme.spacing(2),
                marginBottom: theme.spacing(0.5)
            },
            _b),
        link: {
            color: theme.design.colors.waz_black,
            textDecoration: "none",
            fontSize: theme.typography.fontSize,
            cursor: "pointer",
            border: '1px solid transparent',
            transition: 'all 0.3s ease-in',
        },
        socialsContainer: (_c = {
                display: "flex",
                flexDirection: "row",
                gap: theme.spacing(3)
            },
            _c[theme.breakpoints.down("sm")] = {
                gap: theme.spacing(1.5),
                marginBottom: theme.spacing(0.5)
            },
            _c),
        socialIntegration: {
            color: theme.design.colors.waz_black,
            border: '1px solid transparent',
            transition: 'all 0.3s ease-in',
        },
        hivedeckLogo: {
            width: "90px",
            height: "30px",
            border: '1px solid transparent',
            transition: 'all 0.3s ease-in',
        },
        activeElement: {
            border: '1px dashed',
            borderColor: theme.design.colors.waz_primaryColor100,
        }
    });
});
