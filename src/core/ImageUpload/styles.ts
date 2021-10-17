import { Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import { ImageUploadStyleProps } from "./types";

export const useImageUploadStyles = makeStyles<Theme, ImageUploadStyleProps>(
  (theme:Theme) => ({
    uploadButton: {
      background: "#fff",
      fontSize: "0.1rem",
      flexDirection: "column",
      color: theme.design.colors.grey,
      width: ({ width }) => width,
      height: ({ height }) => height,
      border: ({ border }) => border,
    },
    label: {},
    uploadedImage: {
      padding: ({ uploadedImgPadding }) => uploadedImgPadding,
    },
    uploadContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    uploadText: {
      fontSize: "14px",
      textTransform: "capitalize",
      color: "#C4C4C4",
    },
    imgNameContainer: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      width: "100%",
    },
    imgName: {
      margin: "0",
      padding: "0.2rem 0",
    },
    changeButton: {
      color: "#FF0000",
      margin: "0",
    },
  }),
);
