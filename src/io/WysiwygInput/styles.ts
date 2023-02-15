import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useCreatePostInputStyles = makeStyles((theme: Theme) => ({
    root: {
        marginBottom: theme.spacing(2),
        position: "relative",
        width: "100%",
        border: `1px solid ${theme.design.colors.waz_primary700}`,
    },
    header: {
        borderBottom: `1px solid ${theme.design.colors.waz_primary700}`,
        height: theme.spacing(5.75),
        marginBottom: theme.spacing(2.75)
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(0.5, 0, 0, 0.5),
    },
    editorError: {
        border: "1px solid red",
        zIndex: 1,
    },
    createPostInput: {
        marginTop: theme.spacing(2)
    },
    postButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    postButton: {
        margin: theme.spacing(0, 0, 0, 0),
        border: 'none',
        borderRadius: theme.spacing(0.5),
        background: theme.design.colors.waz_primaryColor100,
        padding: theme.spacing(1,2,1,2),
        color: theme.design.colors.waz_white,
        fontSize: theme.typography.fontSize + 2
    },
}));
