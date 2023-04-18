import { FC } from "react";
import PhoneNumber from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { usePhoneNumberInputStyles } from "./styles";
import { PhoneNumberInputProps } from "./types";

export const PhoneNumberInput: FC<PhoneNumberInputProps> = ({ classNames, ...props }) => {
  const classes = usePhoneNumberInputStyles();

  return (
    <div className={classes.root}>
      <PhoneNumber
        inputClass={`${classes.textInput} ${classNames?.input}`}
        dropdownClass={`${classes.dropDown} ${classNames?.dropdown}`}
        containerClass={`${classes.root} ${classNames?.container}`}
        {...props}
      
      />
    </div>
  );
};
// country?: string | number;
//     value?: string | null;

//     onlyCountries?: string[];
//     preferredCountries?: string[];
//     excludeCountries?: string[];

//     placeholder?: string;
//     searchPlaceholder?: string;
//     searchNotFound?: string;
//     disabled?: boolean;

//     autoFormat?: boolean;
//     enableAreaCodes?: boolean;
//     enableTerritories?: boolean;

//     disableCountryCode?: boolean;
//     disableDropdown?: boolean;
//     enableLongNumbers?: boolean | number;
//     countryCodeEditable?: boolean;
//     enableSearch?: boolean;
//     disableSearchIcon?: boolean;

//     regions?: string | string[];

//     inputProps?: object;
//     localization?: object;
//     masks?: object;
//     areaCodes?: object;

//     preserveOrder?: string[];

//     defaultMask?: string;

//     alwaysDefaultMask?: boolean;
//     prefix?: string;
//     copyNumbersOnly?: boolean;
//     renderStringAsFlag?: string;
//     autocompleteSearch?: boolean;
//     jumpCursorToEnd?: boolean;
//     priority?: object;
//     enableAreaCodeStretch?: boolean;
//     enableClickOutside?: boolean;
//     showDropdown?: boolean;

//     defaultErrorMessage?: string;
//     specialLabel?: string;
//     disableInitialCountryGuess?: boolean;
//     disableCountryGuess?: boolean;