import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useFilterStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1, 1.5),
        border: `1px solid ${theme.design.colors.waz_orangeColor50}`,
        borderRadius: 15,
        fontSize: theme.typography.fontSize,
    },
    filterColumn: {
        fontWeight: theme.typography.fontWeightBold,
    },
    filterCloseIcon: {
        position: 'relative',
        top: '-0.5',
        marginLeft: theme.spacing(1),
        cursor: 'pointer',
    }
}));
