import { FC } from "react";
import { useTablePaginationV2Styles } from "./stylesV2";
import { TablePaginationProps } from "./types";
import clx from "classnames";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

export const TablePaginationV2: FC<TablePaginationProps> = ({
  currentPage,
  lastPage,
  count,
  setTablePagination,
  classNames,
}) => {
  const classes = useTablePaginationV2Styles();

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
              className={clx(
                classes.paginationPage,
                isActive && classes.paginationPageActive,
                classNames?.paginationPage,
                {
                  [classNames?.paginationPageActive ?? ""]: isActive,
                },
              )}
              onClick={() => {
                if (!isActive) {
                  setTablePagination({
                    count,
                    lastPage,
                    currentPage: pageNumber as number,
                  });
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
    setTablePagination({ count, lastPage, currentPage: currentPage - 1 });
  };

  const handleNextClick = () => {
    if (currentPage === lastPage) return;
    setTablePagination({ count, lastPage, currentPage: currentPage + 1 });
  };

  return (
    <div className={clx(classes.root, classNames?.root)}>
      <button
        className={clx(
          classes.paginationDirection,
          currentPage > 1 && classes.paginationDirectionActive,
          classNames?.paginationDirection,
          {
            [classNames?.paginationDirectionActive ?? ""]: currentPage > 1,
          },
        )}
        onClick={handlePreviousClick}
      >
        <IoArrowBack className={classes.paginationDirectionIcon} />
        <span>Previous</span>
      </button>
      <div className={classes.paginationPages}>{renderPages()}</div>
      <button
        className={clx(
          classes.paginationDirection,
          currentPage < lastPage && classes.paginationDirectionActive,
          classNames?.paginationDirection,
          {
            [classNames?.paginationDirectionActive ?? ""]: currentPage < lastPage,
          },
        )}
        onClick={handleNextClick}
      >
        <span>Next</span>
        <IoArrowForward className={classes.paginationDirectionIcon} />
      </button>
    </div>
  );
};
