import { CssBaseline } from "@mui/material";
import Paper from "core/Paper/Paper";
import { FC } from "react";
import { Wrapper } from "../../core/Wrapper";
import { usePhoneNumberInputStyle } from "./styles";
import { PhoneNumberInput } from "../../io/PhoneNumberInput";

const PhoneNumberInputView: FC = () => {
  const classes = usePhoneNumberInputStyle();
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
                  <aside className={classes.inputBoxContainer}>
                    <PhoneNumberInput country={code} key={index} />
                  </aside>
                ))}
              </div>
            </Paper>
          </Wrapper>
        </div>
      </CssBaseline>
    </div>
  );
};

export default PhoneNumberInputView;
