import makeStyles from "@mui/styles/makeStyles";
export var useCarouselStyles = makeStyles(function (theme) { return ({
    wrapper: {
        height: "100%",
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
    },
    box: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
        position: "relative",
        flexShrink: 0,
        fontSize: theme.typography.fontSize * 2,
        cursor: "pointer",
        height: "100%",
    },
}); });
