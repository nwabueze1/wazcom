import clx from "classnames";
import { useTablePaginationStyles } from "./styles";
import { PageNumberProps } from "./types";

export const PageNumber = ({ onPageChange, page, currentPage }: PageNumberProps) => {
  const classes = useTablePaginationStyles();

  return (
    <span
      className={clx(classes.pageNumber, {
        [classes.activePage]: page == currentPage,
      })}
      onClick={() => onPageChange(null, page)}
    >
      {page}
    </span>
  );
};
