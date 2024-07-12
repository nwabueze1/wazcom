import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useMediaUploaderStyles = makeStyles((theme: Theme) => ({
  mediaUploader: {
    position: "relative",
    background: theme.design.colors.waz_white,
    borderRadius: 8,
    boxShadow: `0px 3px 6px ${theme.design.colors.waz_black99}`,
    width: "100%",
    maxWidth: 1128,
    height: "max-content",
    zIndex: 10,
    fontFamily: theme.design.font.openSans,
  },
  mediaUploaderHeadingContainer: {
    padding: theme.spacing(2, 2, 2, 3.5),
    width: "100%",
    boxSizing: "border-box",
  },
  mediaUploaderHeading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  mediaUploaderTitle: {
    color: theme.design.colors.waz_black,
    fontSize: theme.typography.fontSize + 4,
    fontWeight: theme.typography.fontWeightMedium,
  },
  mediaUploaderIcon: {
    color: theme.design.colors.waz_grey200,
    fontSize: theme.typography.fontSize + 4,
    width: "21px",
    height: "21px",
    cursor: "pointer",
  },
  mediaUploaderComponentsContainer: {
    width: "100%",
    maxHeight: "80vh",
    overflowY: "scroll"
  },
  mediaUploaderCropSection: {
    width: "100%",
    borderTop: `1px solid ${theme.design.colors.waz_grey300}`,
    borderRight: `1px solid ${theme.design.colors.waz_grey300}`,
    background: theme.design.colors.waz_grey6,
    borderRadius: "0 0 0 8px",
    padding: theme.spacing(2, 5.5),
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    height: 520,
  },
  mediaUploaderConfigSection: {
    width: "40%",
    borderTop: `1px solid ${theme.design.colors.waz_grey300}`,
    position: "relative",
  },
  collection: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(1),
    padding: theme.spacing(2.5, 0, 2.5, 3),
    minHeight: "65vh",
  },
  dialogueView: {
    height: "calc(100% - 82px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  uploadViewWidth: {
    width: "100%",
  },
  mediaUploaderButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    background: "rgba(240, 240, 240, 0.6)",
  },
  mediaUploaderButton: {
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(2),
  },
  btn: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.fontSize + 2,
    width: "auto",
    flexWrap: "nowrap",
    padding: theme.spacing(0, 2)
  },
}));
