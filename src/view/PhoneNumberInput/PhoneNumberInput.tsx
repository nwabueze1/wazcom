import { usePhoneNumberInputStyles } from "./styles";
import { Wrapper } from "../../core";
import { PhoneNumberInput } from "io";

export const PhoneNumberInputView = () => {
  const classes = usePhoneNumberInputStyles();

  return (
    <div className={classes.root}>
      <Wrapper
        title="Phone number Input"
        description="Phone number input gives the ability for users to input their phone number and selecting their country flag to show the country code."
      >
        <div className={classes.container}>
          <PhoneNumberInput label="DEFAULT" name="Phone" />
        </div>
      </Wrapper>
    </div>
  );
};
