import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useColumnSelectorStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '17%',
        padding: theme.spacing(2),
        background: theme.design.colors.waz_white,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        height: 36,
        boxSizing: 'border-box',
        borderRadius: 4,
        position: 'relative',
        fontSize: theme.typography.fontSize,
    },
    columnList: {
        position: 'absolute',
        bottom: 'calc(100% + 5px),'
    }
}));
