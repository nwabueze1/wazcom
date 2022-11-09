import { makeStyles } from "@mui/styles";
export var useMbmcBlock3Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f;
    return ({
        root: {
            position: "relative",
            overflow: 'hidden',
        },
        block3Container: {
            position: 'relative',
            maxWidth: 1240,
            width: "90%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            zIndex: 10,
        },
        block3ImageContainer: (_a = {
                width: '50%'
            },
            _a[theme.breakpoints.down("lg")] = {
                display: 'none',
            },
            _a),
        block3Image: {
            width: '95%',
            position: 'relative',
            top: 60,
            objectFit: 'cover',
        },
        block3Content: (_b = {
                position: 'relative',
                top: '-10vh',
                width: '50%'
            },
            _b[theme.breakpoints.down("lg")] = {
                width: '100%',
                top: 0,
                paddingTop: theme.spacing(5),
            },
            _b[theme.breakpoints.down("sm")] = {
                width: '100%',
                top: 0,
                paddingTop: theme.spacing(7),
            },
            _b),
        block3Heading: (_c = {
                color: theme.design.colors.waz_primaryColor300,
                fontSize: theme.typography.fontSize * 4,
                letterSpacing: 0,
                margin: 0,
                fontFamily: theme.design.font.lostaMasta,
                width: '90%',
                marginBottom: theme.spacing(2)
            },
            _c[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize * 3,
                width: '100%',
                marginBottom: theme.spacing(5),
            },
            _c[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize * 3,
                width: '100%',
                marginBottom: theme.spacing(4),
            },
            _c[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize * 2,
                textTransform: 'capitalize',
            },
            _c),
        block3ContentImageContainer: (_d = {
                position: 'relative',
                display: 'flex',
                justifyContent: 'center'
            },
            _d[theme.breakpoints.up("lg")] = {
                display: 'none',
            },
            _d["& img.hero"] = {
                position: 'relative',
                zIndex: 10,
                width: '70%',
            },
            _d["& img.overlay"] = {
                position: 'absolute',
                top: 0,
                left: '-10vw',
                width: '60%',
            },
            _d),
        block3Description: (_e = {
                color: theme.design.colors.waz_greyColor600,
                fontSize: theme.typography.fontSize + 4,
                fontFamily: theme.design.font.montserrat,
                lineHeight: 1.5,
                width: '90%',
                marginBottom: theme.spacing(2.5)
            },
            _e[theme.breakpoints.down("lg")] = {
                width: '100%',
                margin: theme.spacing(2.5, 0),
            },
            _e),
        block3Ctas: {
            display: 'flex',
            gap: theme.spacing(1.5),
        },
        block3ImageOverlay: (_f = {
                position: 'absolute',
                top: '-24vh',
                left: '-20vw'
            },
            _f[theme.breakpoints.down("lg")] = {
                display: 'none',
            },
            _f)
    });
});
