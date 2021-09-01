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
  

}));
