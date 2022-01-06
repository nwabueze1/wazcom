import makeStyles from '@mui/styles/makeStyles';

export const useTextStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
  label: {
    marginBottom: 9,
    fontSize: "1rem",
    fontWeight: 700,
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
  feedbackSuccess: {
    color: 'green',
  },
  feedbackError: {
    color: 'red'
  },
  feedbackNeutral: {
    color: 'black',
  }
}));
