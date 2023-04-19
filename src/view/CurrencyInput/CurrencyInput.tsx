import { CssBaseline } from "@mui/material";
import { FC, useState } from "react";
import { CurrencyInputField } from "../../io";
import { Wrapper } from "../../core";
import { useCurrencyInputStyles } from "./styles";
import { CurrencyInputViewProps } from "./type";

export const CurrencyInputView: FC<CurrencyInputViewProps> = () => {
  const [value] = useState(0);

  const handleEnter = (payload: any) => {
    console.log("onEnter", payload);
  };
  const handleFocus = (payload: any) => {
    console.log("onFocus", payload);
  };
  const handleBlur = (payload: any) => {
    console.log("onBlur", payload);
  };

  const classes = useCurrencyInputStyles();

  const inputData = {
    basic: {
      title: "Basic currency input",
      name: "basic",
      label: "Default",
      placeholder: "Placeholder",
      helperText: "",
    },
    noDropdown: {
      title: "Basic currency input(Without dropdown)",
      name: "noDropdown",
      label: "Default",
      placeholder: "Placeholder",
      helperText: "",
    },
    vertical: {
      title: "Vertical arrangement input",
      name: "vertical",
      label: "Amount",
      placeholder: "Placeholder",
      helperText: "",
    },
    horizontal: {
      title: "Horizontal arrangement input",
      name: "vertical",
      label: "Amount",
      placeholder: "Placeholder",
      helperText: "",
    },
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.container}>
        {/* Default */}
        <Wrapper
          title="Currency Input"
          description="The  Currency Inputs is used to collect currency types and values from users."
          classNames={{
            innerContainer: classes.innerContainer,
          }}
        >
          <h4 className={classes.cardTitle}>{inputData.basic.title}</h4>
          <div className={classes.wrapper}>
            <CurrencyInputField
              className={classes.input}
              label={inputData.basic.label}
              placeholder={inputData.basic.placeholder}
              variant="basic"
              onEnter={handleEnter}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={value}
            />
          </div>
        </Wrapper>
        {/* Without Dropdown */}
        <Wrapper
          showHeader={false}
          classNames={{
            innerContainer: classes.innerContainer,
          }}
        >
          <h4 className={classes.cardTitle}>{inputData.noDropdown.title}</h4>
          <div className={classes.wrapper}>
            <CurrencyInputField
              className={classes.input}
              label={inputData.noDropdown.label}
              placeholder={inputData.noDropdown.placeholder}
              showDropdownIcon={false}
              variant="basic"
              onEnter={handleEnter}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={value}
            />
          </div>
        </Wrapper>
        {/* Vertical */}
        <Wrapper
          showHeader={false}
          classNames={{
            innerContainer: classes.innerContainer,
          }}
        >
          <h4 className={classes.cardTitle}>{inputData.vertical.title}</h4>
          <div className={classes.wrapper}>
            <CurrencyInputField
              className={classes.input}
              label={inputData.vertical.label}
              placeholder={inputData.vertical.placeholder}
              variant="vertical"
              onEnter={handleEnter}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={value}
            />
          </div>
        </Wrapper>
        {/* Horizontal */}
        <Wrapper
          showHeader={false}
          classNames={{
            innerContainer: classes.innerContainer,
          }}
        >
          <h4 className={classes.cardTitle}>{inputData.horizontal.title}</h4>
          <div className={classes.wrapperHorizontal}>
            <CurrencyInputField
              className={classes.input}
              label={inputData.horizontal.label}
              placeholder={inputData.horizontal.placeholder}
              variant="horizontal"
              onEnter={handleEnter}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={value}
            />
          </div>
        </Wrapper>
      </div>
    </div>
  );
};
