import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useGroupedInputStyles = makeStyles((theme: Theme) => ({
    root: {
        
    },
    groupedInputName: {
        fontFamily: theme.design.font.montserrat,
        marginBottom: theme.spacing(2),
        fontSize: theme.typography.fontSize - 1,
    }
}));