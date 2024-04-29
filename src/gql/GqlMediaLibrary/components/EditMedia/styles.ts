import { Theme } from "@mui/material/styles";

import makeStyles from "@mui/styles/makeStyles";

export const useEditMediaStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        gap: theme.spacing(3),
        height: 480,
    },
    image: {
        width: "60%",
        height: "100%",
        objectFit: "cover",
    },
    tab: {
        color: theme.design.colors.waz_primaryColor100,
        paddingBottom: 2,
        borderBottom: `2px solid ${theme.design.colors.waz_primaryColor100}`,
        width: "fit-content",
        marginBottom: theme.spacing(3),
    },
    form: {
        width: "calc(40% - 24px)",
    },
    formControl: {
        marginBottom: theme.spacing(3),
    },
    formButtons: {
        display: "flex",
        gap: theme.spacing(2),
    },
    cancel: {
        background: theme.design.colors.white,
        border: `1px solid ${theme.design.colors.grey300}`,
        color: theme.design.colors.grey100,
        boxShadow: "none",
        "&:hover": {
            background: theme.design.colors.grey900,
        },
    },
    tooltipIcon: {
        color: theme.design.colors.grey300,
        marginLeft: theme.spacing(1),
    },
    placeholderContainer: {
        display: "flex",
    },
    buttonPrimary: {
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.fontSize,
        padding: theme.spacing(1, 2),
        textTransform: "unset",
        fontFamily: theme.design.font.openSans,
        width: '70px',
        height: '34px',
    },
    buttonSecondary: {
        fontWeight: theme.typography.fontWeightMedium,
        background: theme.design.colors.waz_white,
        border: `1px solid ${theme.design.colors.primary600}`,
        fontSize: theme.typography.fontSize,
        padding: theme.spacing(1, 2),
        fontFamily: theme.design.font.openSans,
        width: '65px',
        height: '34px',
        color: theme.design.colors.grey100,

        "&:hover": {
            background: theme.design.colors.waz_white,
        },

        "&:focus": {
            background: theme.design.colors.waz_white,
        },

        "&:hover:focus": {
            background: theme.design.colors.waz_white,
        }
    }
}));
