import makeStyles from '@mui/styles/makeStyles';
import { Theme } from "@mui/material/styles";

export const useTextAreaStyles = makeStyles((theme:Theme) => ({
    root: {},
    textarea: {
        borderColor:"rgba(0, 0, 0, 0.23) !important",
        padding: theme.spacing(1.5),
        fontSize: "1.05rem",
        borderRadius: 4,
        boxSizing: "border-box",
    },
}));