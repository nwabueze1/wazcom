import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import { EditableTextInput } from "io/EditableTextInput";

export const useDynamicInputStyles = makeStyles((theme: Theme) => ({
    root: {
        borderRadius: theme.spacing(1),
        fontSize: "16px",
        color: theme.design.colors.waz_greyColor400,
        width: "100%",
        marginBottom: theme.spacing(2),
    },
    inputControlsContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    editableTextInput: {
        width: "65%"
    },
    selectInputContainer: {
        width: "30%",
        maxHeight: 50
    }
}));
