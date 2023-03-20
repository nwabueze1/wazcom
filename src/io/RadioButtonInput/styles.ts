import { makeStyles } from "@mui/styles";
import { BaseTheme } from "theme";
import { RadioButtonInputProps } from "./types";

/** !!-- Remember to update the function name !! */
export const useRadioButtonInputStyles = makeStyles((theme: BaseTheme) => ({
  root: {
    position: 'relative',

    '& .feedback': {
      marginTop: `${theme.spacing(.5)} !important`,
    },
  },

  innerWrapper: (props: RadioButtonInputProps) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer',
    userSelect: 'none',
    height: props?.radioSize ? `${props.radioSize}px` : theme.spacing(1),
    width: props?.radioSize ? `${props.radioSize}px` : theme.spacing(1),

    '& input:checked ~ .custom__radio': {
      backgroundColor: props.checkedBackground ?? theme.design.colors.waz_primary100,
      outline: `1px solid ${props.checkedBackground ?? theme.design.colors.waz_primary100}`,
    },

  }),
  radioWrapper: (props: RadioButtonInputProps) => ({
    display: 'flex',
    flexDirection: props?.position === 'horizontal' ? 'row' : 'column',
    gap: props?.position === 'horizontal' ? theme.spacing(1.4) : theme.spacing(1.1),
    justifyContent: 'center',
    alignItems: 'center',
  }),
  labelStyle: (props: RadioButtonInputProps) => ({
    fontSize: theme.typography.fontSize - 2,
    display: "flex",
    color: theme.design.colors.waz_grey,
    alignItems: "center",
    letterSpacing: "0.13px",
    textTransform: "uppercase",
    order: props?.position === 'horizontal' ? 2 : -1,
    cursor: 'pointer'
  }),
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
  customRadio: (props: RadioButtonInputProps) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    height: props?.radioSize ? `${props.radioSize}px` : theme.spacing(1),
    width: props?.radioSize ? `${props.radioSize}px` : theme.spacing(1),
    borderRadius: theme.spacing(8),
    backgroundColor: props.unCheckedBackground ?? theme.design.colors.grey500,
    outline: `1px solid ${theme.design.colors.grey700}`,
    outlineOffset: theme.spacing(.45),
    opacity: props?.disabled ? .2 : 1,

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
