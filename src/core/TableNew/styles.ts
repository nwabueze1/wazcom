import { Theme } from "@mui/material/styles";

import makeStyles from "@mui/styles/makeStyles";

export const useTableStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        borderSpacing: "0px 2px",
        borderColor: "transparent",
        fontFamily: theme.design.font.openSans,
        position: "relative",
    },
    tHead: {
        background: theme.design.colors.waz_white,
        marginBottom: theme.spacing(0.5),
    },
    tRow: {
        background: theme.design.colors.waz_white,
    },
    tHeadData: {
        padding: theme.spacing(2),
        fontWeight: theme.typography.fontWeightBold,
    },
    tRowData: {
        padding: theme.spacing(2),
    },
    tableLoader: {
        position: 'absolute',
        top: "calc((100% - 15px)/2)",
    }
}));

