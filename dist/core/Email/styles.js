import { makeStyles } from "@material-ui/core/styles";
export var useEmailStyles = makeStyles(function () { return ({
    label: {
        fontSize: "18px",
        fontWeight: 500,
        color: "rgba(0,0,0,0.64)",
        paddingTop: function (_a) {
            var labelPaddingTop = _a.labelPaddingTop;
            return labelPaddingTop;
        },
        paddingBottom: function (_a) {
            var labelPaddingBottom = _a.labelPaddingBottom;
            return labelPaddingBottom;
        },
    },
    nameContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: function (_a) {
            var width = _a.width;
            return width;
        },
    },
    input_parent: {
        position: "relative",
        paddingTop: function (_a) {
            var inputParrentPadding = _a.inputParrentPadding;
            return inputParrentPadding;
        },
    },
    input: {
        width: function (_a) {
            var width = _a.width;
            return width;
        },
        height: function (_a) {
            var height = _a.height;
            return height;
        },
    },
    customTextField: {
        width: "100%",
        height: function (_a) {
            var height = _a.height;
            return height;
        },
        "& input::placeholder": {
            fontSize: function (_a) {
                var fontSize = _a.fontSize;
                return fontSize;
            },
        },
    },
    information: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "35%",
        height: "100%",
        paddingTop: "1%",
        background: "#EFEDED",
        border: "1px solid rgba(0,0,0,0.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#5C5C5C",
    },
    error_message: {
        color: "#EA3C53",
        margin: function (_a) {
            var marginError = _a.marginError;
            return (marginError ? marginError : "0.8vh 0 0 0");
        },
        fontSize: "16px",
    },
}); });
