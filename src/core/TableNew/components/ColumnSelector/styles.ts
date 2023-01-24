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
        left: 0,
        top: '100%',
        width: '100%',
        background: theme.design.colors.waz_white,
        borderRadius: 3,
        boxShadow: "0px 1px 4px #00000014",
        padding: theme.spacing(0.5, 0, 1.5, 0),
        opacity: 0,
        zIndex: -1,
        transition: 'opacity 0.3s ease-in',
    },
    columnListActive: {
        opacity: 1,
        zIndex: 10,
    },
    columnCheckBoxRoot: {
        padding: 0,
    },
    columnCheckBox: {
        position: 'relative',
        left: -2,
        marginRight: theme.spacing(0.5),
    },
    column: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1, 2),
        fontSize: theme.typography.fontSize,
    },
    columnBoxText: {
        cursor: 'pointer',
        width: '100%',
    }
}));
