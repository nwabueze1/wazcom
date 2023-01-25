import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useFilterSelectorStyles = makeStyles((theme: Theme) => ({
    root: {
        background: theme.design.colors.waz_white,
        boxShadow: "0px 1px 4px #00000014",
        borderRadius: 3,
        width: 170,
        padding: theme.spacing(1, 1, 0, 1),
    },
    filterOperatorHeading: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    filterInput: {
        marginBottom: `0 !important`,
    },
    filterTextInput: {
        padding: theme.spacing(1, 1.5),
        fontSize: theme.typography.fontSize,
    },
    filterSelectInputElement: {
        width: '250% !important',
    },
    filterSelectInput: {
        padding: theme.spacing(0, 5, 0, 0),
        height: '34px !important',
    },
    filterOperator: {
        marginBottom: theme.spacing(1.5),
    },
    filterOperatorCheck: {
        padding: 0,
    }
}));
