import * as React from "react";
import { FormLabel, TextField } from "@mui/material";
import { usePriceStyles } from "./styles";
import Cookies from "universal-cookie";
import { PriceProps } from "./types";

export const Price: React.FC<PriceProps> = ({
  label,
  onChange,
  value,
  error,
}) => {
  const classes = usePriceStyles();
  const currency = new Cookies().get("site_currency");

  const determineSymbol = (currency: string) => {
    let symbol;

    switch (currency) {
      case "NGN":
        symbol = "N";
        break;
      case "USD":
        symbol = "$";
        break;
      case "GBP":
        symbol = "£";
        break;
      default:
        symbol = "N";
    }

    return symbol;
  };

  return (
    <div className={classes.root}>
      {label && <FormLabel className={classes.label}>{label} </FormLabel>}
      <div className={classes.inputControl}>
        <div className={classes.addon}>{determineSymbol(currency)}</div>
        <TextField
          variant="outlined"
          placeholder={"Enter Price"}
          name={"price"}
          value={value}
          error={error}
          onChange={onChange}
          className={classes.field}
          type="number"
        />
      </div>
      {error && (
        <div style={{ marginTop: "0.5rem" }}>
          {/* <IsRequired error={error} name={"price"} /> */}
        </div>
      )}
    </div>
  );
};
