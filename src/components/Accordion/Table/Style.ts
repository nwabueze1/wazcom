import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 681,
  },
  tableCont: {
    border: "10px",

    margin: theme.spacing(3),
  },
  tableHead: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "18px",
    padding: theme.spacing(2, 1),
    backgroundColor: theme.design.colors.gray30,
    color: theme.design.colors.pureblack,
    border: `2px solid ${theme.design.colors.gray60}`,
    textAlign: "center",
  },
  tableCell: {
    fontFamily: "Nunito",
    fontSize: "16px",
    padding: theme.spacing(2, 1),
    color: theme.design.colors.pureblack,
    border: `2px solid ${theme.design.colors.gray60}`,
    textAlign: "center",
  },
  select: {
    margin: "0px",
    padding: theme.spacing(1, 7),

    "& .MuiSvgIcon-root": {
      display:'none'
    },

    "&:before": {
      borderColor: theme.design.colors.white,
    },
    icon: {
      fontSize: "50px",
    },
  },
  addTable: {
    margin: theme.spacing(2, 0, 8, 0),
  },
}));
export default useStyles;