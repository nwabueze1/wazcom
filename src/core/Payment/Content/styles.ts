import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    padding: "0 0 0.5em 0",
    lineHeight: "1.5",
  },
  header: {
    padding: "0.35em 0",
  },
  subHeader: {
    padding: "0.35em 0",
  },
  list: {
    paddingLeft: "20px",
    width: "90%",
  },
  item: {
    padding: "0.7em 0",
  },
  permission: {
    width: "90%",
  },
}));
