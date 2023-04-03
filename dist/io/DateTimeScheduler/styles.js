import { makeStyles } from "@mui/styles";
export var useScheduleStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        alignItems: "center",
        gap: 30,
        flexWrap: "wrap",
    },
    multiSelect: {
        width: 145,
    },
    to: {
        display: "flex",
    },
    time: {
        width: 140,
    },
    toggle: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(0.5),
    },
}); });
