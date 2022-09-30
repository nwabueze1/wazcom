import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useFooterStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: theme.spacing(3, 0),
        color: theme.design.colors.waz_grey500,
        fontSize: theme.typography.fontSize,
        borderTop: `1px solid ${theme.design.colors.waz_mercury}`,
        gap: theme.spacing(0.5),
        lineHeight: "18px",
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1.5, 0, 2, 0),
        },
    },
    link: {
        textDecoration: "none",
        color: theme.design.colors.waz_blue200,
    },
}));
