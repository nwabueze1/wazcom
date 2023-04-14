import { FC, useCallback, useState, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Checkbox,
  Radio,
} from "@mui/material";
import { useOptionStyles } from "./styles";
import { OptionProps } from "./types";
import { ExpandMore } from "@mui/icons-material";
import { Option as OptionType } from "../CartDialog/types";
import { parseSelectedChoices } from "./helper";
import { getCurrency, getFloatOrIntAmount } from "../../../../utilities";

export const Option: FC<OptionProps> = ({
  name,
  type,
  options,
  selectedOptions,
  updateSelectedOptions,
  restaurant,
}) => {
  const classes = useOptionStyles();
  const [selectedChoices, setSelectedChoices] = useState<OptionType["selectedChoices"]>(
    parseSelectedChoices(selectedOptions, name),
  );

  useEffect(() => {
    setSelectedChoices(parseSelectedChoices(selectedOptions, name));
  }, [selectedOptions]);

  let currency = restaurant.restaurant.bank_info?.currency as string;
  currency = getCurrency(currency);

  const handleUpdateSelectedOptions = useCallback(
    (add: boolean, choice: { name: string; amount: string }) => {
      let newSelectedChoices = [...selectedChoices];
      if (type === "selection") newSelectedChoices = [];

      if (add) {
        newSelectedChoices.push(choice);
      } else {
        const idx = newSelectedChoices.findIndex(
          (selectedChoice) =>
            selectedChoice.amount === choice.amount && selectedChoice.name === choice.name,
        );
        newSelectedChoices.splice(idx, 1);
      }
      setSelectedChoices(newSelectedChoices);
      updateSelectedOptions({
        name,
        type,
        selectedChoices: newSelectedChoices,
      });
    },
    [updateSelectedOptions, selectedChoices],
  );

  const displayConfig = useCallback(() => {
    let configOptions;
    switch (type) {
      case "selection":
        configOptions = options.selection;
        break;
      case "deselection":
        configOptions = options.deselection;
        break;
      case "extras":
        configOptions = options.extras;
        break;
    }

    return configOptions?.map((config, index) => {
      const amount = (type === "deselection" ? "-" : "+") + currency + config?.amount;
      const name = config?.name as string;
      const isChecked = Boolean(
        selectedChoices.find((choice) => choice.name === name && choice.amount === amount.slice(2)),
      );
      const picker =
        type === "selection" ? (
          <Radio checked={isChecked} className={classes.optionPicker} />
        ) : (
          <Checkbox checked={isChecked} className={classes.optionPicker} />
        );

      return (
        <div
          onClick={() => {
            handleUpdateSelectedOptions(!isChecked, {
              name,
              amount: amount.slice(2),
            });
          }}
          className={classes.option}
          key={index}
        >
          <div className={classes.optionPickerParent}>
            {picker}
            <Typography>{name}</Typography>
          </div>
          <Typography className={classes.optionAmount}>
            {(type === "deselection" ? "-" : config?.amount == 0 ? "" : "+") +
              (config?.amount !== 0 ? currency : "")}
            {getFloatOrIntAmount(config?.amount)}
          </Typography>
        </div>
      );
    });
  }, [selectedChoices, updateSelectedOptions]);

  return (
    <Accordion className={classes.root} isExpanded={true}>
      <AccordionSummary
        id={name}
        aria-controls={name}
        className={classes.summary}
        expandIcon={<ExpandMore />}
      >
        <Typography variant="body1">{name}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        <Typography className={classes.optionType}>{type}</Typography>
        <div>{displayConfig()}</div>
      </AccordionDetails>
    </Accordion>
  );
};
