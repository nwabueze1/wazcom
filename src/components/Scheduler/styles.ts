import { makeStyles } from "@material-ui/core";

export const useSchedulerStyles = makeStyles(() => ({
  button: {
    background: "#F3F3F3",
    width: "34%",
    padding: "2em",
    marginTop: "1em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "0.6rem",
    borderRadius: "8px",
    color: " #ADADAD",
    cursor: "pointer",
  },
  tableContainer: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    paddingBottom: "2em",
    paddingTop: "2em",
  },
  buttonText: {
    margin: "0",
  },
}));
