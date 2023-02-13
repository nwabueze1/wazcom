import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useSidebarListItemStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        height: '100vh',
        overflowY: 'scroll',
        boxSizing: 'content-box',
    },
    list: {
        listStyle: "none",
        overflow: "hidden",
        padding: 0
    },
    listItem: {
        margin: 0,
        padding: 0,
        "& h5": {
            textTransform: "uppercase",
        },
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: theme.design.colors.waz_grey300,
        marginRight: 10,
    },
    label: {},
    chevronIcon: {
        transition: "transform 0.1s ease-in",
        width: 24,
        height: 24
    },
    button: {
        width: 200,
        backgroundColor: theme.design.colors.waz_white,
        color: theme.design.colors.grey100,
        fontSize: theme.typography.h5.fontSize,
        fontWeight: theme.typography.h5.fontWeight,
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'left',
        opacity: 1
    },
    isVisible: {
        minHeight: 200,
        height: "auto",
    },
    isNotVisible: {
        maxHeight: 0,
    },
    innerList: {
        listStyle: "none",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        gap: 10,
        padding: 0,
    },
    innerListItem: {
        background: theme.design.colors.waz_white,
        borderRadius: 1,
        width: 200,
        height: 33,
        color: theme.design.colors.waz_black,
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center'
    },
    link: {
        width: '100%',
        fontSize: theme.typography.fontSize,
        textAlign: 'left',
        padding: '0 20px',
        textDecoration: 'none',
        color: theme.design.colors.waz_black,
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        '&:hover, &:focus, &:hover:focus': {
            transition: 'all 0.5s ease',
            animationDelay: '250ms',
            background: theme.design.colors.waz_black,
            color: theme.design.colors.waz_orangeColor50,
            fontWeight: theme.typography.fontWeightMedium,
            fontSize: theme.typography.fontSize,
            borderRadius: 1,
            padding: '0 20px',
            height: 33,
        }


    },
    linkActive: {
        background: theme.design.colors.waz_black,
        color: theme.design.colors.waz_orangeColor50,
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: theme.typography.fontSize,
        borderRadius: 1,
        padding: '0 20px',
        height: 33,
    },

    sectionLabel: {
        color: theme.design.colors.waz_grey1,
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.fontSize - 4,
    }
}));
