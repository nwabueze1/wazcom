import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useFilterStyles = makeStyles((theme: Theme) => ({
  container: {
    position: "relative",
  },
  filterItems: {
    position: "absolute",
    zIndex: 5,
    backgroundColor: theme.design.colors.white,
    boxShadow: `0px 10px 20px ${theme.design.colors.greyColor100}`,
    width: 300,
    height: 330,
    top: 50,
    left: 0,
    transition: "all 0.6s ease-in-out",
    overflowY: "scroll",
    opacity: 0,
    visibility: "hidden",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    borderRadius: 4,

    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  filterItemContainer: {
    "& > .MuiAccordion-root" :{
      boxShadow:"none",
      border:"none",
      paddingLeft:"unset",
      paddingRight:"unset",
      width: "100%",

      "& > .MuiAccordionSummary-root":{
        padding: 0,

        "& p" :{
          fontSize:theme.typography.fontSize
        }
      },

      "& > .MuiAccordionDetails-root":{
        padding: 0
      },
    },

    "&:hover": {
      backgroundColor:theme.design.colors.white
    },

    borderBottom:`1px solid #E6E7E6`
  },
  filterItemsHeader:{
    fontSize: theme.typography.fontSize,
    padding: theme.spacing(2)
  },
  show: {
    opacity: 1,
    visibility: "visible",
  },
  showOverlay: {
    visibility: "visible",
    opacity: 0.25,
  },
  filterItem: {
    display: "flex",
    alignItems: "center",
    fontSize: theme.typography.fontSize
  },
  filterActionButtons:{
    display: "flex",
    alignItems:"center",
    padding: theme.spacing(2, 1),
    gap: theme.spacing(2),
    justifyContent:"space-between",
    margin: "0 auto"
  },
  filterActionButton:{
    height: 40,   
  },
  filterActionButtonOutline:{
    background: theme.design.colors.white,
    color: theme.design.colors.greyColor400,
    border: `1px solid ${theme.design.colors.greyColor100}`,
    boxShadow: "none",

    "&:hover":{
      background: theme.design.colors.white,
      color: theme.design.colors.greyColor400,
    }
  }
}));
