import { makeStyles, Theme } from "@material-ui/core/styles";


export const useChartStyles = makeStyles((theme: Theme) => ({
  chartWrapper:{

  },

  Desc:{
    font: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize*1.2,
    fontStyle:'normal',
    fontWeight:'bold',
    color:theme.design.colors.lightRed,
    marginBottom:theme.spacing(2)
  },
  chart:{
border:'1px solid blue'
  }, 
  chartHead:{
display:'flex',
justifyContent:'space-between',
padding:theme.spacing(4)
  },
  text:{
font: theme.typography.fontFamily,
fontSize: theme.typography.fontSize*1.2,
fontStyle:'normal',
fontWeight:'bold',
color:theme.design.colors.pureblack,
  }, 
  select: {
    "&:after": {
      borderBottomColor: "darkred",
    },
    "& .MuiSvgIcon-root": {
      color: "darkred",
    },
  },
  MonthLabel:{
    font: theme.typography.fontFamily,
    fontStyle:'normal',
    color:theme.design.colors.pureblack,
    margin:theme.spacing(0, 0, 4, 0)
  }
 
}));
