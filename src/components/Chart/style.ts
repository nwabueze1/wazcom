import { makeStyles, Theme } from "@material-ui/core/styles";


export const useChartStyles = makeStyles((theme: Theme) => ({
  chart:{
border:'1px solid blue'
  }, 
  chartHead:{
display:'flex',
justifyContent:'space-between',
padding:theme.spacing(4)
  },
  text:{

  }, 
  select:{}
}));
