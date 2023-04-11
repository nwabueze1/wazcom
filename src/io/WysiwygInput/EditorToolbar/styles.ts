import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useEditorToolbarStyles = makeStyles((theme: Theme) => ({
    toolbar: {
        background: theme.design.colors.waz_white,
        flexWrap: "wrap",
        border: `1px solid ${theme.design.colors.waz_primary700} !important`,
        width: "100%",
    },
    toolbarItem: {
        paddingRight: theme.spacing(3),
        borderRight: `1px solid ${theme.design.colors.waz_primary700}`,

        "&:last-of-type": {
            borderRightColor: "transparent",
        }
    },
}));