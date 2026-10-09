import { makeStyles } from "@mui/styles";
import { BaseTheme } from "../../theme";

const useStyles = makeStyles((theme: BaseTheme) => ({
  contentRoot: {
    width: "100%",
    height: "100%",
    // overflow: "hidden",
    position: "relative",
  },
  contentContainer: {
    display: "grid",
    width: "100%",
    height: "100%",
    alignItems: "flex-start",
    gridTemplateColumns: "auto 118px",
  },
  formParent: {
    height: "100%",
    display: "flex",
    gap: "16px",
    position: "relative",
    flex: 1,
    maxHeight: "100vh",

    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
  tabParent: {
    height: "100%",
    width: "118px",
    background: theme.design.colors.waz_white,
    boxSizing: "border-box",
    top: 0,
    right: 0,
    padding: theme.spacing(2, 0, 0, 0),
    borderLeft: `1px solid ${theme.design.colors.waz_primary700}`,
  },
  content__form_section: {
    display: "flex",
    flexDirection: "column",
    width: "49%",
    paddingBottom: theme.spacing(3),
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    borderRadius: 4,
    padding: theme.spacing(2, 0),
    gap: theme.spacing(2),
  },
  headerTitle: {
    fontSize: theme.typography.fontSize + 2,
    fontWeight: theme.typography.fontWeightMedium,
  },
  content__form: {
    background: theme.design.colors.waz_white,
    padding: "16px",
    borderRadius: "4px",
  },

  tabIconParent: {
    width: 26,
    height: 26,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    border: `1px solid ${theme.design.colors.primary700}`,
    cursor: "pointer",

    "& .icon": {
      opacity: 0.8,
    },
  },
  tabIcon: {
    fontSize: theme.typography.fontSize + 2,
    opacity: 0.8,
  },
  tabRelatedIcon: {
    fontSize: theme.typography.fontSize,
  },
  tabDetailsIcon: {
    fontSize: theme.typography.fontSize + 5,
  },
  tabContent: {
    textAlign: "center",
    position: "relative",
    left: -4,
  },

  tabContainer: {
    position: "relative",
    boxSizing: "border-box",
    top: 0,
    right: "calc(-30% - 2px)",
    background: theme.design.colors.waz_white,
    width: "30%",
    height: "100%",
    overflowY: "auto",
    transition: "right 0.5s ease-in",
    flex: 0,

    "&::-webkit-scrollbar": {
      width: 4,
      background: "rgba(0,0,0,0.05)",
    },

    "&::-webkit-scrollbar-thumb": {
      background: "rgba(0,0,0,0.25)",
    },

    "&::-webkit-scrollbar-track": {
      background: "rgba(0,0,0,0.01)",
    },
  },
  tabContainerActive: {
    right: 0,
    flex: 1,
    padding: theme.spacing(0, 3),
  },
  tab: {
    position: "relative",
    left: 16,
    width: "calc(100% - 16px)",
    marginBottom: theme.spacing(4),
    padding: theme.spacing(1, 0),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer",
    gap: theme.spacing(0.5),
  },
  activeTab: {
    background: theme.design.colors.waz_primary100,
    color: theme.design.colors.waz_white,
    borderTopLeftRadius: "25px",
    borderBottomLeftRadius: "25px",
  },
  tabName: {
    position: "relative",
    top: -2,
    fontSize: theme.typography.fontSize,
    textAlign: "center",
    textTransform: "capitalize",
  },
  titleHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(3, 0, 2, 0),
  },
  activeTitle: {
    textTransform: "capitalize",
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.fontSize + 2,
    color: theme.design.colors.grey100,
  },
  formEditor: {
    position: "relative",
    top: -8,
    width: "calc(70% - 16px)",
    transition: "width 0.3s ease-in",
  },
  formEditorActive: {
    width: "calc(100% - 30px)",
  },
  formButtons: {
    marginTop: theme.spacing(1.5),
    display: "flex",
    gap: theme.spacing(1.5),
    justifyContent: "flex-end",
  },
  postStatus: {
    padding: theme.spacing(0.3, 1.2),
    borderRadius: theme.spacing(1.5),
    border: `1px solid ${theme.design.colors.grey100}`,
  },
  postStatusPublished: {
    border: `1px solid ${theme.design.colors.waz_successColor200}`,
    backgroundColor: theme.design.colors.waz_successColor200,

    "& > p": {
      color: theme.design.colors.waz_white,
    },
  },
  postStatusText: {
    fontSize: theme.typography.fontSize - 2,
    fontWeight: theme.typography.fontWeightLight,
    color: theme.design.colors.grey100,
  },
  actionButton: {
    justifyContent: "flex-end",
    margin: theme.spacing(3, 0, 0),
    gap: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    "& svg": {
      cursor: "pointer",
    },
  },
  primary: {
    background: `transparent !important`,
    color: `${theme.design.colors.black} !important`,
    border: `1px solid ${theme.design.colors.black} !important`,
  },
  iconShadow: {
    borderRadius: "50%",
    padding: theme.spacing(0.8),
    display: "flex",
    justifyContent: "space-between",
    justifyItems: "center",
    alignItems: "center",
    background: theme.design.colors.white,
    border: `1px solid ${theme.design.colors.lidGrey}`,
  },
  fullScreen: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: -9999,
    opacity: 0,
    color: theme.design.colors.black,
    background: 'rgba(0,0,0,0.2)',
  },
  fullScreen_active: {
    zIndex: 9999,
    opacity: 1,
  },
}));

export default useStyles;
