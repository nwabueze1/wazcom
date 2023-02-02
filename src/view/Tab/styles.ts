import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useTabsStyles = makeStyles((theme: Theme) => ({
    container: {
        padding: theme.spacing(2),
        margin: 0,
        height: '100vh'
    }
}));
