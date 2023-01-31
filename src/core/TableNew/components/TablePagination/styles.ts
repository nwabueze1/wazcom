import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useTablePaginationStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
        background: theme.design.colors.waz_white,
        padding: theme.spacing(2),
    },
    paginationDirection: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(0.5),
        color: theme.design.colors.waz_grey1,
        transition: 'all 0.3s ease-in',
    },
    paginationDirectionActive: {
        color: theme.design.colors.waz_black,
    },
    paginationDirectionIcon: {
        fontSize: theme.typography.fontSize + 4,
    },
    paginationRows: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1),
    },
    paginationSelect: {
        width: `60px !important`,
        marginBottom: '0 !important',
    },
    paginationSelectInput: {
        padding: "0px 0 0 0",
        background: theme.design.colors.waz_white,
        height: "30px !important",
    },
    paginationSelectInputIcon: {
        fill: theme.design.colors.waz_grey1,
        fontSize: theme.typography.fontSize + 14,
    },
    paginationSelectInputLabel: {
        fontSize: theme.typography.fontSize + 1,
    },
    paginationPages: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: theme.spacing(0.5),
    },
    paginationPage: {
        width: 20,
        height: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: theme.typography.fontSize,
        transition: 'all 0.3s ease-in',
        borderRadius: 4,
        cursor: 'pointer',
    },
    paginationPageActive: {
        background: theme.design.colors.waz_primaryColor100,
        color: theme.design.colors.waz_white,
    }
}));
