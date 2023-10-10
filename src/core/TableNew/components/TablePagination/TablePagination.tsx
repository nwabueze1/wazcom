import { FC } from "react";
import { useTablePaginationStyles } from "./styles";
import { SelectInput } from "../../../../io";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { TablePaginationProps } from "./types";
import clx from "classnames";

export const TablePagination: FC<TablePaginationProps> = ({
  currentPage,
  lastPage,
  count,
  perPage,
  setTablePagination,
}) => {
  const classes = useTablePaginationStyles();

  const renderPages = () => {
    const maxVisiblePages = 25;
    const pageNumbers = [];

    if (lastPage <= maxVisiblePages) {
      pageNumbers.push(...Array.from({ length: lastPage }, (_, index) => index + 1));
    } else {
      const leftBound = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
      const rightBound = Math.min(leftBound + maxVisiblePages - 1, lastPage);

      if (leftBound > 1) {
        pageNumbers.push(1, "ellipsis");
      }

      for (let i = leftBound; i <= rightBound; i++) {
        pageNumbers.push(i);
      }

      if (rightBound < lastPage) {
        pageNumbers.push("ellipsis", lastPage);
      }
    }

    return (
      <div className={classes.elipsisContainer}>
        {pageNumbers.map((pageNumber, index) => {
          if (pageNumber === "ellipsis") {
            return (
              <span key={`ellipsis${index}`} className={classes.elipsis}>
                ...
              </span>
            );
          }

          const isActive = currentPage === pageNumber;
          return (
            <p
              key={pageNumber}
              className={clx(classes.paginationPage, isActive && classes.paginationPageActive)}
              onClick={() => {
                if (!isActive) {
                  setTablePagination({ count, lastPage, perPage, currentPage: pageNumber as number });
                }
              }}
            >
              {pageNumber}
            </p>
          );
        })}
      </div>
    );
  };

  const handlePreviousClick = () => {
    if (currentPage === 1) return;
    setTablePagination({ count, lastPage, perPage, currentPage: currentPage - 1 });
  };

  const handleNextClick = () => {
    if (currentPage === lastPage) return;
    setTablePagination({ count, lastPage, perPage, currentPage: currentPage + 1 });
  };

  return (
    <div className={classes.root}>
      <div
        className={clx(
          classes.paginationDirection,
          currentPage > 1 && classes.paginationDirectionActive,
        )}
        onClick={handlePreviousClick}
      >
        <BsFillCaretLeftFill className={classes.paginationDirectionIcon} />
        <p>Previous</p>
      </div>
      <div className={classes.paginationRows}>
        <p>Rows per page</p>
        <SelectInput
          className={classes.paginationSelect}
          classNames={{
            classes: {
              select: classes.paginationSelectInput,
              icon: classes.paginationSelectInputIcon,
            },
            optionLabel: classes.paginationSelectInputLabel,
          }}
          options={[
            { label: "5", value: "5" },
            { label: "10", value: "10" },
            { label: "20", value: "20" },
          ]}
          onChange={({ value: count }: { name: string; value: string }) => {
            setTablePagination({ currentPage: 1, lastPage, count: Number(count), perPage: Number(count) });
          }}
          value={String(perPage)}
        />
      </div>
      <div className={classes.paginationPages}>{renderPages()}</div>
      <div
        className={clx(
          classes.paginationDirection,
          currentPage < lastPage && classes.paginationDirectionActive,
        )}
        onClick={handleNextClick}
      >
        <p>Next</p>
        <BsFillCaretRightFill className={classes.paginationDirectionIcon} />
      </div>
    </div>
  );
};
