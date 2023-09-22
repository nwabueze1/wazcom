import makeStyles from "@mui/styles/makeStyles";
export var useRegionSelectorStyles = makeStyles(function (theme) { return ({
    root: {
        position: "relative",
        "& .pac-container": {
            top: "36px !important",
            left: "0px !important",
            width: "100% !important",
        }
    },
    selectorHeader: {
        position: "relative",
        display: "flex",
        gap: theme.spacing(5),
        width: "calc(50% - 8px)",
    },
    selectorInputParent: {
        width: "100%",
    },
    selectorInput: {
        background: theme.design.colors.waz_white100,
        padding: theme.spacing(0.8, 1.5),
        boxSizing: "border-box",
    },
    selectorValues: {
        marginTop: theme.spacing(1),
        display: "flex",
        gap: theme.spacing(3),
        flexWrap: "wrap",
        background: theme.design.colors.waz_white100,
        border: "1px solid",
        color: theme.design.colors.waz_primary700,
        padding: theme.spacing(0.75, 1.5),
    },
    selectorValue: {
        display: "flex",
        gap: theme.spacing(1),
        alignItems: "center",
        padding: theme.spacing(0.5, 1),
        background: theme.design.colors.waz_grey300,
        color: theme.design.colors.waz_primaryBlack,
        fontSize: theme.typography.fontSize,
        borderRadius: 16,
        textTransform: "uppercase",
        "& .icon": {
            color: "rgba(0,0,0,0.75)",
            fontSize: theme.typography.fontSize,
            cursor: "pointer",
        }
    }
}); });
