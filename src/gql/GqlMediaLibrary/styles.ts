import { Theme } from "@mui/material/styles";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { styled } from "@mui/system";
import makeStyles from "@mui/styles/makeStyles";

export const useMediaLibraryStyles = makeStyles((theme: Theme) => ({
  "@keyframes a": {
    "0%, 50%": {
      transform: "scale(0)",
    },
  },
  root: {
    width: "100%",
  },
  collection: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(1),
    position: "relative",
    padding: theme.spacing(0, 4),
  },
  column: {
    display: "flex",
    width: "calc((100% - 16px)/3)",
    flexDirection: "column",
  },
  timesIcon: {
    color: "#999F9B",
    cursor: "pointer",
  },
  thumbnail: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    marginBottom: theme.spacing(1),
    cursor: "pointer",
  },
  thumbnailFixedHeight: {
    height: 150,
  },
  thumbnailOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transition: "opacity 0.3s ease-in",
    opacity: 0,
    background: "rgba(255, 255, 255, 0.3)",

    "&:hover": {
      opacity: 1,
    },
  },
  thumbnailActions: {
    position: "absolute",
    top: "12px",
    right: "6px",
    display: "flex",
  },
  thumbnailAction: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    background: theme.design.colors.white,
    borderRadius: 4,
    marginRight: theme.spacing(1),
    cursor: "pointer",
  },
  thumbnailActionIcon: {
    fontSize: 14,
    color: "#999F9B",
  },
  image: {
    height: "100%",
    objectFit: "cover",
  },
  loading: {
    height: 40,
    opacity: 0.9,
  },
  dot: {
    background: theme.design.colors.black,
    "&, &:after": {
      display: "inline-block",
      width: "2em",
      height: "2em",
      borderRadius: "50%",
      animation:
        "a 1.5s calc(((var(--i) + var(--o, 0))/var(--n) - 1)*#{1.5s}) infinite",
    },

    "&:after": {
      background: "tomato",
      content: '""',
    },
  },
  loaderParent: {
    position: "relative",
    margin: theme.spacing(2, 0),
  },
  loader: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "transparent",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    borderBottom: "1px solid rgba(0,0,0,0.06)",
    padding: theme.spacing(3, 4),
  },
  tab: {
    color: theme.design.colors.primaryColor100,
    paddingBottom: 2,
    borderBottom: `2px solid ${theme.design.colors.primaryColor100}`,
  },
  wrapper: {
    width: "100%",
    backgroundColor: theme.design.colors.white,
    borderRadius: theme.spacing(1),
    maxHeight: "70vh",
    overflow: "scroll",
    zIndex: 15,
    scrollBehavior: "smooth",
  },
  wrapperDialog: {
    maxWidth: 600,
    width: 600,
    maxHeight: 550,
  },
  error: {
    left: 0,
    top: 0,
    width: "25%",
    background: theme.design.colors.white,
    borderRadius: "4px",
    display: "flex",
    justifyContent: "space-between",
  },
  searchContainer: {
    position: "relative",
    padding: theme.spacing(0, 4),
    borderBottom: "1px solid rgba(0,0,0,0.06)",
    marginBottom: theme.spacing(3),
  },

  content: {
    width: "80%",
    margin: theme.spacing(5, "auto"),
    padding: theme.spacing(8, 0),
    border: `1px dashed ${theme.design.colors.grey40}`,
  },
  search: {
    background: theme.design.colors.shainGrey,
  },
  searchParent: {
    display: "flex",
    justifyContent: "flex-end",
  },
  searchIcon: {
    position: "absolute",
    top: "10px",
    left: "35px",
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
