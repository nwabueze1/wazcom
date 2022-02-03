import makeStyles from "@mui/styles/makeStyles";
export var useImageSelectorStyles = makeStyles(function (theme) { return ({
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
        color: theme.design.colors.black,
        cursor: "pointer",
        opacity: 0,
        zIndex: 5,
        background: "transparent",
        fontSize: "2vw",
    },
    modal: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    wrapper: {
        maxWidth: 600,
        maxHeight: 550,
        width: 600,
        backgroundColor: theme.design.colors.white,
        borderRadius: theme.spacing(1),
        overflow: "scroll",
        zIndex: 15,
        padding: theme.spacing(4),
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
}); });
