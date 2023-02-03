import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useEditorToolbarStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "relative",
    },
    toolbar: {
        background: theme.design.colors.waz_white,
        flexWrap: "wrap",
        // width: '464px',
        border: `1px solid ${theme.design.colors.primary700} !important`,
        margin: theme.spacing(0, 2, 0, 2),
        borderRadius: theme.spacing(0.625),
        '& .ql-picker.ql-size' : {
            width: '30px',
        },
        '& .ql-picker.ql-header' : {
            width: '54px'
        },
        '& .ql-formats' : {
            fontSize: '8px'
        }
    },
    toolbarItem: {
        borderRight: `1px solid ${theme.design.colors.primary700}`,
    },
    wordCount: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        fontSize: theme.typography.fontSize * 0.83,
        background: theme.design.colors.waz_white,
        border: `1px solid ${theme.design.colors.primary700}`,
        padding: theme.spacing(0.75, 2, 0.75, 0),
        height: theme.spacing(3.375),
        position: "absolute",
        bottom: "0",
        right: "0",
        width: "100%",
    },
    editor: {
        color: theme.design.colors.waz_grey1,
        overflow: "auto",
        height: "100vh",
        position: "relative",
        paddingTop: "35px",
    },
    floatingBar: {
        position: "absolute",
        zIndex: 8,
    },
    quillEditor: {
        "& .ql-container": {
            border: `0px solid ${theme.design.colors.primary700} !important`,
        },
        "& .ql-editor .ql-video": {
            width: "80%",
            height: "300px",
        },
        "& .ql-editor": {
            paddingLeft: "16px",
        },
    },
}));