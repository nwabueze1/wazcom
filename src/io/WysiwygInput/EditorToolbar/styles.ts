import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useEditorToolbarStyles = makeStyles((theme: Theme) => ({
    toolbar: {
        background: theme.design.colors.waz_white,
        flexWrap: "wrap",
        border: `1px solid ${theme.design.colors.waz_primary700} !important`,
        margin: theme.spacing(0, 2, 0, 2),
        borderRadius: 5,
        width: "fit-content",
    },
    toolbarItem: {
        paddingRight: theme.spacing(1),
        borderRight: `1px solid ${theme.design.colors.waz_primary700}`,

        "&:last-of-type": {
            borderRightColor: "transparent",
        }
    },
}));