import makeStyles from '@mui/styles/makeStyles';

export const useComboBoxStyles = makeStyles(() => ({
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
  error_message: {
    color: "#EA3C53",
    margin: "0.8vh 0 0 0",
    fontSize: "16px",
  },
}));
