import { FC } from "react";
import { PaginationProps } from "./types";
import { useTablePaginationStyles } from "../styles";
import clx from "classnames";

export const Pagination: FC<PaginationProps> = ({ currentPage, pages, setPage }) => {
  const classes = useTablePaginationStyles();

  const pagesArray = new Array(pages).fill("").map((_, index) => index + 1);
  const remainder = pages % 3;
  const slice = Math.floor(pages / 3);
  const firstSlice = pagesArray.slice(0, remainder > 0 ? slice + 1 : slice);
  const secondSlice = pagesArray.slice(
    remainder > 0 ? slice + 1 : slice,
    (remainder > 0 ? slice + 1 : slice) + 3,
  );
  const thirdSlice = pagesArray.slice((remainder > 0 ? slice + 1 : slice) + 3);
  let tabs: (number | string)[];

  if (firstSlice.includes(currentPage)) {
    tabs = [...firstSlice, "...", ...thirdSlice];
  } else if (secondSlice.includes(currentPage)) {
    tabs = [...firstSlice.slice(0, 1), "...", ...secondSlice, ...thirdSlice];
  } else {
    tabs = [...firstSlice.slice(0, 3), "...", ...thirdSlice];
  }

  const getIntervalTab = () => {
    if (firstSlice.includes(currentPage)) return secondSlice[secondSlice.length - 1];
    else if (secondSlice.includes(currentPage)) return firstSlice[firstSlice.length - 1];
    else return firstSlice[firstSlice.length - 1];
  };

  const renderTabs = () => {
    return tabs.map((tab, index) => {
      const isActive = currentPage === Number(tab);
      return (
        <p
          key={index}
          className={clx(classes.paginationPage, isActive && classes.paginationPageActive)}
          onClick={() => {
            if (isActive) return;
            const page = Number(tab === "..." ? getIntervalTab() : tab);
            setPage(page);
          }}
        >
          {tab}
        </p>
      );
    });
  };

  return <>{renderTabs()}</>;
};
