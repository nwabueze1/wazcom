import { FC } from "react";
import { useSelector } from "react-redux";
import { useOptionsStyles } from "./styles";
import { OptionsProps } from "./types";
import { Option } from "../Option";
import { TAppState } from "../../../../../types";
import { CoreMenuFields, CoreMenuFields_options_config } from "../../../../models";

export const Options: FC<OptionsProps> = ({
  itemOptions,
  selectedOptions,
  handleUpdateSelectedOptions,
}) => {
  const { restaurant } = useSelector<TAppState, TAppState>((state) => state);
  const menu = restaurant?.menu as CoreMenuFields;
  const classes = useOptionsStyles();

  const displayOptions = () => {
    const options = itemOptions.filter((option) =>
      menu?.options_config?.map((config) => config?.uuid).includes(option),
    );
    return options.map((option, index) => {
      const config = menu?.options_config?.find(
        (config) => config?.uuid.toString() === option,
      ) as CoreMenuFields_options_config;

      return (
        <Option
          key={index}
          {...config}
          selectedOptions={selectedOptions}
          handleUpdateSelectedOptions={handleUpdateSelectedOptions}
        />
      );
    });
  };

  return <div className={classes.root}>{displayOptions()}</div>;
};
