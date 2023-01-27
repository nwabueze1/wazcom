import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useEditorMediaLibStyles = makeStyles((theme: Theme) => ({
    mediaLibraryWrapper: {
        zIndex: 15,
        height: "70%",
        width: "70%",
        margin: theme.spacing(0, "auto"),
        marginTop: theme.spacing(12),
    },
    mediaLibraryDialog : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%'
    }
}));
