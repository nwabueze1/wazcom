import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        width: 46,
        height: 26,
        padding: 0,
<<<<<<< HEAD
        "& .MuiSwitch-track":{
          height:"auto"
          },
=======

        "& .MuiSwitch-track":{
        height:"auto"
        }
>>>>>>> develop
      },
      switchBase: {
        padding: 1,
        "&$checked": {
          transform: "translateX(16px)",
          color: theme.design.colors.red70,
          "& + $track": {
            backgroundColor: theme.design.colors.white,
            opacity: 1,
            border: `2px solid ${theme.design.colors.fauxGrey}`,
          },
        },
        "&$focusVisible $thumb": {
          color: theme.design.colors.red70,
          border: `2px solid ${theme.design.colors.fauxGrey}`,
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(["background-color", "border"]),
      },
      checked: {},
      focusVisible: {},
  })
);

export default useStyles;
