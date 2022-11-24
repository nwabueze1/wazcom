import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useSpinnerStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'fixed',
        right: '50px',
        bottom: '50px',
    },
}));
