var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { styled } from "@mui/system";
import makeStyles from "@mui/styles/makeStyles";
export var useAddMediaStyles = makeStyles(function (theme) { return ({
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
        width: "680px",
        background: theme.design.colors.white,
    },
    dialogueHeader: {
        width: "80%",
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
        width: "80%",
        margin: theme.spacing(5, "auto"),
        padding: theme.spacing(8, 0),
        border: "1px dashed ".concat(theme.design.colors.grey40),
    },
    close: {
        cursor: "pointer",
    },
    text: {
        textAlign: "center",
        fontWeight: theme.typography.fontWeightMedium,
    },
    or: {
        padding: theme.spacing(2),
        fontSize: theme.typography.fontSize - 2,
        textAlign: "center",
    },
    btn: {
        textAlign: "center",
    },
}); });
export var StyledModal = styled(ModalUnstyled)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 1300;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  position: fixed;\n  z-index: 1300;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
export var Backdrop = styled("div")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  z-index: -1;\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-tap-highlight-color: transparent;\n"], ["\n  z-index: -1;\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-tap-highlight-color: transparent;\n"])));
var templateObject_1, templateObject_2;
