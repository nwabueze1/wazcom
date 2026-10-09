import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useAddMediaStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
    },
    loading: {
        height: 40,
        opacity: 0.9,
    },
    wrapperDialog: {
        maxWidth: 600,
        width: 600,
        maxHeight: 550,
    },
    box: {
        width: "80%",
        height: "70vh",
        background: theme.design.colors.waz_white,
        position: "relative",
        borderRadius: "8px",
    },
    dialogueHeader: {
        width: "90%",
        margin: "auto",
        fontWeight: theme.typography.fontWeightMedium,
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(3, 0),
    },
    line: {
        color: theme.design.colors.gey50,
    },
    content: {
        width: "fit-content",
        margin: theme.spacing(5, "auto"),
        padding: theme.spacing(8, 0),
        border: `1px dashed ${theme.design.colors.grey40}`,
        zIndex: 100,
        position: "absolute",
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
    },
    close: {
        cursor: "pointer",
    },
    text: {
        fontSize: theme.typography.fontSize + 4,
        textAlign: "center",
        fontWeight: theme.typography.fontWeightMedium,
    },
    or: {
        padding: theme.spacing(2),
        fontSize: theme.typography.fontSize - 2,
        textAlign: "center",
    },
    btn: {
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.fontSize + 2,
    },
    modal: {
        position: "fixed",
        zIndex: "1300",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    modalBox: {
        position: "fixed",
        zIndex: "1300",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    drop: {
        zIndex: "-1",
        position: "fixed",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: theme.design.colors.black300,
    },
    uploader: {
        width: "90%",
        minHeight: "400px",
        top: "0%",
        cursor: "pointer",
        border: `2px solid ${theme.design.colors.waz_primaryColor100}`,
        position: "absolute",
        zIndex: 999,
        opacity: 0,
        [theme.breakpoints.down("md")]: {},
    },
    dropBox: {
        position: "relative",
    },
    outline: {
        border: `2px dashed ${theme.design.colors.grey400}`,
        height: "40vh",
        width: "90%",
        margin: theme.spacing(5, "auto"),
    },
    uploadBtn: {
        position: "relative",
        left: "calc((100% - 132px)/2)",
    }
}));
