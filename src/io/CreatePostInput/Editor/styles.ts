import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useEditorToolbarStyles = makeStyles((theme: Theme) => ({
    toolbar: {
        zIndex: 1,
        width: 'auto',
        background: theme.design.colors.waz_white,
        flexWrap: 'wrap'
    },
    toolbarItem: {
        borderRight: `1px solid ${theme.design.colors.primary700}`
    }
}));
