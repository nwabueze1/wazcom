import { FC, useState } from "react";
import { ColorInputProps } from "./types";
import { ChromePicker as ColorChromePicker } from "react-color";
import { useColorInputStyles } from "./styles";
import { RGBColor, HSLColor } from "react-color";
import { ClickAwayListener } from "@mui/base";

export const ColorInput: FC<ColorInputProps> = ({ name, value, onChange }) => {
  const classes = useColorInputStyles();
  const [displayPicker, setDisplayPicker] = useState(false);

  const togglePicker = () => {
    setDisplayPicker(!displayPicker);
  };

  const handleClosePicker = () => {
    setDisplayPicker(false);
  };

  const handleChange = (color: { hex: string; rgb: RGBColor; hsl: HSLColor }) => {
    onChange?.({ name, value: color.hex });
  };

  const ChromePicker = ColorChromePicker as any;

  return (
    <ClickAwayListener onClickAway={handleClosePicker}>
      <div className={classes.root}>
        <div className={classes.colorInput} style={{ background: value }} onClick={togglePicker} />
        {displayPicker && (
          <ChromePicker
            onChangeComplete={handleChange}
            className={classes.colorPicker}
            color={value}
          />
        )}
      </div>
    </ClickAwayListener>
  );
};
