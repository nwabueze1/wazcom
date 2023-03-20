import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { CheckInputProps } from "./types";


export const useCheckboxInputStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',

    '& .feedback': {
      marginTop: `${theme.spacing(.5)} !important`,
    },
  },

  innerWrapper: (props: CheckInputProps) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer',
    userSelect: 'none',
    height: props?.height ? `${props.height}px` : theme.spacing(2),
    width: props?.width ? `${props.width}px` : theme.spacing(2),



    '& input:checked ~ .custom__checkbox': {
      backgroundColor: props.checkedBackground ?? theme.design.colors.waz_primary100
    },

    '& .checked__icon': {
      visibility: 'hidden',
      opacity: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: props?.iconSize ? `${props.iconSize}px` : `${theme.typography.fontSize + 5}px`
    },

    '& input:checked ~ .checked__icon': {
      color: theme.design.colors.waz_white,
      visibility: 'visible',
      opacity: 1
    },

  }),
  labelStyle: {
    fontSize: theme.typography.fontSize - 2,
    display: "flex",
    marginBottom: theme.spacing(.7),
    color: theme.design.colors.waz_grey,
    alignItems: "center",
    letterSpacing: "0.13px",
    textTransform: "uppercase",
  },
  input: {
    position: 'absolute',
    opacity: '0',
    cursor: 'pointer',
    height: '0',
    width: '0',
  },
  checkedIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate( -50%, -50%)'
  },
  helperText: {
    fontSize: theme.typography.fontSize - 2,
    marginTop: theme.typography.fontSize - 6
  },
  customCheckbox: (props: CheckInputProps) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    height: props?.height ? `${props.height}px` : theme.spacing(2),
    width: props?.width ? `${props.width}px` : theme.spacing(2),
    borderRadius: theme.spacing(.4),
    border: `${theme.spacing(.2)} solid`,
    borderColor: theme.design.colors.grey700,
    backgroundColor: props.unCheckedBackground ?? theme.design.colors.grey500,

    "&:hover": {
      borderColor: theme.design.colors.primary500,
    },
    "&:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.primary400,
    },
    '&:after': {
      content: '',
      position: 'absolute',
      display: 'none'
    }
  })

}));
