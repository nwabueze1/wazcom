import makeStyles from "@mui/styles/makeStyles";
export var useImageSelectorStyles = makeStyles(function (theme) { return ({
    root: {
        marginBottom: theme.spacing(2),
    },
    container: {
        height: "100%",
        backgroundColor: theme.design.colors.lightGrey,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        "&:hover": {
            "& .cameraIcon": {
                visibility: "visible",
            },
        },
    },
    circle: {
        borderRadius: "50%",
        border: "3px solid ".concat(theme.design.colors.white),
    },
    icon: {
        cursor: "pointer",
        color: theme.design.colors.greene,
        zIndex: 5,
        border: "1px solid ".concat(theme.design.colors.greene),
        background: theme.design.colors.white,
        "&:hover": {
            background: theme.design.colors.successColor300,
            border: "1px solid ".concat(theme.design.colors.greene),
        },
    },
    modal: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    wrapper: {
        backgroundColor: theme.design.colors.white,
        zIndex: 15,
    },
    cameraIconSm: {
        fontSize: 20,
    },
    cameraIconMd: {
        fontSize: 40,
    },
    cameraIconLg: {
        fontSize: 60,
    },
    cameraIconXl: {
        fontSize: 80,
    },
    sizeSm: {
        width: "100px",
        height: "100px",
    },
    sizeMd: {
        width: "200px",
        height: "200px",
    },
    sizeLg: {
        width: "300px",
        height: "300px",
    },
    sizeXl: {
        width: "400px",
        height: "400px",
    },
    full: {
        width: "100%",
        height: "200px",
    },
    error: {
        border: "2px solid ".concat(theme.design.colors.dangerColor100),
    },
}); });
