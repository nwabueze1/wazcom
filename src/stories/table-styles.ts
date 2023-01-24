import { Theme } from "@mui/material/styles";

import makeStyles from "@mui/styles/makeStyles";

export const useTableStyles = makeStyles((theme: Theme) => ({
    titleContainer: {
        display: 'flex',
        gap: theme.spacing(2),
        color: 'grey',
        fontSize: theme.typography.fontSize,
        fontWeight: theme.typography.fontWeightBold,
    }
}));

