import { makeStyles } from '@mui/styles';
import { BaseTheme } from 'contexts/theme';

export const useStyles = makeStyles((theme: BaseTheme) => ({
  tabName: {
    fontSize: theme.typography.fontSize,
    textAlign: 'center',
  },
  tab: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1, 0),
    width: 'calc(100% - 16px)',
    display: 'flex',
    position: 'relative',
    left: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    '&:hover': {
      background: theme.design.colors.black,
      color: theme.design.colors.white,
      borderTopLeftRadius: '25px',
      borderBottomLeftRadius: '25px',
    },
  },
  activeTab: {
    background: theme.design.colors.black,
    color: theme.design.colors.white,
    borderTopLeftRadius: '25px',
    borderBottomLeftRadius: '25px',
  },
  active: {
    color: theme.design.colors.white,
  },
  tabs: {
    background: theme.design.colors.white,
    position: 'fixed',
    zIndex: 20,
    height: 'calc(100vh - 60px)',
    right: 0,
    bottom: 0,
    border: `1px solid ${theme.design.colors.greyPitch}`,
    display: 'flex',
    flexDirection: 'column',
  },
  controls: {
    position: 'fixed',
    zIndex: 20,
    right: 118,
    height: 'calc(100% - 108px)',
    top: 60,
    overflowY: 'auto',
    width: '25%',
    background: theme.design.colors.white,
    padding: theme.spacing(3, 3, 5, 3),
    borderRight: `1px solid ${theme.design.colors.greyPitch}`,
  },
  tabContainer: {
    width: 118,
    paddingTop: theme.spacing(3),
  },
  content__form_section: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: theme.spacing(3),
  },
}));
