import makeStyles from "@mui/styles/makeStyles";
export var useProgressStyles = makeStyles(function (theme) { return ({
    root: {
        position: "relative",
        width: "100%",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 0,
    },
    label: {
        position: "relative",
        display: "block",
        fontSize: theme.typography.fontSize - 2,
        color: theme.design.colors.waz_grey,
    },
    bar: {
        position: "relative",
        backgroundColor: theme.design.colors.waz_primary900,
        border: "1px solid ".concat(theme.design.colors.waz_primary700),
        height: "12px",
        borderRadius: "20px",
        overflow: "hidden",
        width: "100%",
        display: "flex",
        alignItems: "center",
    },
    progress: function (props) {
        var _a;
        return ({
            postion: "absolute",
            height: "10px",
            width: (_a = "".concat(props === null || props === void 0 ? void 0 : props.value, "%")) !== null && _a !== void 0 ? _a : "50%",
            borderRadius: "15px",
            background: theme.design.colors.waz_primary100,
            transition: "width 0.5s ease-in-out",
        });
    },
}); });
