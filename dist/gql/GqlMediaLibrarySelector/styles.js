import makeStyles from "@mui/styles/makeStyles";
export var useImageSelectorStyles = makeStyles(function (theme) { return ({
    root: {
        marginBottom: theme.spacing(2),
    },
    container: {
        height: "100%",
        backgroundColor: theme.design.colors.lightGrey,
        border: "1px dashed ".concat(theme.design.colors.mercury),
        borderRadius: 5,
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
        color: theme.design.colors.primaryColor100,
        zIndex: 5,
        border: "1px solid ".concat(theme.design.colors.primaryColor100),
        fontSize: theme.typography.fontSize + 4,
        fontWeight: theme.typography.fontWeightBold,
        background: theme.design.colors.white,
        "&:hover": {
            background: theme.design.colors.successColor300,
            border: "1px solid ".concat(theme.design.colors.primaryColor100),
        },
    },
    cameraIcon: {
        color: theme.design.colors.black,
        cursor: "pointer",
        zIndex: 5,
        background: "transparent",
        fontSize: theme.typography.fontSize * 4,
    },
    removeBtn: {
        cursor: "pointer",
        marginLeft: theme.spacing(5),
        color: theme.design.colors.greyColor300,
        border: "1px solid ".concat(theme.design.colors.mercury),
        fontSize: theme.typography.fontSize + 4,
        fontWeight: theme.typography.fontWeightMedium,
        background: theme.design.colors.white,
        "&:hover": {
            background: theme.design.colors.white,
            border: "1px solid ".concat(theme.design.colors.mercury),
        },
    },
    imgUploadContainer: {
        display: "flex",
        alignItems: "center",
    },
    modal: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    wrapper: {
        height: "80vh",
        width: "80vw",
        backgroundColor: theme.design.colors.white,
        zIndex: 15,
    },
    cameraIconSm: {
        fontSize: 20,
        fontWeight: theme.typography.fontWeightBold,
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
