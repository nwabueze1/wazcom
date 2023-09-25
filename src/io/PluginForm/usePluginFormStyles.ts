import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const usePluginFormStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing(1.5),
  },
  submitButton: {
    display: 'none',
  },
  error: {
    color: `${theme.palette.error.light} !important`,
    marginTop: theme.spacing(1),
  },
  success: {
    color: `${theme.palette.success.main} !important`,
    marginTop: theme.spacing(1),
  },
}));
