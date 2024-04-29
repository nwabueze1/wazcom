import makeStyles from "@mui/styles/makeStyles";
export var useDeleteMediaStyles = makeStyles(function (theme) { return ({
    modal: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    wrapper: {
        maxWidth: 600,
        maxHeight: 550,
        width: 600,
        backgroundColor: theme.design.colors.waz_white,
        borderRadius: theme.spacing(1),
        zIndex: 15,
        paddingBottom: theme.spacing(2),
        outline: "none",
    },
    deleteHeading: {
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(3, 0),
        borderBottom: "1px solid rgba(0,0,0,0.06)",
    },
    deleteHeadingText: {
        color: theme.design.colors.waz_dangerColor300,
        marginLeft: theme.spacing(4),
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: theme.typography.fontSize + 4,
        lineHeight: "21px",
    },
    deleteHeadingIcon: {
        marginRight: theme.spacing(4),
        color: "#999F9B",
        cursor: "pointer",
    },
    deleteContent: {
        padding: theme.spacing(0, 4, 2, 4),
    },
    deleteContentText: {
        margin: theme.spacing(2.5, 0, 2.5, 0),
    },
    deleteActions: {
        display: "flex",
        gap: theme.spacing(3),
        justifyContent: "center",
        marginTop: theme.spacing(4, 0, 0, 0),
    },
    cancelBtn: {
        background: theme.design.colors.white,
        border: "1px solid ".concat(theme.design.colors.grey300),
        color: theme.design.colors.grey100,
        boxShadow: "none",
        fontWeight: "".concat(theme.typography.fontWeightRegular, " !important"),
        fontSize: theme.typography.fontSize + 4,
        "&:hover, &:active": {
            background: "".concat(theme.design.colors.grey900, " !important"),
        },
    },
    deleteBtn: {
        border: "1px solid ".concat(theme.design.colors.primary100),
        fontWeight: "".concat(theme.typography.fontWeightRegular, " !important"),
        fontSize: theme.typography.fontSize + 4,
        boxShadow: "none",
        "&:hover": {
            background: theme.design.colors.primary300,
        },
    },
    thumbnailImg: {
        width: 72,
        height: 60,
        position: "relative",
        left: "calc((100% - 72px)/2)",
        marginBottom: theme.spacing(3),
        objectFit: "cover",
        objectPosition: "center",
    },
}); });
