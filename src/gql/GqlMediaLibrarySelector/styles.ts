import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useImageSelectorStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(2),

    "& img.selector__square": {
      height: 200,
      borderRadius: 5,
      objectFit: "cover",
    },

    "& img.selector__circle": {
      height: "100%",
      borderRadius: "50%",
      objectFit: "cover",
    },
  },
  container: {
    display: "flex",
    gap: theme.spacing(3),
  },
  emptyContainer: {
    height: "100%",
    border: `2px dashed ${theme.design.colors.waz_primary100}`,
    borderRadius: 5,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.design.colors.waz_white100,
    flexShrink: 0,
    position: "relative",
    overflow: "hidden",
  },
  imageContainer: {
    height: "100%",
    backgroundColor: theme.design.colors.lightGrey,
    border: "none",
    borderRadius: 5,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    borderRadius: "50%",
    border: "1px dashed",
  },
  label: {
    textTransform: "uppercase",
    marginBottom: theme.spacing(1),
    fontSize: theme.typography.fontSize - 2,
  },
  icon: {
    cursor: "pointer",
    color: theme.design.colors.waz_grey1,
    zIndex: 5,
    border: `1px solid ${theme.design.colors.waz_primary400}`,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.fontSize,
    background: theme.design.colors.white,

    "&:hover": {
      background: theme.design.colors.white,
      border: `1px solid ${theme.design.colors.waz_primary400}`,
      color: theme.design.colors.grey100,
    },

    "&:focus": {
      background: theme.design.colors.waz_white,
      border: `1px solid ${theme.design.colors.waz_primary400}`,
      color: theme.design.colors.grey100,
    },

    "&:hover:focus": {
      background: theme.design.colors.waz_white,
      border: `1px solid ${theme.design.colors.waz_primary400}`,
      color: theme.design.colors.grey100,
    },
  },
  cameraIcon: {
    color: theme.design.colors.waz_black,
    cursor: "pointer",
    zIndex: 5,
    background: "transparent",
    fontSize: theme.typography.fontSize * 4,
  },
  removeBtn: {
    cursor: "pointer",
    marginLeft: theme.spacing(5),
    color: theme.design.colors.greyColor300,
    border: `1px solid ${theme.design.colors.waz_mercury}`,
    fontSize: theme.typography.fontSize + 4,
    fontWeight: theme.typography.fontWeightMedium,
    background: theme.design.colors.waz_white,
    "&:hover": {
      background: theme.design.colors.waz_white,
      border: `1px solid ${theme.design.colors.waz_mercury}`,
    },
  },
  actionRemoveBtn: {
    fontSize: theme.typography.fontSize + 2,
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: "22px",
    background: theme.design.colors.waz_white,
    color: theme.design.colors.waz_grey1,
    border: `1px solid ${theme.design.colors.waz_grey200}`,

    "&:hover": {
      background: theme.design.colors.waz_white,
    },
    "&:hover:focus": {
      background: theme.design.colors.waz_white,
    },
  },
  changeBtn: {
    fontSize: theme.typography.fontSize + 2,
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: "22px",
  },
  actionsButton: {
    display: "flex",
    gap: theme.spacing(2),
    alignItems: "center",
  },
  imgUploadContainer: {
    display: "flex",
    alignItems: "flex-start",
    background: theme.design.colors.waz_white,
    position: "relative",
  },
  imgUploadContainerError: {
    border: `1px solid ${theme.design.colors.error} !important`,
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    height: "80vh",
    width: "80vw",
    backgroundColor: theme.design.colors.waz_white,
    zIndex: 15,
  },
  cameraIconSm: {
    fontSize: 20,
    fontWeight: theme.typography.fontWeightBold,
  },
  cameraIconMd: {
    fontSize: 40,
  },
  cameraIconLg: {
    fontSize: 60,
  },
  cameraIconXl: {
    fontSize: 80,
  },
  sizeSm: {
    width: "100px",
    height: "100px",
  },
  sizeMd: {
    width: "200px",
    height: "200px",
  },
  sizeLg: {
    width: "300px",
    height: "300px",
  },
  sizeXl: {
    width: "400px",
    height: "400px",
  },
  full: {
    width: "100%",
    minHeight: "183px",
    maxHeight: "200px",
    height: "200px",
  },
  error: {
    border: `2px solid ${theme.design.colors.waz_dangerColor100}`,
  },
  tools: {
    position: "absolute",
    top: "5px",
    right: "5px",
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(2),
  },
  optionIconContainer: {
    width: "32px",
    height: "32px",
    borderRadius: "16px",
    backgroundColor: theme.design.colors.waz_greenishGrey2,
    display: "flex",
    justifyContent: "center",
    "&.right": {
      position: "absolute",
      right: 10,
      top: 10,
      zIndex: 10,
    },
  },
  toolIcon: {
    color: theme.design.colors.waz_white,
    margin: "0 auto",
  },
  helperText: {
    color: theme.design.colors.red500,
    textAlign: "left",
    background: "transparent",
    fontSize: theme.typography.fontSize - 1,
    marginTop: theme.spacing(0.5),
  },
  plusIcon: {
    color: theme.design.colors.waz_white,
    fontSize: theme.typography.fontSize + 3,
  },
  requiredStar: {
    color: theme.design.colors.error100,
    margin: theme.spacing(-0.5, 0.5, 0),
  },
  layout2Container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.4)",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      display: "block",
      width: "100%",
      height: "auto",
    },
  },
  layout2Button: {
    fontSize: theme.typography.fontSize - 2,
    color: "#596970",
    background: theme.design.colors.waz_white,
    textTransform: "none",
    "&:hover": {
      background: theme.design.colors.waz_white,
    },
  },
  layout2TrashBtn: {
    background: "none",
    cursor: "pointer",
    border: 0,
    position: "absolute",
    top: 10,
    right: 10,
  },
}));
