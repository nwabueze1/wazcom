import { FC, useRef, useEffect } from "react";
import { RegionSelectorProps } from "./types";
import { useRegionSelectorStyles } from "./styles";
import { TextInput } from "../../io";
import { FaTimes } from "react-icons/fa";

declare global {
  interface Window {
    google: any;
  }
}

export const RegionSelector: FC<RegionSelectorProps> = ({ country, name, value, onChange }) => {
  const autoCompleteRef = useRef<any>();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const valueRef = useRef<string[]>(value ?? []);
  const options = {
    componentRestrictions: { country: country ?? "ng" },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["neighborhood", "locality"],
  };
  const classes = useRegionSelectorStyles();
  const id = "region-selector-" + (Math.random() * 1000).toFixed(2);

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, options);

    autoCompleteRef.current?.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current?.getPlace();

      handleAdd(place?.name);

      if (inputRef.current) inputRef.current.value = "";
    });

    setTimeout(() => {
      const regionSelector = document.getElementById(id);
      const pacContainer = document.getElementsByClassName("pac-container")[0];
      regionSelector?.append(pacContainer);
    }, 2000);
  }, []);

  const handleAdd = (location: string) => {
    const updatedValue = [...(valueRef.current ?? []), location];
    valueRef.current = updatedValue;
    onChange?.({ name: name ?? "", value: updatedValue });
  }

  const handleDeleteLocation = (index: number) => {
    const updatedValue = (value ?? []).filter((_, valueIndex) => index !== valueIndex);
    valueRef.current = updatedValue;
    onChange?.({ name: name ?? "", value: updatedValue });
  };

  const renderLocations = () =>
    (value ?? [])?.map((location, index) => (
      <p key={index} className={classes.selectorValue}>
        {location}

        <FaTimes
          className="icon"
          onClick={() => {
            handleDeleteLocation(index);
          }}
        />
      </p>
    ));

  return (
    <div className={classes.root}>
      <div className={classes.selectorHeader} id={id}>
        <TextInput
          name="location"
          ref={inputRef}
          className={classes.selectorInputParent}
          classNames={{ input: classes.selectorInput }}
        />
      </div>
      {(value ?? [])?.length > 0 && (
        <div className={classes.selectorValues}>{renderLocations()}</div>
      )}
    </div>
  );
};
