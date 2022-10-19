import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useButtonStyles = makeStyles((theme: Theme) => ({
    button: {
        borderRadius: 50,
        padding: theme.spacing(1, 2),
        marginRight: theme.spacing(1),
        backgroundColor: ({ bgColor }: { bgColor?: string }) =>
            bgColor ? bgColor : theme.design.colors.waz_primaryColor200,
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(1, 2),
            fontSize: theme.typography.fontSize,
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(0.5, 1),
            borderRadius: 30,
        },
    },
}));
