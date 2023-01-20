import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useEditorToolbarStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: "100vh",
        position: 'relative',
    },
    toolbar: {
        zIndex: 1,
        width: '80%',
        background: theme.design.colors.waz_white,
        flexWrap: 'wrap'
    },
    toolbarItem: {
        borderRight: `1px solid ${theme.design.colors.primary700}`
    },
    wordCount: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        fontSize: theme.typography.fontSize * 0.83,
        background: theme.design.colors.waz_white,
        border: `1px solid ${theme.design.colors.primary700}`,
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(0.75),
        paddingTop: theme.spacing(0.75),
        height: theme.spacing(3.375),
        position: 'absolute',
        bottom: '0',
        right: '0',
        width: '100%',
    },
    editor: {
        // border: `8px solid #FAFAFA`,
        color: theme.design.colors.waz_grey1,
        position: 'relative'
    },
    qlContainer: {
        border: 'none !important'
    },
    qlSnow: {
        border: 'none !important'
    }
}));
