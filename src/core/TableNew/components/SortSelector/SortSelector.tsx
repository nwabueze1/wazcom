import { FC, useState } from "react";
import { useSortSelectorStyles } from "./styles";
import { ClickAwayListener } from "@mui/base";
import { CgSortAz } from "react-icons/cg";
import { SortSelectorProps } from "./types";
import { SortOptions } from "../SortOptions";
import { FaSortAlphaDown } from "react-icons/fa";
import clx from "classnames";

export const SortSelector: FC<SortSelectorProps> = ({
  columns,
  handleSelectSort,
  isV2 = false,
}) => {
  const classes = useSortSelectorStyles();
  const [showColumns, setShowColumns] = useState(false);
  const [activeColumnKey, setActiveColumnKey] = useState<string>();

  const renderColumns = () => {
    return columns.map(({ name, key, sortKey }, index) => (
      <div
        className={classes.sortColumn}
        key={index}
        onMouseEnter={() => {
          setActiveColumnKey(key);
        }}
      >
        {typeof name === "string" ? name : key.replace(/./g, " ")}
        {activeColumnKey === key && (
          <SortOptions
            handleClose={() => {
              setActiveColumnKey(undefined);
            }}
            handleSort={(order: "asc" | "desc") => {
              handleSelectSort(order, sortKey ?? key);
            }}
          />
        )}
      </div>
    ));
  };

  return (
    <ClickAwayListener
      onClickAway={() => {
        setShowColumns(false);
        setActiveColumnKey(undefined);
      }}
    >
      <div className={clx(classes.root, isV2 && classes.rootv2)}>
        <div
          className={clx(classes.sortDetails, isV2 && "v2")}
          onClick={() => {
            setShowColumns(!showColumns);
            setActiveColumnKey(undefined);
          }}
        >
          <p className={classes.sortText}>Sort</p>
          {isV2 ? (
            <FaSortAlphaDown className={classes.sortIconV2} />
          ) : (
            <CgSortAz className={classes.sortIcon} />
          )}
        </div>
        <div className={clx(classes.sortColumns, showColumns && classes.sortColumnsActive)}>
          <p className={classes.sortHeading}>Sort by</p>
          {renderColumns()}
        </div>
      </div>
    </ClickAwayListener>
  );
};
