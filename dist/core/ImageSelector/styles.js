import { makeStyles } from "@mui/styles";
export var useImageSelectorStyles = makeStyles(function (theme) { return ({
    root: {
        minHeight: "150px",
        minWidth: "150px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        width: "320px",
        height: "320px",
        background: "transparent",
        transition: "background 0.5s ease-in",
        "&:hover": {
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) -9.73%, rgba(0, 0, 0, 0.8) 100%)",
        },
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
    cameraIcon: {
        color: theme.design.colors.white,
        zIndex: 5,
        background: "transparent",
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
    image: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    circle: {
        borderRadius: "50%",
    },
}); });
