import { TableCell } from "@mui/material";
import clx from "classnames";
import { useState } from "react";
import { TablePaginationProps } from "./types";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useTablePaginationStyles } from "./styles";
import { PageNumbers } from "./PageNumbers";

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
              className={clx(classes.pageNavigationIcon, {
                [classes.deactivatePageNavigationIcon]: currentPage < 2,
              })}
            />
            <PageNumbers
              onPageChange={onPageChange}
              count={count}
              currentPage={currentPage}
            />
            <KeyboardArrowRight
              fontSize="large"
              onClick={() =>
                currentPage < count && onPageChange(null, currentPage + 1)
              }
              className={clx(classes.pageNavigationIcon, {
                [classes.deactivatePageNavigationIcon]: currentPage >= count,
              })}
            />
          </div>
        </div>
      </TableCell>
    </>
  );
};
