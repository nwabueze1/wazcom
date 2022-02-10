import makeStyles from '@mui/styles/makeStyles';

export const useTaggableStyles = makeStyles(() => ({
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
  autoCompleteField: {
    fontSize: 12,
  },
}));
