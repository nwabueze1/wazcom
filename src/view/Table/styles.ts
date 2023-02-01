import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useTableStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: 'calc(100vh - 60px)',
        padding: theme.spacing(0, 2),
        fontFamily: theme.design.font.openSans,
        paddingBottom: theme.spacing(10),
    },
    viewHeader: {
        marginBottom: theme.spacing(4),
    },
    viewTitle: {
        fontSize: theme.typography.fontSize * 2,
        color: theme.design.colors.waz_primaryBlack,
        marginBottom: theme.spacing(1),
        fontWeight: theme.typography.fontWeightBold,
    },
    viewDescription: {
        width: '90%',
        fontSize: theme.typography.fontSize + 2,
        lineHeight: 1.6,
    },
    viewOptions: {
        display: 'flex',
        paddingBottom: theme.spacing(1.5),
        borderBottom: `1px solid ${theme.design.colors.waz_grey300}`,
        marginBottom: theme.spacing(4),
    },
    viewOptionsButtons: {
        background: theme.design.colors.waz_black,
        fontSize: theme.typography.fontSize,
        borderRadius: 14,
        fontWeight: theme.typography.fontWeightRegular,
        padding: theme.spacing(0.75, 2),
        width: 'unset',
        height: 'unset',
    }
}));