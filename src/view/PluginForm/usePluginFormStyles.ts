import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const usePluginFormStyles = makeStyles((theme: Theme) => ({
  form: {
    display: "grid",
    gap: 10,
  },
}));
