import { makeStyles } from "@material-ui/core";
var useStyles = makeStyles({
    spinner: {
        position: "fixed",
        right: "3vw",
        bottom: "2vw",
        color: "#F50057",
        opacity: function (_a) {
            var opacity = _a.opacity;
            return opacity;
        },
        zIndex: function (_a) {
            var opacity = _a.opacity;
            return (opacity === 0 ? -9999 : 10);
        },
        transition: "opacity 0.5s ease-in",
    },
});
export default useStyles;
