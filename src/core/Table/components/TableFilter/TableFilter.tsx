import { Checkbox } from "@mui/material";
import clx from "classnames";
import { Accordion } from "core";
import { TextInput } from "io";
import { useFilterStyles } from "./styles";
import { TableFilterProps } from "./types";

export const TableFilter: React.FC<TableFilterProps> = ({
  showFilter,
  setShowFilter,
  fields,
}) => {
  const classes = useFilterStyles();
  return (
    <>
      <div
        className={clx(classes.overlay, {
          [classes.showOverlay]: showFilter,
        })}
        onClick={() => setShowFilter(false)}
      />
      <div
        className={clx(classes.root, {
          [classes.show]: showFilter,
        })}
      >
        <TextInput placeholder="Search" />
        {fields.map(({ name, label }) => (
          <Accordion title={label} key={name}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <div>{label}</div>
            </div>{" "}
            <div style={{ display: "flex" }}>
              <Checkbox />
              <div>{label}</div>
            </div>{" "}
            <div style={{ display: "flex" }}>
              <Checkbox />
              <div>{label}</div>
            </div>{" "}
            <div style={{ display: "flex" }}>
              <Checkbox />
              <div>{label}</div>
            </div>
          </Accordion>
        ))}
      </div>
    </>
  );
};
