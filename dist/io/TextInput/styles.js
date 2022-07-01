import { makeStyles } from "@mui/styles";
export var useTextStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 15,
        position: "relative",
        "& .Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: theme.design.colors.waz_primaryColor100,
            outline: theme.design.colors.waz_primaryColor100,
            "&:hover": {
                borderColor: theme.design.colors.waz_primaryColor100,
                outline: theme.design.colors.waz_primaryColor100
            },
        },
    },
    label: {
        display: "flex",
        alignItems: "center",
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(0.5, 0, 0, 0.5),
    },
}); });
