import { CssBaseline } from "@mui/material";
import { Paper } from "../../core/Paper";
import { FC } from "react";
import { Wrapper } from "../../core/Wrapper";
import { usePhoneNumberInputStyle } from "./styles";
import { PhoneNumberInput } from "../../io/PhoneNumberInput";
import { usePhoneNumberInputData } from "./utils/usePhoneNumberInputData";
import { ComponentProps } from "../../core/ComponentProps";

export const PhoneNumberInputView: FC = () => {
  const classes = usePhoneNumberInputStyle();
  const { data, state, handleReset } = usePhoneNumberInputData();

  const countryCodes = ["ng", "gb", "us"];
  return (
    <div className={classes.root}>
      <CssBaseline>
        <div className={classes.container}>
          <Wrapper
            title="Phone Number Input"
            description="Phone number input gives the ability for users to input their phone number and selecting their country flag to show the country code."
          >
            <Paper padding={10}>
              <div className={classes.inputContainer}>
                {countryCodes.map((code, index) => (
                  <aside className={classes.inputBoxContainer} key={index}>
                    <PhoneNumberInput
                      country={
                        state.country.length > 0 && state.country.length <= 2 ? state.country : code
                      }
                      key={index}
                      value={state.value}
                      autoFormat={state.autoFormat}
                      enableAreaCodes={state.enableAreaCodes}
                      disableDropDown={state.disableDropDown}
                      defaultErrorMessage={state.defaultErrorMessage}
                      specialLabel={state.specialLabel}
                    />
                  </aside>
                ))}
              </div>
            </Paper>
            <ComponentProps body={data as any} onReset={handleReset} />
          </Wrapper>
        </div>
      </CssBaseline>
    </div>
  );
};
