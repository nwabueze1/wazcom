import makeStyles from "@mui/styles/makeStyles";
export var useStyles = makeStyles(function (theme) { return ({
    root: {
        backgroundColor: theme.design.colors.white,
        margin: theme.spacing(2, 5),
        "& .icon": {
            width: "45px",
            height: "45px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            border: "1px solid ".concat(theme.design.colors.grey400),
            borderRadius: "50%",
        },
        "& .MuiAvatar-img": {
            width: "auto",
            height: "auto",
        },
    },
}); });
