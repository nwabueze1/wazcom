import React, { FC, useCallback, useContext, useMemo, useState } from "react";
import { ItemOptionsProps } from "./types";
import { useOptionsStyles } from "./styles";
import { Option } from "../Option/Option";
import { CoreMenuFields } from "templates/restaurant/types/CoreMenuFields";
import { CoreRestaurantFields_activeMenus_options_config } from "templates/restaurant/types/CoreRestaurantFields";

export const Options: FC<ItemOptionsProps> = ({
  options: initialOptions,
  selectedOptions,
  itemId,
  updateSelectedOptions,
  restaurant,
}) => {
  const classes = useOptionsStyles();

  if (!restaurant) {
    return <div />;
  }

  const menu = useMemo(() => {
    const menus = restaurant.restaurant.activeMenus as CoreMenuFields[];
    return menus.find((menu) =>
      menu?.activeMenuItems?.map((item) => item.id).includes(itemId.toString())
    );
  }, [itemId]);

  const displayOptions = useCallback(() => {
    const options = initialOptions.filter((option) =>
      menu?.options_config?.map((config) => config?.uuid).includes(option)
    );
    return options.map((option, index) => {
      const config = menu?.options_config?.find(
        (config) => config?.uuid.toString() === option
      ) as CoreRestaurantFields_activeMenus_options_config;
      return (
        <Option
          key={index}
          {...config}
          selectedOptions={selectedOptions}
          updateSelectedOptions={updateSelectedOptions}
          restaurant={restaurant}
        />
      );
    });
  }, [updateSelectedOptions]);

  return <div className={classes.root}>{displayOptions()}</div>;
};
