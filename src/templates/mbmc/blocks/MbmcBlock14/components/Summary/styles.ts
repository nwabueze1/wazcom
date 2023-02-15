import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useSummaryStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(3),
        fontFamily: theme.design.font.montserrat,
    },
    summaryDetail: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: theme.typography.fontSize + 2,
    },
    summaryItem: {
        color: theme.design.colors.waz_greyColor400,
    },
    summaryTotal: {
        fontSize: theme.typography.fontSize + 4,
    },
    summaryTotalItem: {
        color: theme.design.colors.waz_greyColor600,
        fontWeight: theme.typography.fontWeightMedium,
    },
    summaryItemDigit: {
        color: theme.design.colors.waz_black,
        fontWeight: theme.typography.fontWeightBold,
    },
    summaryButton: {
        width: "100% !important",
    },
}));
