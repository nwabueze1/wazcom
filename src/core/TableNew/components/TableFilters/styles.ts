import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useTableFiltersStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },
    filterAddIconParent: {
        position: 'relative',
    },
    filterAddIcon: {
        height: 32,
        width: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#E7F1E9',
        borderRadius: '50%',
        cursor: 'pointer',
    },
    filterColumns: {
        position: 'absolute',
        top: 'calc(100% + 5px)',
        left: 2,
        padding: theme.spacing(1),
        width: 150,
        borderRadius: 3,
        background: theme.design.colors.waz_white,
        boxShadow: "0px 1px 4px #00000014",
        opacity: 0,
        zIndex: -1,
        transition: 'opacity 0.3s ease-in',
    },
    filterColumnsActive: {
        opacity: 1,
        zIndex: 10,
    },
    filterColumn: {
        fontSize: theme.typography.fontSize,
        color: theme.design.colors.waz_grey1,
        padding: theme.spacing(0.5, 0),
        marginBottom: theme.spacing(1),
        cursor: 'pointer', 
        position: 'relative',
    },
    filterSelector: {
        position: 'absolute',
        top: 0,
        left: 'calc(100% + 21px)',
    }
}));
