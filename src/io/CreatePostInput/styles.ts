import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useCreatePostInputStyles = makeStyles((theme: Theme) => ({
    root: {
        marginBottom: theme.spacing(2),
        position: "relative",
        width: "100%",
        border: `1px solid ${theme.design.colors.primary700}`,
    },
    header: {
        borderBottom: `1px solid ${theme.design.colors.primary700}`,
        height: theme.spacing(5.75),
        marginBottom: theme.spacing(2.75)
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(0.5, 0, 0, 0.5),
    },
    editor: {
        zIndex: 1,
    },
    editorError: {
        border: "1px solid red",
        zIndex: 1,
    },
    createPostInput: {
        marginTop: theme.spacing(2)
    }
    
}));
