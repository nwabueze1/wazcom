import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useTimeStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-between",
        margin: theme.spacing(2, 0),
        borderBottom: `1px solid ${theme.design.colors.waz_primaryColor100}`,
        paddingBottom: theme.spacing(0.5),
        width: "fit-content",
    },
    timeIcon: {
        fontSize: 25,
        color: theme.design.colors.waz_greyColor500,
        cursor: "pointer",
    },
    timeText: {
        fontSize: 16,
        color: theme.design.colors.waz_greyColor500,
        cursor: "pointer",
        paddingRight: theme.spacing(7),
    },
}));
