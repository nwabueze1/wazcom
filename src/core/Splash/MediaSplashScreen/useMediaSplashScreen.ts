import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";

export const useMediaSplashScreen = makeStyles((theme: Theme) => ({
    body: {
        margin: 0,
        padding: 0,
    },
    heading: {
        fontSize: theme.typography.fontSize + 4,
    },
    subheading: {
        width: "auto",
        fontSize: theme.typography.fontSize,
    },
    bodyTextContainer: {
        maxWidth: "100%",
    },
}));
