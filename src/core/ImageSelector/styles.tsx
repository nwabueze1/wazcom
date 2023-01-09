import { makeStyles } from "@mui/styles";
import { BaseTheme } from "theme";

export const useImageSelectorStyles = makeStyles((theme: BaseTheme) => ({
    root: {
        width: "100%",
        paddingTop: "21.9%", /* 1:1 Aspect Ratio */
        position: "relative",
        background: theme.design.colors.primary700,
        border: `1px dashed ${theme.design.colors.primary500}`,
        borderRadius: 4,
        fontFamily: theme.typography.fontFamily,
    },
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    selector: {
        border: `1px solid ${theme.design.colors.primary100}`,
        padding: theme.spacing(1, 1.5),
        borderRadius: 4,
        color: theme.design.colors.primary100,
        fontSize: theme.typography.fontSize,
        fontWeight: theme.typography.fontWeightMedium,
        background: `linear-gradient(${theme.design.colors.primary100} 0 0) var(--p, 0) / var(--p, 0) no-repeat`,
        transition: "0.4s, background-position 0s",
        zIndex: 2,
        fontFamily: "inherit",
        "&:hover": {
            "--p": "100%",
            cursor: "pointer",
            color: theme.design.colors.white,
        }
    },
    error: {
        color: theme.design.colors.waz_dangerColor,
        zIndex: 2,
        fontSize: 12,
        marginTop: theme.spacing(2)
    },
    imgWrapper: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        borderRadius: 4
    },
    selectedRoot: {
        border: "none"
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
        height: "400px",
    },
    cameraIcon: {
        color: theme.design.colors.waz_white,
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
    cameraIconFull: {
        fontSize: 100,
    },
    image: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: theme.spacing(1)
    },
    circle: {
        borderRadius: "50%",
    },
}));
