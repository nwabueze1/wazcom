import React from "react";

import Radio, { RadioProps } from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles } from "@material-ui/core";

function StyledRadio(props: RadioProps) {
  const Radio = withStyles({
    root: {
      color: "red",
      "&$checked": {
        color: "red",
      },
    },
    checked: {},
  })((props: RadioProps) => <Radio color="default" {...props} />);

  return <Radio></Radio>;
}

export default function CustomizedRadios() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        defaultValue="female"
        aria-label="gender"
        name="customized-radios"
      >
        <FormControlLabel
          value="female"
          control={<StyledRadio />}
          label="Female"
        />
        <FormControlLabel value="male" control={<StyledRadio />} label="Male" />

        <FormControlLabel
          value="disabled"
          disabled
          control={<StyledRadio />}
          label="(Disabled option)"
        />
      </RadioGroup>
    </FormControl>
  );
}
