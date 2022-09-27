import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useEditableTextStyles = makeStyles((theme: Theme) => ({
    root: {
        borderRadius: theme.spacing(1),
        fontSize: "16px",
        color: theme.design.colors.waz_greyColor400,
        width: "100%",
        marginBottom: theme.spacing(2),
    },
    editableTextInput: {
        width: "100%",
        height: 40,
        border: `1px solid ${theme.design.colors.waz_primaryColor100}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: theme.spacing(0, 2),
        color: theme.design.colors.waz_greyColor400,
        borderRadius: theme.spacing(0.5),
    },
    editTagContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    controlIcon: {
        fontSize: 16,
        padding: theme.spacing(1),
        backgroundColor: theme.design.colors.waz_white,
        "&:hover": {
            backgroundColor: theme.design.colors.waz_grey5,
            transition: "ease-in-out .5s",
        },
    },
}));
