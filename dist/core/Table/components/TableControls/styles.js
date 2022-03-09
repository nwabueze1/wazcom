import makeStyles from "@mui/styles/makeStyles";
export var useTableControlsStyles = makeStyles(function (theme) { return ({
    controls: {
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(2),
    },
    filterControls: {
        display: "flex",
        gap: "30px",
    },
    filterControlsButton: {
        backgroundColor: theme.design.colors.white,
        color: theme.design.colors.black,
        height: "fit-content",
        width: "100px",
        display: "flex",
        justifyContent: "space-between",
    },
    rightControls: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
    },
    actionButton: {
        backgroundColor: theme.design.colors.white,
        color: theme.design.colors.black,
        display: "flex !important",
        alignItems: "center",
        gap: "0.5rem"
    },
}); });
