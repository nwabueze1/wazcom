import { PageNumbersProps, TablePaginationProps } from "./types";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useTablePaginationStyles } from "./styles";
import { TableCell } from "@mui/material";
import clx from "classnames";
import { useState } from "react";

export const TablePagination: React.FC<TablePaginationProps> = ({
  page: currentPage,
  count,
  onPageChange,
}) => {
  const classes = useTablePaginationStyles();
  const [page, setPage] = useState<number>(1);

  return (
    <>
      <TableCell colSpan={2}>
        <div className={clx(classes.text)}>
          All pages: {currentPage}/{count}
        </div>
      </TableCell>
      <TableCell colSpan={1000}>
        <div className={classes.tablePagination}>
          <div className={classes.tablePaginationNavigator}>
            <span
              className={clx(
                classes.text,
                classes.tablePaginationNavigatorText,
              )}
            >
              Naviage to:
            </span>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onPageChange(null, page);
              }}
            >
              <input
                onChange={(e) => setPage(parseInt(e.target.value))}
                value={page}
                className={clx(classes.tablePaginationNavigatorInput)}
                type="number"
                onBlur={() => onPageChange(null, page)}
              />
            </form>
          </div>
          <div className={classes.pageNavigation}>
            <KeyboardArrowLeft
              fontSize="large"
              onClick={() =>
                currentPage > 1 && onPageChange(null, currentPage - 1)
              }
              className={classes.pageNavigationIcon}
            />
            <PageNumbers onPageChange={onPageChange} count={count} />
            <KeyboardArrowRight
              fontSize="large"
              onClick={() =>
                currentPage < count && onPageChange(null, currentPage + 1)
              }
              className={classes.pageNavigationIcon}
            />
          </div>
        </div>
      </TableCell>
    </>
  );
};

export const PageNumbers: React.FC<PageNumbersProps> = function ({
  onPageChange,
  count,
}) {
  const classes = useTablePaginationStyles();

  const renderNumbers = (total: number | string) => {
    // const pageRangeDisplayed = 3;
    // const leftSide = pageRangeDisplayed / 2;
    // const rightSide = pageRangeDisplayed - leftSide;
    const pages = [...Array(total).keys()];

    const leftContent = pages.slice(1, 4).map((page, index) => (
      <span
        className={clx(classes.pageNumber, {
          [classes.activePage]: page == 1,
        })}
        key={index}
        onClick={() => onPageChange(null, page)}
      >
        {page}
      </span>
    ));

    const rightContent =
      pages.length > 3 ? (
        pages.slice(-2).map((page, index) => (
          <span
            className={clx(classes.pageNumber, {
              [classes.activePage]: page == 1,
            })}
            key={index}
            onClick={() => onPageChange(null, page)}
          >
            {page}
          </span>
        ))
      ) : (
        <></>
      );

    const dots =
      pages.length > 3 ? (
        <span className={clx(classes.pageNumber)}>...</span>
      ) : (
        <></>
      );

    return [leftContent, dots, rightContent];
  };

  return <div className={clx(classes.text)}>{renderNumbers(count)}</div>;
};
