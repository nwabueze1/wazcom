import { makeStyles, Theme } from "@material-ui/core";
interface StyleProps {
    opacity: number,
}

const useStyles = makeStyles<Theme, StyleProps>({
  spinner: {
    position: "fixed",
    right: "3vw",
    bottom: "2vw",
    color: "#F50057",
    opacity: ({ opacity }) => opacity,
    zIndex: ({ opacity }) => (opacity === 0 ? -9999 : 10),
    transition: "opacity 0.5s ease-in",
  },
});

export default useStyles;
