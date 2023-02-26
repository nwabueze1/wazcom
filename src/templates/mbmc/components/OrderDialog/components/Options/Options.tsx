import { FC, useContext } from "react";
import { useOptionsStyles } from "./styles";
import { OptionsProps } from "./types";
import { Option } from "../Option";
import { RestaurantContext } from "../../../../contexts";
import { CoreMenuFields_options_config } from "templates/mbmc/models";

export const Options: FC<OptionsProps> = ({
  itemOptions,
  selectedOptions,
  handleUpdateSelectedOptions,
}) => {
  const { menu } = useContext(RestaurantContext);
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
