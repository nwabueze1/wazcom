import makeStyles from '@mui/styles/makeStyles';
export var useImageUploadStyles = makeStyles(function (theme) { return ({
    uploadButton: {
        background: "#fff",
        fontSize: "0.1rem",
        flexDirection: "column",
        color: theme.design.colors.grey,
        width: function (_a) {
            var width = _a.width;
            return width;
        },
        height: function (_a) {
            var height = _a.height;
            return height;
        },
        border: function (_a) {
            var border = _a.border;
            return border;
        },
    },
    label: {},
    uploadedImage: {
        padding: function (_a) {
            var uploadedImgPadding = _a.uploadedImgPadding;
            return uploadedImgPadding;
        },
    },
    uploadContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    uploadText: {
        fontSize: "14px",
        textTransform: "capitalize",
        color: "#C4C4C4",
    },
    imgNameContainer: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
    },
    imgName: {
        margin: "0",
        padding: "0.2rem 0",
    },
    changeButton: {
        color: "#FF0000",
        margin: "0",
    },
}); });
