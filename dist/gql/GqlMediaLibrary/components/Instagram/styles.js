import makeStyles from "@mui/styles/makeStyles";
export var useInstagramStyles = makeStyles(function (theme) { return ({
    inActiveContainer: {
        minHeight: "40vh",
    },
    body: {
        padding: theme.spacing(4, 0),
    },
    content: {
        width: "49%",
    },
    contentImageContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        paddingBottom: theme.spacing(2),
    },
    contentImage: {
        width: "80px",
        height: "80px",
    },
    contentTitle: {
        textAlign: "center",
        fontSize: theme.typography.fontSize + 4,
        paddingBottom: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.design.colors.black200,
    },
    contentText: {
        textAlign: "center",
        fontSize: theme.typography.fontSize + 2,
        lineHeight: "24px",
    },
    btnContainer: {
        display: "flex",
        justifyContent: "center",
    },
    connectBtn: {
        textAlign: "center",
        marginTop: theme.spacing(3),
        padding: theme.spacing(1, 2),
        fontSize: theme.typography.fontSize - 1,
        fontWeight: theme.typography.fontWeightMedium,
        lineHeight: "24px",
        width: "max-content",
    },
}); });
