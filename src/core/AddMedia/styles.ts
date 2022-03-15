import { Theme } from "@mui/material/styles";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { styled } from "@mui/system";
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
    border: `1px dashed ${theme.design.colors.grey40}`,
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
}));

export const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;
