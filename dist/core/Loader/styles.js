import makeStyles from "@mui/styles/makeStyles";
export var useLoaderStyles = makeStyles(function (theme) { return ({
    "@keyframes grow": {
        from: {
            transform: "scale(0,0)",
            opacity: 0,
        },
        to: {
            transform: "scale(1,1)",
            opacity: 1,
        },
    },
    "@keyframes move": {
        from: {
            transform: "translateX(0px)",
        },
        to: {
            transform: "translateX(45px)",
        },
    },
    root: {
        width: "100%",
        padding: "".concat(theme.spacing(2), " 0"),
        display: "flex",
        opacity: 1,
        justifyContent: "center",
        background: "transparent",
        "&.full-screen": {
            top: "50%",
            position: "absolute",
            zIndex: 9999,
        },
    },
    container: {
        height: "15px",
        width: "105px",
        display: "flex",
        position: "relative",
    },
    circle: {
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        background: theme.design.colors.waz_primaryColor100,
        animation: "$move 500ms linear 0ms infinite",
        marginRight: "30px",
        "&:first-child": {
            position: "absolute",
            top: "0",
            left: "0",
            animation: "$grow 500ms linear 0ms infinite",
        },
        "&:last-child": {
            position: "absolute",
            top: "0",
            right: "0",
            marginRight: "0",
            animation: "$grow 500ms linear 0s infinite reverse",
        },
    },
}); });
