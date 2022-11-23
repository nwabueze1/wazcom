import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useLoaderStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(5),
    }
}));